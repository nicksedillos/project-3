import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import CurrentLocation from "./Map.js";
const mapStyles = {
  width: '100%',
  height: '30%'
};



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(JSON.stringify(CurrentLocation.centerAroundCurrentLocation));
    return (
      
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >        
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      
    );
    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDg9Ng1ytm4frd8d6cp9O7IOBDvYEStDQw'
})(MapContainer);


// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat: 44.986656,
//          lng: -93.258133
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDg9Ng1ytm4frd8d6cp9O7IOBDvYEStDQw'
// })(MapContainer);