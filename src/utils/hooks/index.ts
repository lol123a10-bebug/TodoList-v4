import { useState } from "@hookstate/core";
import { deepClone } from "../helpers";

export const useHookstate = <Type>(value: Type) => useState(deepClone(value));
