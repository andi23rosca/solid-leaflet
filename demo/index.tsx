import { Component, createEffect, createSignal, For } from "solid-js";
import { render } from "solid-js/web";
import { LMap, LMarker } from "../lib";

import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";

const Demo: Component = () => {
  return (
    <LMap
      options={{
        zoom: 5,
        center: [0, 0],
      }}
      style={{ height: "500px" }}
    >
      <LMarker latlng={new LatLng(2, 2)} />
      <LMarker latlng={new LatLng(0, 0)} />
    </LMap>
  );
};

render(() => <Demo />, document.getElementById("app")!);
