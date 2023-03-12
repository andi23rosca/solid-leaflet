import { Evented } from "leaflet";
import { LeafletEventName, ListenerPropName, ListenerProps } from "../types";
import { capitalize } from "./capitalize";

/**
 * Maps a leaflet event name to a solid-leaflet prop name
 *
 * @example eventNameToProp("click") returns "lClick"
 */
export const eventNameToProp = <T extends LeafletEventName>(
  name: T
): ListenerPropName<T> => `l${capitalize(name)}`;

export const setupEventListeners = <
  Instance extends Evented,
  Events extends LeafletEventName
>(
  instance: Instance,
  events: readonly Events[],
  listeners: ListenerProps<Events>
) => {
  events.forEach((e) => {
    const listener = listeners[eventNameToProp(e)];
    // rome-ignore lint/suspicious/noExplicitAny: typescript is not flexible enough to infer the right listener type here
    if (listener) instance.addEventListener(e, listener as any);
  });

  return {
    cleanup: () => {
      events.forEach((e) => {
        const listener = listeners[eventNameToProp(e)];
        // rome-ignore lint/suspicious/noExplicitAny: typescript is not flexible enough to infer the right listener type here
        if (listener) instance.removeEventListener(e, listener as any);
      });
    },
  };
};
