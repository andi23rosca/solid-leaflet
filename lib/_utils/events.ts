import { LeafletEventName, ListenerPropName } from "../types";
import { capitalize } from "./capitalize";

export const eventNameToProp = <T extends LeafletEventName>(
  name: T
): ListenerPropName<T> => `l${capitalize(name)}`;
