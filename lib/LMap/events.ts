import { ListenerProps } from "../types";

export const events = [
  "baselayerchange",
  "overlayadd",
  "overlayremove",
  "layeradd",
  "layerremove",
  "zoomlevelschange",
  "resize",
  "unload",
  "viewreset",
  "load",
  "zoomstart",
  "movestart",
  "zoom",
  "move",
  "zoomend",
  "moveend",
  "popupopen",
  "popupclose",
  "autopanstart",
  "tooltipopen",
  "tooltipclose",
  "locationerror",
  "locationfound",
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseover",
  "mouseout",
  "mousemove",
  "contextmenu",
  "keypress",
  "keydown",
  "keyup",
  "preclick",
  "zoomanim",
] as const;

type LMapEvents = typeof events[number];

export type LMapListeners = ListenerProps<LMapEvents>;
