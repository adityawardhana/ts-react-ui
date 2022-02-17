import { FC } from "react";
import styled, { css } from "styled-components";
import { spacing, sizing, shadow, position, border } from "../../utils";
import {
  BadgeColorKeys,
  BadgeShapeKeys,
  BadgeVariantKeys,
} from "../../theme/types";

export interface BadgeProps {
  [key: string]: any;
  color?: BadgeColorKeys;
  variant?: BadgeVariantKeys;
  shape?: BadgeShapeKeys;
  topRight?: boolean;
  bottomRight?: boolean;
  dot?: boolean;
  link?: boolean;
}

const badgePosition = (props: any) => {
  if (props.topRight) {
    return css`
      & {
        position: absolute;
        top: -6px;
        right: -6px;
        z-index: 1;
        ${props.dot &&
        css`
          padding: 0;
          min-width: 8px;
          min-height: 8px;
          top: -2px;
          right: -2px;
        `}
        ${position};
      }
    `;
  }
  if (props.bottomRight) {
    return css`
      & {
        position: absolute;
        bottom: -6px;
        right: -6px;
        z-index: 1;
        ${props.dot &&
        css`
          padding: 0;
          min-width: 8px;
          min-height: 8px;
          bottom: -2px;
          right: -2px;
        `}
        ${position};
      }
    `;
  }
};

const StyledBadge = css<BadgeProps>`
  ${({ theme, color, variant, shape }) =>
    css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: ${theme.badge.shape[shape!].radius};
      background-color: ${theme.badge.color[color!][variant!]["background"]};
      color: ${theme.badge.color[color!][variant!]["text"]};
      padding: ${theme.badge.size.padding};
      min-height: ${theme.badge.size.minHeight};
      min-width: ${theme.badge.size.minHeight};
      font-family: inherit;
      font-size: ${theme.badge.size.fontSize};
      font-weight: 500;
      text-align: center;
      vertical-align: baseline;
      white-space: nowrap;
      transition: transform 0.1s ease 0s, background 0.3s ease !important;
      ${badgePosition};
      ${spacing};
      ${sizing};
      ${shadow};
      ${border};
    `}
`;

const BadgeDefaultStyle = styled.span<BadgeProps>`
  ${StyledBadge};
`;

const BadgeLinkStyle = styled.a<BadgeProps>`
  text-decoration: none;
  ${StyledBadge};
`;

export const Badge: FC<BadgeProps> = ({ children, ...props }) => {
  const Tag = props.link ? BadgeLinkStyle : BadgeDefaultStyle;

  return <Tag {...props}>{children}</Tag>;
};

Badge.defaultProps = {
  color: "primary",
  variant: "solid",
  shape: "rectangle",
};

export default Badge;
