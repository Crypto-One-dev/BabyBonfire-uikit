import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fd9600",
  primaryBright: "#b34107",
  primaryDark: "#2e1001",
  secondary: "#fce2d4",
  success: "#ab3900",
  successalt: "#4a1a01",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#cf6e00",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#fd9600",
  textwhite: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#fd9600",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#0399f9",
  background: "#1b3a4f",
  backgroundDisabled: "#0e1217",
  contrast: "#FFFFFF",
  invertedContrast: "#0e1217",
  input: "#0e1217",
  primaryDark: "#0399f9",
  tertiary: "#0e1217",
  text: "#fd9600",
  textwhite: "#fd9600",
  textDisabled: "#3c4e5a",
  textSubtle: "#fd9600",
  borderColor: "#e2f4ff",
  card: "#f06822",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
