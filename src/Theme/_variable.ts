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

export const colorPallete = {
  color: {
    cyan50: "#e4f8fa",
    cyan100: "#bbedf2",
    cyan200: "#8ee1e9",
    cyan300: "#61d4e0",
    cyan400: "#3fcbd9",
    cyan500: "#1dc2d2",
    cyan600: "#1abccd",
    cyan700: "#15b4c7",
    cyan800: "#11acc1",
    cyan900: "#0a9fb6",

    green50: "#e6f6eb",
    green100: "#c1e7cd",
    green200: "#98d8ab",
    green300: "#6fc889",
    green400: "#50bc70",
    green500: "#31b057",
    green600: "#2ca94f",
    green700: "#25a046",
    green800: "#1f973c",
    green900: "#13872c",

    yellow50: "#fff6e4",
    yellow100: "#fee7bc",
    yellow200: "#fdd890",
    yellow300: "#fcc863",
    yellow400: "#fcbc41",
    yellow500: "#fbb020",
    yellow600: "#faa91c",
    yellow700: "#faa018",
    yellow800: "#f99713",
    yellow900: "#f8870b",

    red50: "#fae6e4",
    red100: "#f2c0bb",
    red200: "#e9968e",
    red300: "#e06c61",
    red400: "#d94d3f",
    red500: "#d22d1d",
    red600: "#cd281a",
    red700: "#c72215",
    red800: "#c11c11",
    red900: "#b6110a",

    black50: "#f4f4f5",
    black100: "#e3e4e5",
    black200: "#d0d2d4",
    black300: "#bdbfc2",
    black400: "#aeb2b5",
    black500: "#a0a4a8",
    black600: "#8e9297",
    black700: "#73787d",
    black800: "#52575C",
    black900: "#25252B",

    // White
    white: "#FFFFFF",
  },
};

export const colorMain = {
  color: {
    primary: colorPallete.color.cyan500,
    secondary: colorPallete.color.white,
    tertiary: "transparent",
    success: colorPallete.color.green500,
    error: colorPallete.color.red500,
    warning: colorPallete.color.yellow500,
  },
};

export const colorAll = {
  color: {
    ...colorMain.color,
    ...colorPallete.color,
  },
};

export const button = {
  buttonVariant: {
    // background: background color
    // text: text color,
    // border: border color,
    // hover: background color when being hovered,
    // hoverText: text color when being hovered,
    // focus: background color when being focused,
    // disabled: background color when being disabled,
    // disabledText: text color when being disabled,
    primary: {
      background: colorPallete.color.cyan500,
      text: colorPallete.color.white,
      border: "transparent",
      hover: colorPallete.color.cyan300,
      focus: colorPallete.color.cyan600,
      disabled: colorPallete.color.black200,
    },
    secondary: {
      background: colorPallete.color.white,
      text: colorPallete.color.black900,
      border: colorPallete.color.black200,
      hoverText: colorPallete.color.black800,
      focus: colorPallete.color.black50,
      disabledText: colorPallete.color.black200,
    },
    tertiary: {
      background: "transparent",
      text: colorPallete.color.cyan500,
      border: "transparent",
      hoverText: colorPallete.color.cyan300,
      focus: colorPallete.color.black50,
      disabledText: colorPallete.color.black200,
    },
  },
  buttonSize: {
    small: {
      height: "28px",
      padding: "8px",
      fontSize: "10px",
      marginIcon: "4px",
    },
    medium: {
      height: "40px",
      padding: "12px 16px",
      fontSize: "14px",
      marginIcon: "8px",
    },
    large: {
      height: "48px",
      padding: "16px 28px",
      fontSize: "16px",
      marginIcon: "16px",
    },
    text: {
      height: "16px",
      padding: "4px",
      fontSize: "14px",
      marginIcon: "4px",
    },
  },
};

export const border = {
  border: {
    radius: "8px",
    color: colorPallete.color.black200,
    borderWidth: "1px",
    base: "1px solid" + colorPallete.color.black200,
    primary: "1px solid" + colorMain.color.primary,
  },
};

export const icon = {
  iconSize: {
    small: "16px",
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
      color: colorPallete.color.black900,
    },
    static: {
      position: "absolute",
      zindex: "1",
      marginBottom: "0px",
      fontSize: "10px",
      fontWeight: "500",
      lineHeight: "12px",
      color: colorPallete.color.black500,
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
      background: colorPallete.color.white,
      border: colorPallete.color.cyan500,
    },
    success: {
      background: "#EBFFD0",
      border: colorPallete.color.green500,
      helptext: colorPallete.color.green500,
    },
    error: {
      background: "#FFF3F4",
      border: colorPallete.color.red500,
      helptext: colorPallete.color.red500,
    },
    autofill: {
      background: "#FFFEC5",
      border: colorPallete.color.cyan500,
    },
    disabled: {
      background: colorPallete.color.black100,
      border: colorPallete.color.black200,
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
      backgroundColor: colorPallete.color.white,
      color: colorPallete.color.black500,
    },
    dark: {
      backgroundColor: colorPallete.color.black700,
      color: colorPallete.color.white,
    },
  },
  tooltipArrow: {
    lightleft: {
      borderColor:
        "transparent transparent transparent " + colorPallete.color.white,
    },
    lightright: {
      borderColor:
        "transparent " + colorPallete.color.white + " transparent transparent",
    },
    lighttop: {
      borderColor:
        colorPallete.color.white + " transparent transparent transparent",
    },
    lightbottom: {
      borderColor:
        "transparent transparent " + colorPallete.color.white + " transparent",
    },
    darkleft: {
      borderColor:
        "transparent transparent transparent " + colorPallete.color.black700,
    },
    darkright: {
      borderColor:
        "transparent " +
        colorPallete.color.black700 +
        " transparent transparent",
    },
    darktop: {
      borderColor:
        colorPallete.color.black700 + " transparent transparent transparent",
    },
    darkbottom: {
      borderColor:
        "transparent transparent " +
        colorPallete.color.black700 +
        " transparent",
    },
  },
};

export const shadow = {
  shadow: {
    default: "0 1px 4px 0 rgba(112, 114, 125, 0.2)",
    action: "0 1px 4px 0 rgba(112, 114, 125, 0.4)",
    hover: "0 2px 8px 0 rgba(112, 114, 125, 0.4)",
    disabled: "0 1px 3px 0 rgba(112, 114, 125, 0.2)",
  },
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
    H42: {
      fontSize: "42px",
      fontWeight: 500,
      lineHeight: "44px",
    },
    H28: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "30px",
    },
    H24: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "26px",
    },
    H20: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "22px",
    },
    H16: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "18px",
    },
    H14: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    H12: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "14px",
    },
    H10: {
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "12px",
    },
    B14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    B12: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "14px",
    },
    B10: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
    },
    B10B: {
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "12px",
    },
    P14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
    P12: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
    },
  },
};

export const progressTracker = {
  tracker: {
    stepDefaultBg: colorAll.color.black500, // default step number bg color
    stepDefaultColor: colorAll.color.white, // default step number font color
    stepActiveBg: colorAll.color.cyan500, // active step number bg color
    stepActiveColor: colorAll.color.white, // active step number font color
    stepDoneBg: colorAll.color.green500, // done step number bg color
    stepDoneColor: colorAll.color.white, // done step number font color
    divider: colorAll.color.black200, // divider color
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
