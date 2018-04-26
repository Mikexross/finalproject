import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    images: [],
    rental: "",
    price: "",
    imgUrl: "",
    size: "",
    date: "",
    location: {
      city: '',
      states: '',
      zip: ''
  }
  
  };


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, rental: "",
    price: "",
    imgUrl: "",
    size: "",
    date: "",
    location: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.rental && this.state.price && this.state.location && this.state.imgUrl) {
      API.saveBook({
        rental: this.state.rental,
        price: this.state.price,
        location: this.state.location,
        imgUrl: this.state.imgUrl
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
              <h1>List your rental!</h1>
            
            <form>
              <Input
                value={this.state.rental}
                onChange={this.handleInputChange}
                name="rental"
                placeholder="rental type (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="price (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="location (Required)"
              />
              <Input
                value={this.state.imgUrl}
                onChange={this.handleInputChange}
                name="imgUrl"
                placeholder="Main image url (Required)"
              />
              <Input
                value={this.state.size}
                onChange={this.handleInputChange}
                name="size"
                placeholder="Size in Square Feet (Optional)"
              />
              <FormBtn
                disabled={!(this.state.price && this.state.rental && this.state.location && this.state.imgUrl)}
                onClick={this.handleFormSubmit}
              >
                Submit Rental
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
              <h1>Available Listings!</h1>
            
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                    
                      <strong>
                        <img src = {book.imgUrl} alt={book.rental} className="img-fluid" />
                        {book.rental} for ${book.price}/month in {book.location}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
