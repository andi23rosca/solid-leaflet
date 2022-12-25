import {
  Component,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { LatLng, Map, MapOptions, Marker } from "leaflet";
import { events, LMapListeners } from "./events";
import { eventNameToProp } from "../_utils/events";
import { MapContextProvider } from "../MapContext";

type LMapProps = {
  options?: MapOptions;
  children?: JSX.Element;
  style?: JSX.HTMLAttributes<HTMLDivElement>["style"];
} & LMapListeners;

export const LMap: Component<LMapProps> = (p) => {
  let mapRoot: HTMLDivElement;

  const [map, setMap] = createSignal<Map>();

  onMount(() => {
    const m = new Map(mapRoot, p.options);
    setMap(m);

    events.forEach((e) => {
      const listener: any = p[eventNameToProp(e)];
      if (listener) m.addEventListener(e, listener);
    });

    onCleanup(() => {
      m.remove();

      events.forEach((e) => {
        const listener: any = p[eventNameToProp(e)];
        if (listener) m.removeEventListener(e, listener);
      });
    });
  });

  return (
    <div ref={(el) => (mapRoot = el)} style={p.style}>
      <Show when={map()} keyed>
        {(map) => (
          <MapContextProvider map={map}>{p.children}</MapContextProvider>
        )}
      </Show>
    </div>
  );
};
