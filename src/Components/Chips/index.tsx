import { FC } from "react";
import styled, { css } from "styled-components";
import { spacing, sizing, shadow } from "../../utils";
import { Ripple } from "..";
import {
  ChipsActiveColorKeys,
  ChipsShapeKeys,
  ChipsVariantKeys,
} from "../../theme/types";

export interface ChipsProps {
  [key: string]: any;
  active?: boolean;
  variant?: ChipsVariantKeys;
  activeColor?: ChipsActiveColorKeys;
  shape?: ChipsShapeKeys;
  disabled?: boolean;
}

const StyledChips = styled.span<ChipsProps>`
  ${({ theme, variant, activeColor, shape, disabled, active }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      border: 1px solid transparent;
      border-radius: ${theme.chips.shape[shape!].radius};
      border-color: ${theme.chips.variant[variant!]["border"]};

      background-color: ${theme.chips.variant[variant!]["background"]};
      color: ${theme.chips.variant[variant!]["text"]};
      ${active &&
      css`
        border-color: ${theme.chips.activeColor[activeColor!][variant!][
          "border"
        ]};
        background-color: ${theme.chips.activeColor[activeColor!][variant!][
          "background"
        ]};
        color: ${theme.chips.activeColor[activeColor!][variant!]["text"]};
      `}

      padding: ${theme.chips.size["padding"]};
      height: ${theme.chips.size["height"]};
      font-family: inherit;
      font-size: ${theme.chips.size["fontSize"]};
      line-height: ${theme.chips.size["lineHeight"]};
      font-weight: 500;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;

      cursor: pointer;
      box-sizing: border-box;
      transition: background-color 0.5s ease !important;

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
        &::before {
          background: rgba(50, 50, 50, 0.05);
          transition: background 0.5s ease;
        }
      }

      ${disabled &&
      css`
        background-color: ${theme.chips.activeColor[activeColor!][variant!][
          "disabled"
        ]};
        border-color: ${theme.chips.activeColor[activeColor!][variant!][
          "disabledBorder"
        ]};
        color: ${theme.chips.activeColor[activeColor!][variant!][
          "disabledText"
        ]};
        cursor: default;
      `}

      ${spacing};
      ${sizing};
      ${shadow};
    `}
`;

export const Chips: FC<ChipsProps> = ({ children, ...props }) => {
  return (
    <StyledChips {...props}>
      {!props.disabled && <Ripple />}
      {children}
    </StyledChips>
  );
};

Chips.defaultProps = {
  variant: "outline",
  activeColor: "primary",
  shape: "rectangle",
};

export default Chips;
