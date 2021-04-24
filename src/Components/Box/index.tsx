import { FC } from "react";
import styled from "styled-components";
import {
  color,
  sizing,
  spacing,
  border,
  position,
  flexbox,
  display,
  shadow,
} from "../../utils";

const StyledBox = styled.div`
  ${position};
  ${display};
  ${flexbox};
  ${sizing};
  ${spacing};
  ${color};
  ${border};
  ${shadow};
`;

export const Box: FC<any> = (props) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

export default Box;
