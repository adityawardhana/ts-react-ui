import { useState, useEffect, FC } from "react";
import styled, { css, keyframes } from "styled-components";
import { shadow, sizing, spacing } from "../../utils";
import { Ripple, Text, Box } from "../index";

type AlertStatusProps = {
  success?: any;
  warning?: any;
  error?: any;
  info?: any;
};
type AlertHeaderProps = {
  status?: keyof AlertStatusProps;
};
type AlertBodyProps = {
  status?: keyof AlertStatusProps;
};
type AnimateProps = "fade" | "slide";

const AlertStatus: AlertStatusProps = {
  info: css`
    background-color: ${({ theme }) => theme.color.black100};
    color: ${({ theme }) => theme.color.info};
  `,
  success: css`
    background-color: ${({ theme }) => theme.color.green100};
    color: ${({ theme }) => theme.color.success};
  `,
  warning: css`
    background-color: ${({ theme }) => theme.color.yellow100};
    color: ${({ theme }) => theme.color.warning};
  `,
  error: css`
    background-color: ${({ theme }) => theme.color.red100};
    color: ${({ theme }) => theme.color.error};
  `,
};

const AlertHeader = styled(Text)`
  ${(props: AlertHeaderProps) => props.status && AlertStatus[props.status]};
`;
const AlertBody = styled(Text)`
  ${(props: AlertBodyProps) => props.status && AlertStatus[props.status]};
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      display: none;
    }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50%);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
const slideOut = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translate(0, 30%);
  }
`;
/**
 * Handle alert animation when alert is open or close
 * @param isOpen
 * @param animate
 * @returns
 */
const handleAnimate = (isOpen: boolean, animate: AnimateProps) => {
  switch (animate) {
    case "slide":
      return isOpen ? slideIn : slideOut;
    case "fade":
      return isOpen ? fadeIn : fadeOut;
    default:
      return isOpen ? fadeIn : fadeOut;
  }
};

export interface AlertBoxProps {
  [key: string]: any;
  animate?: AnimateProps;
  status?: keyof AlertStatusProps;
  isOpen: boolean;
  title?: string;
  duration?: number;
  timeout?: number;
  clamp?: number;
  onTimeout?: () => void;
  toggle?: () => void;
}

const StyledAlertBox = styled(Box)`
  ${({ isOpen, animate, duration, status, theme }: AlertBoxProps) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 160px;
    z-index: ${theme.zindex.fixed};
    padding: 12px 16px;
    padding-right: 32px;
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.color.black30}Î;

    ${animate &&
    css`
      animation: ${handleAnimate(isOpen, animate)} ${duration}ms ease-in-out;
    `}

    ${status && AlertStatus[status!]};
    ${!isOpen && "pointer-events: none;"}
    > i + ${AlertBody} {
      margin-left: 8px;
    }

    > i + ${AlertHeader} {
      margin-left: 8px;
    }

    .close {
      pointer: cursor;
      color: ${theme.color[status!]};
      position: absolute;
      right: 0;
      top: 0;
      font-size: 16px;
      line-height: 16px;
      padding: 12px 16px;
      cursor: pointer;
      border-radius: 50%;
    }
  `}

  ${spacing};
  ${sizing};
  ${shadow};
`;

export const AlertBox: FC<AlertBoxProps> = (props) => {
  const {
    children,
    title,
    status,
    toggle,
    isOpen,
    duration,
    animate,
    timeout,
    clamp,
    onTimeout,
    ...innerProps
  } = props;
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    let timer: any;
    if (!isOpen) {
      timer = setTimeout(
        () => {
          setIsHide(true);
        },
        animate ? 0 : duration
      );
    } else {
      setIsHide(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen, animate, duration]);

  useEffect(() => {
    let timer: any;
    if (typeof timeout !== "undefined" && typeof onTimeout !== "undefined") {
      timer = setTimeout(() => {
        onTimeout();
      }, timeout);
    }
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  if (isHide) return null;
  return (
    <StyledAlertBox
      {...innerProps}
      status={status}
      isOpen={isOpen}
      duration={duration}
      animate={animate}
    >
      {title && (
        <AlertHeader
          type="H16"
          status={status}
          mb={8}
          clamp={1}
          textAlign="left"
        >
          {title}
        </AlertHeader>
      )}
      <AlertBody type="B12" status={status} clamp={clamp} textAlign="left">
        {children}
      </AlertBody>

      {toggle && (
        <button onClick={toggle} aria-label="Close" className="close">
          <Ripple />
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </StyledAlertBox>
  );
};

AlertBox.defaultProps = {
  status: "success",
  isOpen: true,
  animate: "fade",
  duration: 300,
  clamp: 3,
};

export default AlertBox;
