import * as themeBase from "./_variable";

interface ITheme {
  [key: string]: any
}
const theme: ITheme = {
  ...themeBase.colorAll,
  ...themeBase.button,
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

export default theme;
