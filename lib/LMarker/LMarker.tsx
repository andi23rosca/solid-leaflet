import { LatLng, Marker, MarkerOptions } from "leaflet";
import { Component, createEffect, onCleanup, onMount } from "solid-js";
import { useMapContext } from "../MapContext";
import { eventNameToProp } from "../_utils/events";
import { events, LMarkerListeners } from "./events";

type LMarkerProps = {
  latlng: LatLng;
  options?: MarkerOptions;
} & LMarkerListeners;

export const LMarker: Component<LMarkerProps> = (p) => {
  const [{ map }] = useMapContext();

  let marker: Marker;

  onMount(() => {
    marker = new Marker(p.latlng, p.options);
    marker.addTo(map);

    events.forEach((e) => {
      const listener: any = p[eventNameToProp(e)];
      if (listener) marker.addEventListener(e, listener);
    });

    onCleanup(() => {
      marker.remove();
      events.forEach((e) => {
        const listener: any = p[eventNameToProp(e)];
        if (listener) marker.removeEventListener(e, listener);
      });
    });
  });

  createEffect(() => {
    marker.setLatLng(p.latlng);
    if (p.options?.opacity) {
      marker.setOpacity(p.options.opacity);
    }
  });

  return undefined;
};
