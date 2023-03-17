import { ListenerProps } from "../types";

export const events = [
  "tileabort",
  "loading",
  "tileunload",
  "tileloadstart",
  "tileerror",
  "tileload",
  "load",
  "add",
  "remove",
  "popupopen",
  "popupclose",
  "tooltipopen",
  "tooltipclose",
] as const;

type LTileLayerEvents = (typeof events)[number];

export type LTileLayerListeners = ListenerProps<LTileLayerEvents>;
