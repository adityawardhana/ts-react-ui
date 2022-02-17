import styled, { css } from "styled-components";
import { Box } from "..";
import { BREAKPOINT_NAME, getMedia } from "../../utils";

export interface ContainerProps {
  [ket: string]: any;
  fluid?: boolean;
}
export const Container = styled(Box)<ContainerProps>`
  ${(props) => css`
    margin-right: auto;
    margin-left: auto;
    padding-right: ${props.theme.grid.outerMargin + "rem"};
    padding-left: ${props.theme.grid.outerMargin + "rem"};
    ${!props.fluid &&
    css`
      ${BREAKPOINT_NAME.map(
        (bp) =>
          props.theme.grid.container[bp] &&
          getMedia(props).media[bp] &&
          css`
            @media ${getMedia(props).media[bp]} {
              width: ${props.theme.grid.container[bp]}rem;
            }
          `
      )}
    `}
  `}
`;

Container.displayName = "Container";

export default Container;
