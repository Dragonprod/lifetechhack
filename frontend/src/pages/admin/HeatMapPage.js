import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
// import { HeatmapLayer}  from "react-leaflet-heatmap-layer";
import { geojson } from "./data";

function HeatMapPage() {
  const position = [51.505, -0.09];
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>


  );
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
