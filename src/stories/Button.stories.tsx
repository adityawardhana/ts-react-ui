import { Fragment } from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../Components";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.variant}</Button>
);

export const Default = Template.bind({});

export const Disabled = () => {
  const btnVariants = ["primary", "secondary", "tertiary"];
  return btnVariants.map((item: any, idx) => {
    return (
      <Fragment key={idx}>
        <Button variant={item} size="medium" disabled>
          Button Text
        </Button>
      </Fragment>
    );
  });
};
