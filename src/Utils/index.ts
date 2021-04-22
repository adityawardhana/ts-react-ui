import theme from "../Theme";

const themeColor = Object.keys(theme.color);

const colorProbe = (propValue: any) => {
  return themeColor.indexOf(propValue) !== -1
    ? theme.color[propValue]
    : propValue;
};
const borderProbe = (propValue: any) => {
  if (propValue) {
    let itsColor = [];
    if (propValue === "none") return propValue;
    itsColor = propValue.split(" ");
    return itsColor[2]
      ? itsColor[0] + " " + itsColor[1] + " " + colorProbe(itsColor[2])
      : itsColor[0] + " " + itsColor[1];
  }
};

export const typography = (props: any) => ({
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  textAlign: props.textAlign,
  fontStyle: props.fontStyle
});

export const sizing = (props: any) => ({
  width: props.width,
  height: props.height,
  maxWidth: props.maxWidth,
  minWidth: props.minWidth,
  maxHeight: props.maxHeight,
  minHeight: props.minHeight,
});

export const spacing = (props: any) => ({
  padding: props.p,
  paddingTop: props.pt || props.py,
  paddingRight: props.pr || props.px,
  paddingBottom: props.pb || props.py,
  paddingLeft: props.pl || props.px,
  margin: props.m,
  marginTop: props.mt || props.my,
  marginRight: props.mr || props.mx,
  marginBottom: props.mb || props.mby,
  marginLeft: props.ml || props.mx
});

export const color = (props: any) => ({
  color:
    Object.keys(props.theme.color).indexOf(props.color) !== -1
      ? props.theme.color[props.color]
      : props.color,
  backgroundColor:
    Object.keys(props.theme.color).indexOf(props.bg) !== -1
      ? props.theme.color[props.bg]
      : props.bg
});

export const position = (props: any) => ({
  position: props.position,
  zIndex: props.zIndex,
  top: props.top,
  right: props.right,
  bottom: props.bottom,
  left: props.left,
  transform: props.transform
});

export const border = (props: any) => ({
  border: borderProbe(props.border),
  borderWidth: props.borderWidth,
  borderStyle: props.borderStyle,
  borderColor: colorProbe(props.borderColor),
  borderRadius: props.borderRadius,
  borderTop: borderProbe(props.borderTop),
  borderTopWidth: props.borderTopWidth,
  borderTopStyle: props.borderTopStyle,
  borderTopColor: colorProbe(props.borderTopColor),
  borderTopLeftRadius: props.borderTopLeftRadius,
  borderTopRightRadius: props.borderTopRightRadius,
  borderRight: borderProbe(props.borderRight),
  borderRightWidth: props.borderRightWidth,
  borderRightStyle: props.borderRightStyle,
  borderRightColor: colorProbe(props.borderRightColor),
  borderBottom: borderProbe(props.borderBottom),
  borderBottomWidth: props.borderBottomWidth,
  borderBottomStyle: props.borderBottomStyle,
  borderBottomColor: colorProbe(props.borderBottomColor),
  borderBottomLeftRadius: props.borderBottomLeftRadius,
  borderBottomRightRadius: props.borderBottomRightRadius,
  borderLeft: borderProbe(props.borderLeft),
  borderLeftWidth: props.borderLeftWidth,
  borderLeftStyle: props.borderLeftStyle,
  borderLeftColor: colorProbe(props.borderLeftColor),
  borderX: props.borderX,
  borderY: props.borderY
});

export const display = (props: any) => ({
  display: props.display,
  boxShadow: props.boxShadow && (props.boxShadow.length > 0 ? props.boxShadow : theme.shadow.default),
  visibility: props.visibility
});

export const flexbox = (props: any) => ({
  display:
    (props.alignItems && props.alignItems.length > 0) ||
    (props.alignContent && props.alignContent.length > 0) ||
    (props.justifyItems && props.justifyItems.length > 0) ||
    (props.justifyContent && props.justifyContent.length > 0) ||
    (props.flexWrap && props.flexWrap.length > 0) ||
    (props.flexDirection && props.flexDirection.length > 0)
      ? "flex"
      : "",
  alignItems: props.alignItems,
  alignContent: props.alignContent,
  justifyItems: props.justifyItems,
  justifyContent: props.justifyContent,
  flexWrap: props.flexWrap,
  flexDirection: props.flexDirection,
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis: props.flexBasis,
  justifySelf: props.justifySelf,
  alignSelf: props.alignSelf,
  order: props.order
});
