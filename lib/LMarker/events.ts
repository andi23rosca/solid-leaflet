import { ListenerProps } from "../types";

export const events = [
  "dragstart",
  "movestart",
  "drag",
  "dragend",
  "moveend",
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseover",
  "mouseout",
  "contextmenu",
  "add",
  "remove",
  "popupopen",
  "popupclose",
  "tooltipopen",
  "tooltipclose",
] as const;

type LMarkerEvents = typeof events[number];

export type LMarkerListeners = ListenerProps<LMarkerEvents>;
