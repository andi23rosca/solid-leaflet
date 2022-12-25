import { Map } from "leaflet";
import { Component, createContext, JSX } from "solid-js";
import { createStore } from "solid-js/store";

export type MapContextObj = {
  map: Map | null;
};

export const MapContext = createContext([{ map: null } as MapContextObj, {}]);

export const MapContextProvider: Component<{
  map: Map;
  children?: JSX.Element;
}> = (props) => {
  const [state, setState] = createStore({ map: props.map });
  const value = [state, {}];

  return (
    <MapContext.Provider value={value}>{props.children}</MapContext.Provider>
  );
};
