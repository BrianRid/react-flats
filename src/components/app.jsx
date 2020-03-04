import React, { Component }from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

   selectFlat = (index) => {
     this.setState({
       selectedFlat: flats[index]
     });
   }

  render() {
    let center = {
      lat: 48.866667,
      lng: 2.333333
    }

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
              defaultCenter = {center}
              defaultZoom = {11}
          >
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
