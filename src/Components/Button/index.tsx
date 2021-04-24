import { FC } from "react";
import styled, { css } from "styled-components";
import { spacing, sizing, shadow } from "../../utils";
import { Spinner, Ripple } from "..";
import {
  ButtonColorKeys,
  ButtonShapeKeys,
  ButtonSizeKeys,
  ButtonVariantKeys,
} from "../../theme/types";

export interface ButtonProps {
  [key: string]: any;
  color?: ButtonColorKeys;
  variant?: ButtonVariantKeys;
  size?: ButtonSizeKeys;
  shape?: ButtonShapeKeys;
  disabled?: boolean;
  fullWidth?: boolean;
  spinner?: boolean;
  link?: boolean;
}

const buttonWidth = (props: any) => ({
  width:
    props.shape === "square" || props.shape === "circle"
      ? props.theme.buttonSize[props.size!]["height"]
      : "auto",
});

const StyledButton = css<ButtonProps>`
  ${({ theme, color, variant, size, shape, spinner, fullWidth }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      border: 1px solid transparent;
      border-radius: ${size !== "text" && theme.buttonShape[shape!].radius};
      border-color: ${theme.buttonColor[color!][variant!]["border"]};

      background-color: ${theme.buttonColor[color!][variant!]["background"]};
      color: ${theme.buttonColor[color!][variant!]["text"]};
      padding: ${theme.buttonShape[shape!][`${size}Padding`]};

      height: ${theme.buttonSize[size!]["height"]};
      ${buttonWidth};

      font-family: inherit;
      font-size: ${theme.buttonSize[size!]["fontSize"]};
      font-weight: 500;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;

      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.1s ease 0s !important;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:hover {
        &::before {
          background: rgba(255, 255, 255, 0.1);
        }
      }

      &:focus {
        outline: none;
      }

      &:active {
        outline: none;
        transform: scale(0.96) !important;
        &::before {
          background: ${size !== "text" && "rgba(50, 50, 50, 0.05)"};
          transition: background 0.5s ease;
        }
      }

      &:disabled {
        background-color: ${theme.buttonColor[color!][variant!]["disabled"]};
        border-color: ${theme.buttonColor[color!][variant!]["disabledBorder"]};
        color: ${theme.buttonColor[color!][variant!]["disabledText"]};
        cursor: default;
      }

      &:link,
      &:visited,
      &:focus {
        text-decoration: none;
      }

      &[type="button"],
      &[type="reset"],
      &[type="submit"] {
        -webkit-appearance: none;
      }

      ${spacing};
      ${sizing};
      ${shadow};

      ${fullWidth &&
      css`
        width: 100%;
      `}

      ${spinner &&
      css`
        text-indent: -9999px;
        color: transparent !important;
      `}
    `}
`;

const ButtonDefaultStyle = styled.button<ButtonProps>`
  ${StyledButton};
`;

const ButtonLinkStyle = styled.a<ButtonProps>`
  text-decoration: none;
  ${StyledButton};
`;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const spinnerColor = props.variant === "solid" ? "white" : props.color;
  const Tag = props.link ? ButtonLinkStyle : ButtonDefaultStyle;

  return (
    <Tag {...props}>
      {props.spinner && (
        <Spinner color={spinnerColor} position="absolute" p={8} />
      )}
      {!props.disabled && <Ripple />}
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  color: "primary",
  variant: "solid",
  size: "medium",
  shape: "rectangle",
};

export default Button;
