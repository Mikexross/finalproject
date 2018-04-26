import React, { Component } from 'react';

import './listing-form.css';

class ListingForm extends Component {
    constructor(props) {
        super(props);
        this.state = { listing: {
            rental: null,
            price: null,
            size: null,
            amenities: null,
            city: null,
            state: null,
            zip: null
            
        } };
        this.onKeyUpInputRental = this.onKeyUpInputRental.bind(this);
        this.onKeyUpInputPrice = this.onKeyUpInputPrice.bind(this);
        this.onKeyUpInputSize = this.onKeyUpInputSize.bind(this);
        this.onKeyUpInputCity = this.onKeyUpInputCity.bind(this);
        this.onKeyUpInputState = this.onKeyUpInputState.bind(this);
        this.onKeyUpInputZip = this.onKeyUpInputZip.bind(this);
        this.onKeyUpInputAmenities = this.onKeyUpInputAmenities.bind(this);
    }

    onKeyUpInputPrice(event){
        const listing = {...this.state.listing,
        price: event.target.value};
        this.setState({listing});
    };
    onKeyUpInputRental(event){
        const listing = {...this.state.listing,
        rental: event.target.value};
        this.setState({listing});
    };

    onKeyUpInputSize(event){
        const listing = {...this.state.listing,
        size: event.target.value};
        this.setState({listing});
    };
    onKeyUpInputCity(event){
        const listing = {...this.state.listing,
        city: event.target.value};
        this.setState({listing});
    };
    onKeyUpInputState(event){
        const listing = {...this.state.listing,
        state: event.target.value};
        this.setState({listing});
    };
    onKeyUpInputAmenities(event){
        const listing = {...this.state.listing,
        amenitites: event.target.value};
        this.setState({listing});
    };
    onKeyUpInputZip(event){
        const listing = {...this.state.listing,
        zip: event.target.value};
        this.setState({listing});
    };
    render() { 
        return ( 
            <div className="listing-form shadow" >
            <div className="form-group">
    <label htmlFor="rentalTypeSelect">Type of Rental</label>
    <select onChange={this.onKeyUpInputRental} className="form-control" id="rentalTypeSelect" >
      <option value="Entire House ">Entire House</option>
      <option value="Entire Apartment/Condo ">Entire Apartment/Condo</option>
      <option value="Room in House ">Room in House</option>
      <option value="Room in Apartment/Condo ">Room in Apartment/Condo</option>      
      <option value="Townhome ">Townhome</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="priceInput">Cost per Month</label>
    <input onKeyUp= {this.onKeyUpInputPrice} type="text" className="form-control" id="priceInput" placeholder="$/Month"/>
  </div>
  <div className="form-group">
    <label htmlFor="sizeInput">Sqft+</label>
    <input onKeyUp= {this.onKeyUpInputSize} type="text" className="form-control" id="sizeInput" placeholder="sqft+"/>
  </div>
  <div className="form-group">
    <label htmlFor="amenitySelect">Amenities (select all that apply)</label>
    <select multiple   className="form-control" id="amenitySelect">
      <option value="Pet Friendly">Pet Friendly</option>
      <option value="W/D in unit">W/D in unit</option>
      <option value="Furnished">Furnished</option>
      <option value="Fireplace">Fireplace</option>
      <option value="Gym">Gym</option>
      <option value="Garage">Garage</option>
      <option value="Dishwasher">Dishwasher</option>
      <option value="Pool">Pool</option>
    </select>
  </div>
  <div className="form-group">
      <label htmlFor="inputCity">City</label>
      <input onKeyUp= {this.onKeyUpInputCity} type="text" className="form-control" id="inputCity"  placeholder="City"/>
    </div>
    <div className="form-group">
      <label htmlFor="inputState">State</label>
      <select onChange={this.onKeyUpInputState} id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option value= "Colorado">Colorado</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="inputZip">Zip</label>
      <input onKeyUp= {this.onKeyUpInputZip} type="text" className="form-control" id="inputZip" placeholder="5-digit zip"/>
    </div>
    
    <button type="button" className="btn btn-info w-100u">submit</button>
    <p>
        {JSON.stringify(this.state)}
    </p>
    
  
            

            </div>
         )
    }
}
 
export default ListingForm;