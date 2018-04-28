import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ReactDOM from 'react-dom';
import BToggle from './BToggle';




class Books extends Component {
  state = {
    books: [],
    images: [],
    rental: "",
    price: "",
    imgUrl: "",
    size: "",
    date: "",
    location: "",
    cat_friendly: '"',
    dog_friendly: "",
    w_dInUnit: "",
    w_dCoin: "",
    garage: "",
    furnished: "",
    fireplace: "",
    yard: "",
    gym: "",
    pool: "",
    hottub: "",
    dishwasher: "",
    smoking: "",
    other: "",
  
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
    location: "",
    cat_friendly: "",
    dog_friendly: "", 
    w_dInUnit: "",
    w_dCoin: "",
    garage: "",
    furnished: "",
    fireplace: "",
    yard: "",
    gym: "",
    pool: "",
    hottub: "",
    dishwasher: "",
    smoking: "",
    other: ""})
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
  handleToggle = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.rental && this.state.price && this.state.location && this.state.imgUrl && this.state.price) {
      API.saveBook({
        rental: this.state.rental,
        price: this.state.price,
        location: this.state.location,
        imgUrl: this.state.imgUrl,
        cat_friendly: this.state.cat_friendly,
        dog_friendly:this.state.dog_friendly,
        w_dInUnit: this.state.w_dInUnit,
        w_dCoin: this.state.w_dCoin,
        garage: this.state.garage,
        furnished: this.state.furnished,
        fireplace: this.state.fireplace,
        yard: this.state.yard,
        gym: this.state.gym,
        pool: this.state.pool,
        hottub: this.state.hottub,
        dishwasher: this.state.dishwasher,
        smoking: this.state.smoking,
        other: this.state.other})
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
              
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cat Friendly" 
                onToggle={this.handleToggle.bind(this)}
                toggle={this.state.toggled}/>
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dog Friendly" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Washer and Dryer in Unit" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pay per Wash and Dry" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Garage" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furnished" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fireplace" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yard" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gym" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pool" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hot-Tub" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dishwasher" />
              <BToggle title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smoking" />

              <Input
                value={this.state.cat_friendly}
                onChange={this.handleInputChange}
                name="cat_friendly"
                placeholder="Cat-Friendly?"
              />
              <Input
                value={this.state.dog_friendly}
                onChange={this.handleInputChange}
                name="dog_friendly"
                placeholder="Dog-Friendly?"
              />
              <Input
                value={this.state.w_dInUnit}
                onChange={this.handleInputChange}
                name="w_dInUnit"
                placeholder="Washer and Dryer in Unit?"
              />
               <Input
                value={this.state.w_dCoin}
                onChange={this.handleInputChange}
                name="w_dCoin"
                placeholder="Pay Per Wash and Dry?"
              />
               <Input
                value={this.state.garage}
                onChange={this.handleInputChange}
                name="garage"
                placeholder="Garage?"
              />
               <Input
                value={this.state.furnished}
                onChange={this.handleInputChange}
                name="furnished"
                placeholder="Furnished?"
              />
               <Input
                value={this.state.fireplace}
                onChange={this.handleInputChange}
                name="fireplace"
                placeholder="Fireplace?"
              />
               <Input
                value={this.state.yard}
                onChange={this.handleInputChange}
                name="yard"
                placeholder="Yard?"
              />
               <Input
                value={this.state.gym}
                onChange={this.handleInputChange}
                name="gym"
                placeholder="Fitness Center?"
              />
               <Input
                value={this.state.pool}
                onChange={this.handleInputChange}
                name="pool"
                placeholder="Pool?"
              />
               <Input
                value={this.state.hottub}
                onChange={this.handleInputChange}
                name="hottub"
                placeholder="Hot-Tub?"
              />
               <Input
                value={this.state.dishwasher}
                onChange={this.handleInputChange}
                name="dishwasher"
                placeholder="Dishwasher?"
              />
               <Input
                value={this.state.smoking}
                onChange={this.handleInputChange}
                name="smoking"
                placeholder="Smoking?"
              />
              
              <Input
                value={this.state.other}
                onChange={this.handleInputChange}
                name="other"
                placeholder="Other Amenities, Comments, or Info"
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
