import React, { Component } from 'react';

class Flat extends Component{

  handleclick = () => {
    this.props.selectFlat(this.props.index);
  }

  render(){
    return (
      <div className="card" style={{ backgroundImage: `url('${ this.props.flat.imageUrl }')` }}>
        <div className="card-category">
          {this.props.flat.price} {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <div>
          <a href="#" className="card-link" onClick={this.handleclick}></a>
        </div>
      </div>
    );
  }
};

export default Flat;
