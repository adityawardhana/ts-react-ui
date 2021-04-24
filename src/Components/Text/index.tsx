import { FC } from "react";
import styled, { css } from "styled-components";
import { TextTypes, TextTypesKeys } from "./TextTypes";
import { clamp, color, spacing, typography } from "../../utils";

export interface TextProps {
  [key: string]: any;
  transform?: string;
  nowrap?: boolean;
  italic?: boolean;
  bold?: boolean;
  nodecor?: boolean;
  decoration?: string;
  type?: TextTypesKeys;
}

const StyledText = styled.p<TextProps>`
  ${({ transform, nowrap, italic, bold, nodecor, decoration, type }) => css`
    ${TextTypes[type!]}
    ${spacing};
    ${typography};
    ${color};
    ${clamp};
    text-transform: ${transform};
    white-space: ${nowrap ? "nowrap" : "normal"};
    font-style: ${italic && "italic"};
    text-decoration: ${nodecor ? "none" : decoration};
    font-weight: ${bold && "bold"};
  `}
`;

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.defaultProps = {
  type: "B12",
  color: "black900",
};

export { TextTypes };

export default Text;
