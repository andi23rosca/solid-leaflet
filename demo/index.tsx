import { Component, createSignal } from "solid-js";
import { render } from "solid-js/web";
import { LMap, LMarker, LTileLayer } from "../lib";

import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

const Demo: Component = () => {
  const [op, setOp] = createSignal(1);

  //const opacity = (delta: number) => {
  //  setOp(Math.abs(Math.sin(delta / 1000)));
  //  requestAnimationFrame(opacity);
  //};
  //requestAnimationFrame(opacity);

  return (
    <LMap
      options={{
        zoom: 5,
        center: [0, 0],
      }}
      style={{ height: "500px" }}
    >
      <LTileLayer
        urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        options={{
          opacity: op(),
          attribution:
            "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
        }}
      />
      <LMarker latlng={new LatLng(op() * 3, 2)} opacity={op()} />
      <LMarker latlng={new LatLng(0, 0)} />
    </LMap>
  );
};

render(() => <Demo />, document.getElementById("app")!);
