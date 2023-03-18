import { TileLayer, TileLayerOptions } from "leaflet";
import { Component, createEffect, JSX, onCleanup, onMount } from "solid-js";
import { useMapContext } from "../MapContext";
import { setupEventListeners } from "../_utils/events";
import { LTileLayerListeners, events } from "./events";

type LTileLayerProps = {
  options?: TileLayerOptions;
  children?: JSX.Element;
  urlTemplate: string;
} & LTileLayerListeners;

export const LTileLayer: Component<LTileLayerProps> = (p) => {
  const [{ map }] = useMapContext();

  let tileLayer: TileLayer;

  onMount(() => {
    tileLayer = new TileLayer(p.urlTemplate, p.options);
    tileLayer.addTo(map);

    const { cleanup } = setupEventListeners(tileLayer, events, p);

    onCleanup(() => {
      tileLayer.remove();
      cleanup();
    });
  });

  createEffect(
    () =>
      p.options?.opacity !== undefined &&
      tileLayer.setOpacity(p.options.opacity)
  );

  createEffect(() => tileLayer.setUrl(p.urlTemplate));

  return undefined;
};
