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
  color: {
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
  },
};

export const colorBrand = {
  color: {
    primary: pallete.color.cyan500,
    secondary: pallete.color.black900,
    success: pallete.color.green500,
    error: pallete.color.red500,
    warning: pallete.color.yellow500,
    info: pallete.color.black500,
  },
};

export const colors = {
  color: {
    ...colorBrand.color,
    ...pallete.color,
  },
};

export const border = {
  border: {
    radius: "8px",
    color: colors.color.black200,
    borderWidth: "1px",
    base: "1px solid" + colors.color.black200,
    primary: "1px solid" + colorBrand.color.primary,
  },
};

export const button = {
  buttonColor: {
    primary: {
      solid: {
        background: colors.color.primary,
        text: colors.color.white,
        border: "transparent",
        disabled: colors.color.black200,
      },
      outline: {
        background: "transparent",
        text: colors.color.primary,
        border: colors.color.primary,
        disabledText: colors.color.black200,
        disabledBorder: colors.color.black200,
      },
      flat: {
        background: "transparent",
        text: colors.color.primary,
        border: "transparent",
        disabledText: colors.color.black200,
      },
      invert: {
        background: colors.color.black100,
        text: colors.color.primary,
        border: "transparent",
        disabledText: colors.color.black200,
      },
    },
    secondary: {
      solid: {
        background: colors.color.secondary,
        text: colors.color.white,
        border: "transparent",
        disabled: colors.color.black200,
      },
      outline: {
        background: "transparent",
        text: colors.color.secondary,
        border: colors.color.secondary,
        disabledText: colors.color.black200,
        disabledBorder: colors.color.black200,
      },
      flat: {
        background: "transparent",
        text: colors.color.secondary,
        border: "transparent",
        disabledText: colors.color.black200,
      },
      invert: {
        background: colors.color.black100,
        text: colors.color.secondary,
        border: "transparent",
        disabledText: colors.color.black200,
      },
    },
  },
  buttonSize: {
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
  buttonShape: {
    square: {
      radius: "0px",
      smallPadding: "8px",
      mediumPadding: "12px",
      largePadding: "16px",
    },
    circle: {
      radius: "50%",
      smallPadding: "8px",
      mediumPadding: "12px",
      largePadding: "16px",
    },
    pill: {
      radius: "50px",
      smallPadding: "8px",
      mediumPadding: "12px 16px",
      largePadding: "16px 28px",
    },
    rectangle: {
      radius: border.border.radius,
      smallPadding: "8px",
      mediumPadding: "12px 16px",
      largePadding: "16px 28px",
    },
  },
};

export const chips = {
  chipsColor: {
    primary: {
      background: "transparent",
      backgroundActive: colors.color.cyan50,
      text: colors.color.primary,
      textActive: colors.color.primary,
      border: colors.color.black300,
      borderActive: colors.color.cyan300,
      disabledText: colors.color.black200,
      disabledBorder: colors.color.black200,
    },
    secondary: {
      background: "transparent",
      backgroundActive: colors.color.black200,
      text: colors.color.secondary,
      textActive: colors.color.secondary,
      border: colors.color.black300,
      borderActive: colors.color.black600,
      disabledText: colors.color.black200,
      disabledBorder: colors.color.black200,
    },
    success: {
      background: "transparent",
      backgroundActive: colors.color.green50,
      text: colors.color.success,
      textActive: colors.color.success,
      border: colors.color.black300,
      borderActive: colors.color.green300,
      disabledText: colors.color.black200,
      disabledBorder: colors.color.black200,
    },
    error: {
      background: "transparent",
      backgroundActive: colors.color.red50,
      text: colors.color.error,
      textActive: colors.color.error,
      border: colors.color.black300,
      borderActive: colors.color.red300,
      disabledText: colors.color.black200,
      disabledBorder: colors.color.black200,
    },
    warning: {
      background: "transparent",
      backgroundActive: colors.color.yellow50,
      text: colors.color.warning,
      textActive: colors.color.warning,
      border: colors.color.black300,
      borderActive: colors.color.yellow300,
      disabledText: colors.color.black200,
      disabledBorder: colors.color.black200,
    },
    info: {
      background: "transparent",
      backgroundActive: colors.color.black50,
      text: colors.color.info,
      textActive: colors.color.info,
      border: colors.color.black300,
      borderActive: colors.color.black400,
      disabledText: colors.color.black200,
      disabledBorder: colors.color.black200,
    },
  },
  chipsSize: {
    height: "28px",
    fontSize: "10px",
    lineHeight: "10px",
    padding: "8px 12px",
  },
  chipsShape: {
    pill: {
      radius: "50px",
    },
    rectangle: {
      radius: border.border.radius,
    },
  },
};

export const icon = {
  iconSize: {
    small: "10px",
    medium: "16px",
    large: "24px",
  },
};

export const zindex = {
  zindex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalbg: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export const formControl = {
  formLabel: {
    default: {
      position: "relative",
      zindex: "0",
      marginBottom: "4px",
      fontSize: "14px",
      lineHeight: "20px",
      color: colors.color.black900,
    },
    static: {
      position: "absolute",
      zindex: "1",
      marginBottom: "0px",
      fontSize: "10px",
      fontWeight: "500",
      lineHeight: "12px",
      color: colors.color.black500,
      textTransform: "uppercase",
    },
  },
  formHelpText: {
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

export const inputControl = {
  inputStatus: {
    // background: background color
    // border: border color
    // helptext: helptext color
    normal: {
      background: colors.color.white,
      border: colors.color.cyan500,
    },
    success: {
      background: "#EBFFD0",
      border: colors.color.green500,
      helptext: colors.color.green500,
    },
    error: {
      background: "#FFF3F4",
      border: colors.color.red500,
      helptext: colors.color.red500,
    },
    autofill: {
      background: "#FFFEC5",
      border: colors.color.cyan500,
    },
    disabled: {
      background: colors.color.black100,
      border: colors.color.black200,
    },
  },
};

export const tooltip = {
  tooltipPosition: {
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
  tooltipColor: {
    light: {
      backgroundColor: colors.color.white,
      color: colors.color.black500,
    },
    dark: {
      backgroundColor: colors.color.black700,
      color: colors.color.white,
    },
  },
  tooltipArrow: {
    lightleft: {
      borderColor: "transparent transparent transparent " + colors.color.white,
    },
    lightright: {
      borderColor:
        "transparent " + colors.color.white + " transparent transparent",
    },
    lighttop: {
      borderColor: colors.color.white + " transparent transparent transparent",
    },
    lightbottom: {
      borderColor:
        "transparent transparent " + colors.color.white + " transparent",
    },
    darkleft: {
      borderColor:
        "transparent transparent transparent " + colors.color.black700,
    },
    darkright: {
      borderColor:
        "transparent " + colors.color.black700 + " transparent transparent",
    },
    darktop: {
      borderColor:
        colors.color.black700 + " transparent transparent transparent",
    },
    darkbottom: {
      borderColor:
        "transparent transparent " + colors.color.black700 + " transparent",
    },
  },
};

export const shadow = {
  shadow: [
    "none",
    "0 1px 4px 0 rgba(112, 114, 125, 0.2)",
    "0 1px 4px 0 rgba(112, 114, 125, 0.4)",
    "0 2px 8px 0 rgba(112, 114, 125, 0.4)",
  ],
};

export const popover = {
  popoverPosition: {
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

export const varText = {
  textType: {
    H28: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: "32px",
    },
    H24: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    H20: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    H16: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    H14: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "18px",
    },
    H12: {
      fontSize: "12px",
      fontWeight: 600,
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

export const progressTracker = {
  tracker: {
    stepDefaultBg: colors.color.black500, // default step number bg color
    stepDefaultColor: colors.color.white, // default step number font color
    stepActiveBg: colors.color.cyan500, // active step number bg color
    stepActiveColor: colors.color.white, // active step number font color
    stepDoneBg: colors.color.green500, // done step number bg color
    stepDoneColor: colors.color.white, // done step number font color
    divider: colors.color.black200, // divider color
  },
};

export const breakpoints = {
  breakpoint: {
    xs: 240,
    sm: 320,
    md: 360,
    lg: 480,
    deskM: 900,
    deskL: 1140,
  },
};
// const devices = Object.keys(breakpoints).reduce((acc, cur) => {
//   acc[cur] = `(min-width: ${breakpoints[cur]}px)`;
//   return acc;
// }, {});
// export const deviceList = {
//   device: { ...devices }
// };
// export const containerMaxWidth = `${breakpoints.deskL}px`;
