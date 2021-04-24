import { FC } from "react";
import styled, { css } from "styled-components";
import { spacing, sizing, shadow } from "../../utils";
import { Ripple } from "..";
import { ChipsColorKeys, ChipsShapeKeys } from "../../theme/types";

export interface ChipsProps {
  [key: string]: any;
  color?: ChipsColorKeys;
  shape?: ChipsShapeKeys;
  active?: boolean;
  disabled?: boolean;
}

const StyledChips = styled.span<ChipsProps>`
  ${({ theme, color, shape, disabled, active }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      

      border: 1px solid transparent;
      border-radius: ${theme.chipsShape[shape!].radius};
      border-color: ${theme.chipsColor[color!]["border"]};

      background-color: ${theme.chipsColor[color!]["background"]};
      color: ${theme.chipsColor[color!]["text"]};
      ${active &&
      css`
        background-color: ${theme.chipsColor[color!]["backgroundActive"]};
        color: ${theme.chipsColor[color!]["textActive"]};
        border-color: ${theme.chipsColor[color!]["borderActive"]};
      `}

      padding: ${theme.chipsSize["padding"]};
      height: ${theme.chipsSize["height"]};
      font-family: inherit;
      font-size: ${theme.chipsSize["fontSize"]};
      line-height: ${theme.chipsSize["lineHeight"]};
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
        background-color: ${theme.chipsColor[color!]["disabled"]};
        border-color: ${theme.chipsColor[color!]["disabledBorder"]};
        color: ${theme.chipsColor[color!]["disabledText"]};
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
  color: "primary",
  shape: "rectangle",
};

export default Chips;
