import merge from "deepmerge";
import { defaultTheme } from ".";
import { ThemeObjectProps, ThemeTypeProps } from "./types";

export const getTheme = (theme: ThemeTypeProps = "default") => {
  const name = theme;
  switch (theme) {
    case "default":
      return { name, ...defaultTheme };
    // case "dark":
    //   return { name, ...dark };
    default:
      return { name, ...defaultTheme };
  }
};

export const createTheme = (
  theme: ThemeTypeProps = "default",
  variables: ThemeObjectProps
) => {
  const selectedTheme = getTheme(theme);
  const mergedTheme = merge(selectedTheme, variables);
  return mergedTheme;
};
