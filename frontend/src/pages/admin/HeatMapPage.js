import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { HeatmapLayer}  from "react-leaflet-heatmap-layer";
import { geojson } from "./data";
import GoogleMapReact from 'google-map-react'

// function HeatMapPage() {
//   const position = [51.505, -0.09];
//   return (
//     <GoogleMapReact
//           ref={(el) => this._googleMap = el}
//           bootstrapURLKeys={apiKey}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           heatmapLibrary={true}
//           heatmap={heatMapData}
//           onClick={this.onMapClick.bind(this)}
//         >
//     </GoogleMapReact>

//   );
// }

// export default HeatMapPage;
class HeatMapPage extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 13,
  };

  constructor(props) {
    super(props);
    this.state = {
      heatmapVisible: true,
      heatmapPoints: [
        { lat: 59.95, lng: 30.33 },
        { lat: 59.96, lng: 30.32 },
        { lat: 59.96, lng: 30.34 },
        { lat: 59.96, lng: 30.35 },
        { lat: 59.96, lng: 30.36 },
        { lat: 59.96, lng: 30.37 },
        { lat: 59.96, lng: 30.38 },
        { lat: 59.96, lng: 30.39 },
      ],
    };
  }

  render() {
    const apiKey = { key: "AIzaSyCyA2oL6c7q3_yjyG2Is2UabuV68ppIr5Q" };
    const heatMapData = {
      positions: this.state.heatmapPoints,
      options: {
        radius: 20,
        opacity: 0.6,
      },
    };

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          ref={(el) => (this._googleMap = el)}
          bootstrapURLKeys={apiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default HeatMapPage;
// class HeatMapPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13,
//     };
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <MapContainer center={position} zoom={this.state.zoom}>
//         <HeatmapLayer
//           fitBoundsOnLoad
//           fitBoundsOnUpdate
//           points={geojson.features}
//           longitudeExtractor={(m) => m.geometry.coordinates[0]}
//           latitudeExtractor={(m) => m.geometry.coordinates[1]}
//           intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
//         />

//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     );
//   }
// }

// export default HeatMapPage;
