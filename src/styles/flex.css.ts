import { style } from "@vanilla-extract/css";

const base = style({
	display: "flex",
});

export const flex = {
	x: style([base, { flexDirection: "row" }]),
	y: style([base, { flexDirection: "column" }]),
};
