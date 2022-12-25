import { Component, createEffect, createSignal } from "solid-js";
import { render } from "solid-js/web";
import { LMap, LMarker } from "../lib";

import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";

const Demo: Component = () => {
  const [title, setTitle] = createSignal(1);

  createEffect(() => {
    console.log(title());
  });
  return (
    <LMap
      options={{
        zoom: 1,
        center: [0, 0],
      }}
      style={{ height: "500px" }}
    >
      <LMarker
        lClick={() => {
          setTitle(0.5);
        }}
        latlng={new LatLng(0, 0)}
        options={{ opacity: title() }}
      ></LMarker>
    </LMap>
  );
};

render(() => <Demo />, document.getElementById("app")!);
