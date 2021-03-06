import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import packageJson from '../package.json';

const theme = create({
  base: "light",

  colorSecondary: "#1dc2d2",

  // Typography
  fontBase: '"Rubik", sans-serif',
  fontCode: "monospace",

  brandTitle: `TSUI by Adit [${packageJson.version}]`
});

addons.setConfig({
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,
  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: "bottom",
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\/|\./,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off multiple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: /\|/,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,
  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: true,
  /**
   * theme storybook, see link below
   */
  theme,
  /**
   * function to sort stories in the tree view
   * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
   * if left undefined, then the order in which the stories are imported will
   * be the order they display
   * @type {Function}
   */
  storySort: (a, b) => a[1].id.localeCompare(b[1].id)
});
