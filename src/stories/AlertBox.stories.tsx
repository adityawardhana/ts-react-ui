import { Story, Meta } from "@storybook/react";
import { AlertBox, AlertBoxProps } from "../components";

export default {
  title: "Example/AlertBox",
  component: AlertBox,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: ["success", "error", "warning", "info"],
      },
    },
  },
} as Meta;

const Template: Story<AlertBoxProps> = (args) => (
  <AlertBox {...args}>This is Alert Body</AlertBox>
);

export const Default = Template.bind({});
