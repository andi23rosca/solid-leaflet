import { Map as LeafletMap, MapOptions } from "leaflet";
import {
  Component,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { MapContextProvider } from "../MapContext";
import { setupEventListeners } from "../_utils/events";
import { events, LMapListeners } from "./events";

type LMapProps = {
  options?: MapOptions;
  children?: JSX.Element;
  style?: JSX.HTMLAttributes<HTMLDivElement>["style"];
  class?: JSX.HTMLAttributes<HTMLDivElement>["class"];
  classList?: JSX.CustomAttributes<HTMLDivElement>["classList"];
  onInit?: (map: LeafletMap) => void;
} & LMapListeners;

export const LMap: Component<LMapProps> = (p) => {
  let mapRoot: HTMLDivElement;

  const [map, setMap] = createSignal<LeafletMap>();

  onMount(() => {
    const mapInstance = new LeafletMap(mapRoot, p.options);
    setMap(mapInstance);
    p.onInit?.(mapInstance);

    const { cleanup } = setupEventListeners(mapInstance, events, p);

    onCleanup(() => {
      mapInstance.remove();
      cleanup();
    });
  });

  return (
    <div
      ref={(el) => (mapRoot = el)}
      style={p.style}
      class={p.class}
      classList={p.classList}
    >
      {/* Only load map context and children after map has been set up */}
      <Show when={map()} keyed>
        {(map) => (
          <MapContextProvider map={map}>{p.children}</MapContextProvider>
        )}
      </Show>

      {/* Needed to prevent solid from removing all children of the leaflet container. (weird bug) */}
      {/* rome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div></div>
    </div>
  );
};
