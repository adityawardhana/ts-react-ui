import styled, { css } from "styled-components";
import { BreakpointKeys } from "../../theme/types";
import { getMedia } from "../../utils";
import Box from "../Box";

export interface RowProps {
  [key: string]: any;
  reverse?: boolean;
  start?: BreakpointKeys;
  center?: BreakpointKeys;
  end?: BreakpointKeys;
  top?: BreakpointKeys;
  middle?: BreakpointKeys;
  bottom?: BreakpointKeys;
  around?: BreakpointKeys;
  between?: BreakpointKeys;
  first?: BreakpointKeys;
  last?: BreakpointKeys;
  
}
export const Row = styled(Box)<RowProps>`
  ${(props) => css`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: ${(getMedia(props).gutterWidth / 2) * -1}rem;
    margin-left: ${(getMedia(props).gutterWidth / 2) * -1}rem;
    ${props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
    ${props.start &&
    getMedia(props).media[props.start] &&
    css`
      @media ${getMedia(props).media[props.start]} {
        justify-content: flex-start;
      }
    `}
    ${props.center &&
    getMedia(props).media[props.center] &&
    css`
      @media ${getMedia(props).media[props.center]} {
        justify-content: center;
      }
    `}
    ${props.end &&
    getMedia(props).media[props.end] &&
    css`
      @media ${getMedia(props).media[props.end]} {
        justify-content: flex-end;
      }
    `}
    ${props.top &&
    getMedia(props).media[props.top] &&
    css`
      @media ${getMedia(props).media[props.top]} {
        align-items: flex-start;
      }
    `}
    ${props.middle &&
    getMedia(props).media[props.middle] &&
    css`
      @media ${getMedia(props).media[props.middle]} {
        align-items: center;
      }
    `}
    ${props.bottom &&
    getMedia(props).media[props.bottom] &&
    css`
      @media ${getMedia(props).media[props.bottom]} {
        align-items: flex-end;
      }
    `}
    ${props.around &&
    getMedia(props).media[props.around] &&
    css`
      @media ${getMedia(props).media[props.around]} {
        justify-content: space-around;
      }
    `}
    ${props.between &&
    getMedia(props).media[props.between] &&
    css`
      @media ${getMedia(props).media[props.between]} {
        justify-content: space-between;
      }
    `}
    ${props.first &&
    getMedia(props).media[props.first] &&
    css`
      @media ${getMedia(props).media[props.first]} {
        order: -1;
      }
    `}
    ${props.last &&
    getMedia(props).media[props.last] &&
    css`
      @media ${getMedia(props).media[props.last]} {
        order: 1;
      }
    `}
  `}
`;

Row.displayName = "Row";

export default Row;
