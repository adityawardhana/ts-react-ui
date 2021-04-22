import { FC } from "react";
import styled, { css } from "styled-components";
import { spacing, sizing } from "../../Utils";
import { Spinner } from "../";

export interface ButtonProps {
  [key: string]: any;
  spinner?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button`
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  display: inline-flex;
  border: 1px solid transparent;
  border-radius: ${(props: any) => props.theme.border.radius};
  height: ${(props: any) => props.theme.buttonSize[props.size]["height"]};
  padding: ${(props: any) => props.theme.buttonSize[props.size]["padding"]};
  box-sizing: border-box;
  background-color: ${(props: any) =>
    props.theme.buttonVariant[props.variant]["background"]};
  color: ${(props: any) => props.theme.buttonVariant[props.variant]["text"]};
  border-color: ${(props: any) =>
    props.theme.buttonVariant[props.variant]["border"]};

  font-family: inherit;
  font-size: ${(props: any) => props.theme.buttonSize[props.size]["fontSize"]};
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${(props: any) =>
      props.theme.buttonVariant[props.variant]["hover"]};
    color: ${(props: any) =>
      props.theme.buttonVariant[props.variant]["hoverText"]};
  }

  &:focus {
    outline: none;
    background-color: ${(props: any) =>
      props.theme.buttonVariant[props.variant]["focus"]};
  }

  &:disabled {
    background-color: ${(props: any) =>
      props.theme.buttonVariant[props.variant]["disabled"]};
    color: ${(props: any) =>
      props.theme.buttonVariant[props.variant]["disabledText"]};
    cursor: default;
  }

  &:link,
  &:visited,
  &:focus {
    text-decoration: none;
  }

  &[type="button"],
  &[type="reset"],
  &[type="submit"] {
    -webkit-appearance: none;
  }

  ${spacing};
  ${sizing};

  ${(props: any) =>
    props.spinner &&
    css`
      text-indent: -9999px;
      color: transparent !important;
    `}
`;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const spinnerColor = props.variant === "primary" ? "white" : "primary";

  return (
    <StyledButton {...props}>
      {props.spinner && (
        <Spinner color={spinnerColor} position="absolute" p={8} />
      )}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

export default Button;
