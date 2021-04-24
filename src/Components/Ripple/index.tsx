import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export interface RippleProps {
  duration?: number;
  color?: string;
}
const RippleStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Ripple: FC<RippleProps> = (props) => {
  const [rippleStyle, setRippleStyle] = useState<any>({
    position: "absolute",
    borderRadius: "50%",
    opacity: 0,
    width: 35,
    height: 35,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    backgroundColor: props.color,
  });
  const [size, setSize] = useState(0);

  useEffect(() => {
    let timer: any;
    if (rippleStyle.opacity === 1) {
      timer = setTimeout(() => {
        setRippleStyle({
          ...rippleStyle,
          opacity: 0,
          transform: `scale(${size})`,
          transition: `all ${props.duration}ms`,
        });
      });
    }
    return () => clearTimeout(timer);
  }, [rippleStyle, size, props.duration]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    const { pageX, pageY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const left = pageX - rect.left - window.scrollX;
    const top = pageY - rect.top - window.scrollY;
    const scaleSize = Math.max(rect.width, rect.height) / 15;
    setRippleStyle({
      ...rippleStyle,
      top,
      left,
      opacity: 1,
      transform: "translate(-50%, -50%)",
      transition: "initial",
    });
    setSize(scaleSize);
  };

  return (
    <RippleStyle onMouseDown={handleClick}>
      <s style={rippleStyle} />
    </RippleStyle>
  );
};
Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};
Ripple.defaultProps = {
  duration: 1000,
  color: "rgba(255, 255, 255, .4)",
};

export default Ripple;
