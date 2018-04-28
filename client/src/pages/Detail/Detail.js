import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err))
      .then(console.log(this.state.book.rental));
  }
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.rental} in {this.state.book.location} for ${this.state.book.price}/month
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Amenities</h1>
              <p>
                {this.state.book.cat_friendly}
                {this.state.book.dog_friendly}
                {this.state.book.w_dInUnit}
                {this.state.book.w_dCoin}
                {this.state.book.garage}
                {this.state.book.furnished}
                {this.state.book.fireplace}
                {this.state.book.yard}
                {this.state.book.gym}
                {this.state.book.pool}
                {this.state.book.hottub}
                {this.state.book.smoking}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Listings</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
