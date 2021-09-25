
// import React from 'react';
// import { render } from 'react-dom';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from 'react-leaflet-heatmap-layer';
// import { geojson } from "./data";

// export default class HeatMapPage extends React.Component {

//   render() {
//     return (
//       <div>
//         <MapContainer center={[0,0]} zoom={13}>
//           <HeatmapLayer
//             fitBoundsOnLoad
//             fitBoundsOnUpdate
//             points={geojson}
//             longitudeExtractor={m => m[1]}
//             latitudeExtractor={m => m[0]}
//             intensityExtractor={m => parseFloat(m[2])} />
//           <TileLayer
//             url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//         </MapContainer>
//       </div>
//     );
//   }

// }
import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import HeatmapLayer from "react-leaflet-heatmap-layer";
// import { geojson } from "./data";
// import GoogleMapReact from "google-map-react";
// import "./leaflet.css";

import {
  YMaps,
  Map,
  Polygon,
  Polyline,
  Placemark,
  GeolocationControl,
  ZoomControl,
  TypeSelector,
} from "react-yandex-maps";

function HeatMapPage(props) {
  const mapState = { center: [56.852593, 53.204843], zoom: 7.57};

  return (
    <YMaps query={{ lang: 'ru_RU' }}>
      <Map
        defaultState={mapState}
        width={1000}
        height={600}
        onLoad={ymaps => console.log(ymaps)}
        behaviors={["default", "scrollZoom"]}
      >
        <TypeSelector options={{ float: "right" }} />
        <GeolocationControl options={{ float: "left" }} />
        <ZoomControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
}
export default HeatMapPage;

// // function HeatMapPage(props) {
// //   const position = [51.505, -0.09];
// //   return (
// //     <MapContainer center={position} zoom={13}>
// //       <HeatmapLayer
// //         points={geojson.features}
// //         longitudeExtractor={(m) => m.geometry.coordinates[0]}
// //         latitudeExtractor={(m) => m.geometry.coordinates[1]}
// //         intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
// //         max={100}
// //         minOpacity={0.2}
// //       />

// //       <TileLayer
// //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
// //       />
// //     </MapContainer>
// //   );
// // }

// // function HeatMapPage() {
// //   const position = [51.505, -0.09];
// //   return (
// //     <GoogleMapReact
// //           ref={(el) => this._googleMap = el}
// //           bootstrapURLKeys={apiKey}
// //           defaultCenter={this.props.center}
// //           defaultZoom={this.props.zoom}
// //           heatmapLibrary={true}
// //           heatmap={heatMapData}
// //           onClick={this.onMapClick.bind(this)}
// //         >
// //     </GoogleMapReact>

// //   );
// // }

// // export default HeatMapPage;
// // class HeatMapPage extends React.Component {
// //   static defaultProps = {
// //     center: {
// //       lat: 59.95,
// //       lng: 30.33,
// //     },
// //     zoom: 13,
// //   };

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       heatmapVisible: true,
// //       heatmapPoints: [
// //         { lat: 59.95, lng: 30.33 },
// //         { lat: 59.96, lng: 30.32 },
// //         { lat: 59.96, lng: 30.34 },
// //         { lat: 59.96, lng: 30.35 },
// //         { lat: 59.96, lng: 30.36 },
// //         { lat: 59.96, lng: 30.37 },
// //         { lat: 59.96, lng: 30.38 },
// //         { lat: 59.96, lng: 30.39 },
// //       ],
// //     };
// //   }

// //   render() {
// //     const apiKey = { key: "AIzaSyDTYHj55etv7qUW1VUNkloSP6JDPCPWEj0" };
// //     const heatMapData = {
// //       positions: this.state.heatmapPoints,
// //       options: {
// //         radius: 20,
// //         opacity: 0.6,
// //       },
// //     };

// //     return (
// //       <div style={{ height: "100vh", width: "100%" }}>
// //         <GoogleMapReact
// //           ref={(el) => (this._googleMap = el)}
// //           bootstrapURLKeys={apiKey}
// //           defaultCenter={this.props.center}
// //           defaultZoom={this.props.zoom}
// //           heatmapLibrary={true}
// //           heatmap={heatMapData}
// //         ></GoogleMapReact>
// //       </div>
// //     );
// //   }
// // }

// // export default HeatMapPage;
// // class HeatMapPage extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       lat: 51.505,
// //       lng: -0.09,
// //       zoom: 13,
// //     };
// //   }

// //   render() {
// //     const position = [this.state.lat, this.state.lng];
// //     return (
// //       <MapContainer center={position} zoom={this.state.zoom}>
// //         <HeatmapLayer
// //           fitBoundsOnLoad
// //           fitBoundsOnUpdate
// //           points={geojson.features}
// //           longitudeExtractor={(m) => m.geometry.coordinates[0]}
// //           latitudeExtractor={(m) => m.geometry.coordinates[1]}
// //           intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
// //         />

// //         <TileLayer
// //           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// //           url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
// //         />
// //       </MapContainer>
// //     );
// //   }
// // }

// // export default HeatMapPage;
