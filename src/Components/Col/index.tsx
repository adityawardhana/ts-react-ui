import styled, { css } from "styled-components";
import { BREAKPOINT_NAME, getMedia } from "../../utils";
import Box from "../Box";
const offsetProps = BREAKPOINT_NAME.map((d) => d + "Offset");

export interface ColProps {
  [key: string]: any;
  reverse?: boolean;
}
export const Col = styled(Box)`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${(p) => getMedia(p).gutterWidth / 2}rem;
  padding-left: ${(p) => getMedia(p).gutterWidth / 2}rem;
  ${(p) =>
    p.reverse &&
    css`
      flex-direction: column-reverse;
    `}
  ${(p) =>
    Object.keys(p)
      .filter((k) => ~BREAKPOINT_NAME.indexOf(k))
      .sort(
        (k1, k2) => BREAKPOINT_NAME.indexOf(k1) - BREAKPOINT_NAME.indexOf(k2)
      )
      .map(
        (k) =>
          getMedia(p).media[k] &&
          css`
          @media ${getMedia(p).media[k]} {
            ${
              !isNaN(p[k])
                ? css`
                    flex-basis: ${(100 / getMedia(p).gridSize) * p[k]}%;
                    max-width: ${(100 / getMedia(p).gridSize) * p[k]}%;
                    display: block;
                  `
                : // Boolean
                p[k]
                ? // Auto-width
                  css`
                    flex-grow: 1;
                    flex-basis: 0;
                    max-width: 100%;
                    display: block;
                  `
                : // Hide element
                  css`
                    display: none;
                  `
            }`
      )}
  ${(p) =>
    Object.keys(p)
      .filter((k) => ~offsetProps.indexOf(k))
      .map(
        (k) =>
          getMedia(p).media[k.replace(/Offset$/, "")] &&
          css`
            @media ${getMedia(p).media[k.replace(/Offset$/, "")]} {
              margin-left: ${(100 / getMedia(p).gridSize) * p[k]}%;
            }
          `
      )}
`;

Col.displayName = "Col";

export default Col;
