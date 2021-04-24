import { Story, Meta } from "@storybook/react";
import { Icon, IconProps } from "../components";

export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "HomeIcon",
};
