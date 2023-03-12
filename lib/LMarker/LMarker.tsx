import { LatLng, Marker, MarkerOptions } from "leaflet";
import { Component, createEffect, JSX, onCleanup, onMount } from "solid-js";
import { useMapContext } from "../MapContext";
import { setupEventListeners } from "../_utils/events";
import { events, LMarkerListeners } from "./events";

type LMarkerProps = {
  latlng: LatLng;
  children?: JSX.Element;
  onInit?: (marker: Marker) => void;
  dragging?: boolean;
} & LMarkerListeners &
  MarkerOptions;

export const LMarker: Component<LMarkerProps> = (p) => {
  const [{ map }] = useMapContext();

  let marker: Marker;

  onMount(() => {
    marker = new Marker(p.latlng, p);
    marker.addTo(map);
    p.onInit?.(marker);

    const { cleanup } = setupEventListeners(marker, events, p);

    onCleanup(() => {
      marker.remove();
      cleanup();
    });
  });

  createEffect(() => marker.setLatLng(p.latlng));
  createEffect(() => p.opacity !== undefined && marker.setOpacity(p.opacity));
  createEffect(() => p.icon !== undefined && marker.setIcon(p.icon));
  createEffect(
    () => p.zIndexOffset !== undefined && marker.setZIndexOffset(p.zIndexOffset)
  );
  createEffect(() =>
    p.dragging !== undefined && p.dragging
      ? marker.dragging?.enable()
      : marker.dragging?.disable()
  );

  return undefined;
};
