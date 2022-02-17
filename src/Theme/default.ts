export const space = [
  0,
  4,
  8,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  72,
  80,
];

export const pallete = {
  cyan50: "#EDFEF5",
  cyan100: "#D1FCF2",
  cyan200: "#A4FAEC",
  cyan300: "#74F1E8",
  cyan400: "#50E2E3",
  cyan500: "#1DC2D2",
  cyan600: "#1599B4",
  cyan700: "#0E7497",
  cyan800: "#095479",
  cyan900: "#053D64",

  green50: "#F4FEEF",
  green100: "#DAFBD6",
  green200: "#AFF7B0",
  green300: "#83E78D",
  green400: "#5FCF75",
  green500: "#31b057",
  green600: "#239751",
  green700: "#187E4B",
  green800: "#0F6642",
  green900: "#09543D",

  yellow50: "#FEFCED",
  yellow100: "#FEF5D2",
  yellow200: "#FEE9A5",
  yellow300: "#FDD978",
  yellow400: "#FCC957",
  yellow500: "#fbb020",
  yellow600: "#D78F17",
  yellow700: "#B47010",
  yellow800: "#91540A",
  yellow900: "#784106",

  red50: "#FEF7ED",
  red100: "#FCE3D1",
  red200: "#FAC0A4",
  red300: "#F19474",
  red400: "#E36950",
  red500: "#d22d1d",
  red600: "#B41615",
  red700: "#970E18",
  red800: "#79091A",
  red900: "#64051C",

  black50: "#F7FAF8",
  black100: "#F4F5F8",
  black200: "#EAECF1",
  black300: "#CDD0D7",
  black400: "#A6A8AF",
  black500: "#72747b",
  black600: "#536769",
  black700: "#395358",
  black800: "#243E47",
  black900: "#152E3B",

  white: "#FFFFFF",
};

export const colorBrand = {
  primary: pallete.cyan500,
  secondary: pallete.black900,
  success: pallete.green500,
  error: pallete.red500,
  warning: pallete.yellow500,
  info: pallete.black500,
};

export const color = {
  ...colorBrand,
  ...pallete,
};

export const body = {
  background: color.white,
  color: color.black500,
  fontSize: "14px",
};

export const border = {
  radius: "8px",
  color: color.black200,
  borderWidth: "1px",
  base: "1px solid" + color.black200,
  primary: "1px solid" + color.primary,
};

