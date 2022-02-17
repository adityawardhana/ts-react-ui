import { FC } from "react";
import * as Octicon from "@primer/octicons-react";
import styled from "styled-components";
import { position, sizing, spacing } from "../../utils";
import { ColorKeys, IconSizeKeys } from "../../theme/types";

export interface IconProps {
  [key: string]: any;
  icon: keyof typeof Octicon;
  size?: IconSizeKeys;
  color?: ColorKeys;
}

const StyledIcon = styled.i<Pick<IconProps, "size" | "color">>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.icon.size[props.size!]};
  height: ${(props) => props.theme.icon.size[props.size!]};
  pointer-events: none;

  &[type="button"] & {
    cursor: pointer;
  }

  svg {
    width: ${(props) => props.theme.icon.size[props.size!]};
    height: ${(props) => props.theme.icon.size[props.size!]};
    fill: ${(props) => props.theme.color[props.color!] || props.color};
  }

  ${spacing};
  ${sizing};
  ${position};
`;

export const Icon: FC<IconProps> = ({ icon, children, ...props }) => {
  const TagIcon = Octicon[icon];

  if (!TagIcon) {
    return null;
  }

  return (
    <StyledIcon {...props}>
      <TagIcon />
    </StyledIcon>
  );
};

Icon.defaultProps = {
  size: "medium",
  color: "secondary",
};

export default Icon;
