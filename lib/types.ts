import {
  DragEndEventHandlerFn,
  ErrorEventHandlerFn,
  LayerEventHandlerFn,
  LayersControlEventHandlerFn,
  LeafletEventHandlerFn,
  LeafletKeyboardEventHandlerFn,
  LeafletMouseEventHandlerFn,
  LocationEventHandlerFn,
  PopupEventHandlerFn,
  ResizeEventHandlerFn,
  TooltipEventHandlerFn,
  ZoomAnimEventHandlerFn,
} from "leaflet";

export type LeafletEvents = {
  // layer events
  baselayerchange: LayersControlEventHandlerFn;
  overlayadd: LayersControlEventHandlerFn;
  overlayremove: LayersControlEventHandlerFn;
  layeradd: LayerEventHandlerFn;
  layerremove: LayerEventHandlerFn;
  // map state change events
  zoomlevelschange: LeafletEventHandlerFn;
  resize: ResizeEventHandlerFn;
  unload: LeafletEventHandlerFn;
  viewreset: LeafletEventHandlerFn;
  load: LeafletEventHandlerFn;
  zoomstart: LeafletEventHandlerFn;
  movestart: LeafletEventHandlerFn;
  zoom: LeafletEventHandlerFn;
  move: LeafletEventHandlerFn;
  zoomend: LeafletEventHandlerFn;
  moveend: LeafletEventHandlerFn;
  // popup events
  popupopen: PopupEventHandlerFn;
  popupclose: PopupEventHandlerFn;
  autopanstart: LeafletEventHandlerFn;
  // tooltip events
  tooltipopen: TooltipEventHandlerFn;
  tooltipclose: TooltipEventHandlerFn;
  // location events
  locationerror: ErrorEventHandlerFn;
  locationfound: LocationEventHandlerFn;
  // interaction events
  click: LeafletMouseEventHandlerFn;
  dblclick: LeafletMouseEventHandlerFn;
  mousedown: LeafletMouseEventHandlerFn;
  mouseup: LeafletMouseEventHandlerFn;
  mouseover: LeafletMouseEventHandlerFn;
  mouseout: LeafletMouseEventHandlerFn;
  mousemove: LeafletMouseEventHandlerFn;
  contextmenu: LeafletMouseEventHandlerFn;
  keypress: LeafletKeyboardEventHandlerFn;
  keydown: LeafletKeyboardEventHandlerFn;
  keyup: LeafletKeyboardEventHandlerFn;
  preclick: LeafletMouseEventHandlerFn;
  // other events
  zoomanim: ZoomAnimEventHandlerFn;
  // dragging events
  dragstart: LeafletEventHandlerFn;
  drag: LeafletEventHandlerFn;
  dragend: DragEndEventHandlerFn;
  // layer events
  add: LeafletEventHandlerFn;
  remove: LeafletEventHandlerFn;
};

export type LeafletEventName = keyof LeafletEvents;

export type ListenerPropName<T extends LeafletEventName> = `l${Capitalize<T>}`;

export type ListenerProps<T extends LeafletEventName> = {
  [Property in T as ListenerPropName<Property>]?: LeafletEvents[Property];
};
