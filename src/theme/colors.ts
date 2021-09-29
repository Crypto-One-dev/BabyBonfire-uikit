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
  borderColor: "#b06a04",
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
  backgroundDisabled: "#001b2d",
  contrast: "#FFFFFF",
  invertedContrast: "#001b2d",
  input: "#001b2d",
  primaryDark: "#0399f9",
  tertiary: "#001b2d",
  text: "#fd9600",
  textwhite: "#fd9600",
  textDisabled: "#fd9600",
  textSubtle: "#fd9600",
  borderColor: "#b06a04",
  card: "#00101b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
