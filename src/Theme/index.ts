import GlobalStyles from "./GlobalStyles";
import { ThemeObjectProps } from "./types";
import * as themeBase from "./variable";

const theme: ThemeObjectProps = {
  ...themeBase.colors,
  ...themeBase.button,
  ...themeBase.chips,
  ...themeBase.border,
  ...themeBase.icon,
  ...themeBase.zindex,
  ...themeBase.formControl,
  ...themeBase.inputControl,
  ...themeBase.tooltip,
  ...themeBase.shadow,
  ...themeBase.popover,
  ...themeBase.varText,
  ...themeBase.breakpoints,
  ...themeBase.progressTracker,
};

export { GlobalStyles };
export default theme;
