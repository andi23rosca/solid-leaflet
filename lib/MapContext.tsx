import { Map } from "leaflet";
import { Component, createContext, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export type MapContextObj = [
  {
    map: Map;
  },
  {}
];

export const MapContext = createContext<MapContextObj>();

export const MapContextProvider: Component<{
  map: Map;
  children?: JSX.Element;
}> = (props) => {
  const [state, setState] = createStore({ map: props.map });
  const value: MapContextObj = [state, {}];

  return (
    <MapContext.Provider value={value}>{props.children}</MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context)
    throw Error(
      "Any solid-leaflet components must have a LMap as a parent / or a non-undefined MapContext provided."
    );

  return context;
};