export const button = {
  color: {
    primary: {
      solid: {
        background: color.primary,
        text: color.white,
        border: "transparent",
        disabled: color.black300,
        disabledText: undefined,
        disabledBorder: undefined,
      },
      outline: {
        background: "transparent",
        text: color.primary,
        border: color.primary,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      flat: {
        background: "transparent",
        text: color.primary,
        border: "transparent",
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: undefined,
      },
      invert: {
        background: color.black100,
        text: color.primary,
        border: "transparent",
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: undefined,
      },
    },
    secondary: {
      solid: {
        background: color.secondary,
        text: color.white,
        border: "transparent",
        disabled: color.black300,
        disabledText: undefined,
        disabledBorder: undefined,
      },
      outline: {
        background: "transparent",
        text: color.secondary,
        border: color.secondary,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      flat: {
        background: "transparent",
        text: color.secondary,
        border: "transparent",
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: undefined,
      },
      invert: {
        background: color.black100,
        text: color.secondary,
        border: "transparent",
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: undefined,
      },
    },
  },
  size: {
    small: {
      height: "28px",
      fontSize: "10px",
    },
    medium: {
      height: "40px",
      fontSize: "14px",
    },
    large: {
      height: "48px",
      fontSize: "16px",
    },
    text: {
      height: "16px",
      fontSize: "14px",
    },
  },
  shape: {
    square: {
      radius: border.radius,
      smallPadding: "8px",
      mediumPadding: "12px",
      largePadding: "16px",
      textPadding: "0px",
    },
    circle: {
      radius: "50%",
      smallPadding: "8px",
      mediumPadding: "12px",
      largePadding: "16px",
      textPadding: "0px",
    },
    pill: {
      radius: "50px",
      smallPadding: "8px",
      mediumPadding: "12px 16px",
      largePadding: "16px 28px",
      textPadding: "0px",
    },
    rectangle: {
      radius: border.radius,
      smallPadding: "8px",
      mediumPadding: "12px 16px",
      largePadding: "16px 28px",
      textPadding: "0px",
    },
  },
};

export const chips = {
  variant: {
    outline: {
      background: "transparent",
      text: color.black500,
      border: color.black300,
      disabled: undefined,
      disabledText: color.black300,
      disabledBorder: color.black300,
    },
    invert: {
      background: color.black100,
      text: color.black500,
      border: "transparent",
      disabled: undefined,
      disabledText: color.black300,
      disabledBorder: undefined,
    },
  },
  activeColor: {
    primary: {
      outline: {
        background: color.cyan50,
        text: color.primary,
        border: color.cyan300,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      invert: {
        background: color.cyan50,
        text: color.primary,
        border: "transparent",
        disabled: color.black300,
        disabledText: color.white,
        disabledBorder: undefined,
      },
    },
    secondary: {
      outline: {
        background: color.black200,
        text: color.secondary,
        border: color.black600,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      invert: {
        background: color.black300,
        text: color.secondary,
        border: "transparent",
        disabled: color.black300,
        disabledText: color.white,
        disabledBorder: undefined,
      },
    },
    success: {
      outline: {
        background: color.green50,
        text: color.success,
        border: color.green300,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      invert: {
        background: color.green50,
        text: color.success,
        border: "transparent",
        disabled: color.black300,
        disabledText: color.white,
        disabledBorder: undefined,
      },
    },
    error: {
      outline: {
        background: color.red50,
        text: color.error,
        border: color.red300,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      invert: {
        background: color.red50,
        text: color.error,
        border: "transparent",
        disabled: color.black300,
        disabledText: color.white,
        disabledBorder: undefined,
      },
    },
    warning: {
      outline: {
        background: color.yellow50,
        text: color.warning,
        border: color.yellow300,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      invert: {
        background: color.yellow50,
        text: color.warning,
        border: "transparent",
        disabled: color.black300,
        disabledText: color.white,
        disabledBorder: undefined,
      },
    },
    info: {
      outline: {
        background: color.black100,
        text: color.info,
        border: color.black400,
        disabled: undefined,
        disabledText: color.black300,
        disabledBorder: color.black300,
      },
      invert: {
        background: color.black100,
        text: color.info,
        border: "transparent",
        disabled: color.black300,
        disabledText: color.white,
        disabledBorder: undefined,
      },
    },
  },
  size: {
    height: "28px",
    fontSize: "10px",
    lineHeight: "10px",
    padding: "8px",
  },
  shape: {
    pill: {
      radius: "50px",
    },
    rectangle: {
      radius: border.radius,
    },
  },
};

export const badge = {
  color: {
    primary: {
      solid: {
        background: color.primary,
        text: color.white,
      },
      invert: {
        background: color.cyan50,
        text: color.primary,
      },
    },
    secondary: {
      solid: {
        background: color.secondary,
        text: color.white,
      },
      invert: {
        background: color.black200,
        text: color.secondary,
      },
    },
    success: {
      solid: {
        background: color.success,
        text: color.white,
      },
      invert: {
        background: color.green50,
        text: color.success,
      },
    },
    error: {
      solid: {
        background: color.error,
        text: color.white,
      },
      invert: {
        background: color.red50,
        text: color.error,
      },
    },
    warning: {
      solid: {
        background: color.warning,
        text: color.white,
      },
      invert: {
        background: color.yellow50,
        text: color.warning,
      },
    },
    info: {
      solid: {
        background: color.info,
        text: color.white,
      },
      invert: {
        background: color.black50,
        text: color.info,
      },
    },
  },
  shape: {
    rectangle: {
      radius: "4px",
    },
    pill: {
      radius: "10px",
    },
  },
  size: {
    minWidth: "18px",
    minHeight: "18px",
    fontSize: "10px",
    lineHeight: "12px",
    padding: "2px 4px",
  },
};

export const icon = {
  size: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
};

export const zindex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalbg: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export const form = {
  label: {
    default: {
      position: "relative",
      zindex: "0",
      marginBottom: "4px",
      fontSize: "14px",
      lineHeight: "20px",
      color: color.black900,
    },
    static: {
      position: "absolute",
      zindex: "1",
      marginBottom: "0px",
      fontSize: "10px",
      fontWeight: "500",
      lineHeight: "12px",
      color: color.black500,
      textTransform: "uppercase",
    },
  },
  helpText: {
    default: {
      marginTop: "4px",
      fontSize: "12px",
      lineHeight: "16px",
    },
    static: {
      marginTop: "4px",
      fontSize: "10px",
      lineHeight: "12px",
    },
  },
};

export const input = {
  status: {
    normal: {
      background: color.white,
      border: color.cyan500,
    },
    success: {
      background: "#EBFFD0",
      border: color.green500,
      helptext: color.green500,
    },
    error: {
      background: "#FFF3F4",
      border: color.red500,
      helptext: color.red500,
    },
    autofill: {
      background: "#FFFEC5",
      border: color.cyan500,
    },
    disabled: {
      background: color.black100,
      border: color.black200,
    },
  },
};

export const tooltip = {
  position: {
    top: {
      bottom: "125%",
      left: "-68px",
      arrowTop: "100%",
      arrowLeft: "50%",
      arrowMarginLeft: "-5px",
    },
    bottom: {
      top: "125%",
      left: "-68px",
      arrowBottom: "100%",
      arrowLeft: "50%",
      arrowMarginLeft: "-5px",
    },
    left: {
      top: "-50%",
      right: "150%",
      arrowTop: "18px",
      arrowRight: "0%",
      arrowMarginRight: "-12px",
    },
    right: {
      top: "-50%",
      left: "150%",
      arrowTop: "18px",
      arrowLeft: "0%",
      arrowMarginLeft: "-12px",
    },
  },
  color: {
    light: {
      backgroundColor: color.white,
      color: color.black500,
    },
    dark: {
      backgroundColor: color.black700,
      color: color.white,
    },
  },
  arrow: {
    lightleft: {
      borderColor: "transparent transparent transparent " + color.white,
    },
    lightright: {
      borderColor: "transparent " + color.white + " transparent transparent",
    },
    lighttop: {
      borderColor: color.white + " transparent transparent transparent",
    },
    lightbottom: {
      borderColor: "transparent transparent " + color.white + " transparent",
    },
    darkleft: {
      borderColor: "transparent transparent transparent " + color.black700,
    },
    darkright: {
      borderColor: "transparent " + color.black700 + " transparent transparent",
    },
    darktop: {
      borderColor: color.black700 + " transparent transparent transparent",
    },
    darkbottom: {
      borderColor: "transparent transparent " + color.black700 + " transparent",
    },
  },
};

export const shadow = [
  "none",
  "0 1px 4px 0 rgba(112, 114, 125, 0.2)",
  "0 1px 4px 0 rgba(112, 114, 125, 0.4)",
  "0 2px 8px 0 rgba(112, 114, 125, 0.4)",
];

export const popover = {
  position: {
    "bottom-left": {
      left: "0%",
      transformX: "0",
    },
    "bottom-center": {
      left: "50%",
      transformX: "-50%",
    },
    "bottom-right": {
      left: "100%",
      transformX: "-100%",
    },
  },
};

export const text = {
  type: {
    H28: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    H24: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    H20: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    H16: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    H14: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "18px",
    },
    H12: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    B16: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    B14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
    },
    B12: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    B10: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
    },
    P16: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    P14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    P12: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
};

export const tracker = {
  stepDefaultBg: color.black500, // default step number bg color
  stepDefaultColor: color.white, // default step number font color
  stepActiveBg: color.cyan500, // active step number bg color
  stepActiveColor: color.white, // active step number font color
  stepDoneBg: color.green500, // done step number bg color
  stepDoneColor: color.white, // done step number font color
  divider: color.black200, // divider color
};

export const grid = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
  container: {
    sm: 46,
    md: 61,
    lg: 76
  },
  breakpoint: {
    xs: 0,
    sm: 48,
    md: 64,
    lg: 75,
  },
};
