import React, { Component }from 'react';
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
    this.setState({selectedFlat: [index]});
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
        />
      </div>
    );
  }
}

export default App;
