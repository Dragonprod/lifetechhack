import React from "react";
import GoogleMapReact from "google-map-react";

function HeatMapPage(props) {
  const apiKey = "AIzaSyDTYHj55etv7qUW1VUNkloSP6JDPCPWEj0";
  const mapState = { center: [56.852593, 53.204843], zoom: 8 };
  const heatMapData = {
    positions: [
      { lat: 56.852576, lng: 53.2019 },
      { lat: 56.852676, lng: 53.2029 },
      { lat: 56.852476, lng: 53.2039 },
      { lat: 56.852376, lng: 53.2049 },
      { lat: 56.852276, lng: 53.2059 },
      { lat: 56.852346, lng: 53.2069 },
      { lat: 56.852256, lng: 53.2079 },
      { lat: 56.852126, lng: 53.2089 },

      { lat: 56.812576, lng: 53.1019 },
      { lat: 56.822676, lng: 53.2029 },
      { lat: 56.832476, lng: 53.3039 },
      { lat: 56.842376, lng: 53.4049 },
      { lat: 56.852276, lng: 53.5059 },
      { lat: 56.862346, lng: 53.6069 },
      { lat: 56.872256, lng: 53.7079 },
      { lat: 56.882126, lng: 53.8089 },

      { lat: 56.812176, lng: 53.12019 },
      { lat: 56.822176, lng: 53.22029 },
      { lat: 56.832176, lng: 53.32039 },
      { lat: 56.842176, lng: 53.42049 },
      { lat: 56.852176, lng: 53.52059 },
      { lat: 56.862146, lng: 53.62069 },
      { lat: 56.872156, lng: 53.72079 },
      { lat: 56.882126, lng: 53.82089 },

      { lat: 56.812126, lng: 53.12319 },
      { lat: 56.822126, lng: 53.22329 },
      { lat: 56.832126, lng: 53.32339 },
      { lat: 56.842126, lng: 53.42349 },
      { lat: 56.852126, lng: 53.52359 },
      { lat: 56.862126, lng: 53.62369 },
      { lat: 56.872126, lng: 53.72379 },
      { lat: 56.882126, lng: 53.82389 },

      { lat: 56.912126, lng: 53.1119 },
      { lat: 56.922226, lng: 53.22429 },
      { lat: 56.933126, lng: 53.33239 },
      { lat: 56.942126, lng: 53.41349 },
      { lat: 56.952426, lng: 53.54359 },
      { lat: 56.952126, lng: 53.652369 },
      { lat: 56.976126, lng: 53.72379 },
      { lat: 56.982726, lng: 53.81389 },

    ],
    options: {
      radius: 20,
      opacity: 0.6,
    },
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        // ref={(el) => (this._googleMap = el)}
        bootstrapURLKeys={apiKey}
        defaultCenter={mapState.center}
        defaultZoom={mapState.zoom}
        heatmapLibrary={true}
        heatmap={heatMapData}
      ></GoogleMapReact>
    </div>
  );
}
export default HeatMapPage;
