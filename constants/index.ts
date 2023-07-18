import { btnSProps, numSProps, overProps, playProps } from "./types";

const COLORS = { primary: "#0258ad", accent: "#e40606" };

const genNum: any = (min: number, max: number, exclude: number) => {
	(min = Math.ceil(min)), (max = Math.floor(max));
	const ranNum = Math.floor(Math.random() * (max - min)) + min;
	return ranNum == exclude ? genNum(min, max, exclude) : ranNum;
};

export { COLORS, genNum, playProps, overProps, numSProps, btnSProps };
