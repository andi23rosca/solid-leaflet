import { Component } from "solid-js";
import { render } from "solid-js/web";
import { LMap } from "../lib";

import "leaflet/dist/leaflet.css";

const Demo: Component = () => (
  <LMap
    options={{
      zoom: 1,
      center: [0, 0],
    }}
    style={{ height: "500px" }}
  ></LMap>
);

render(() => <Demo />, document.getElementById("app")!);
