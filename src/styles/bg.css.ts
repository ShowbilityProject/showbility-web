import { style } from "@vanilla-extract/css";
import { mapValues } from "es-toolkit";
import { colors } from "./colors.css";

export const bg = mapValues(colors, (value) =>
	style({ backgroundColor: value }),
);
