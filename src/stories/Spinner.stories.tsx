import { Story, Meta } from "@storybook/react";
import { Spinner, SpinnerProps } from "../components";

export default {
  title: "Example/Spinner",
  component: Spinner,
  argTypes: {},
} as Meta;

const Template: Story<SpinnerProps> = (args) => (
  <div style={{ width: 100, background: "#f2f2f2" }}>
    <Spinner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: "primary",
};
