import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { AlertBox, AlertBoxProps, Button } from "../components";

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

export const OpenAlert = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AlertBox
        isOpen={open}
        color="success"
        onClose={() => setOpen(false)}
      >
        Now you can use AlertBox.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tempore molestiae dicta laboriosam laudantium sed facilis consectetur provident excepturi voluptates expedita voluptatum quis placeat, magni itaque rerum nostrum omnis alias.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae doloribus! Veritatis id dolor deserunt maxime necessitatibus praesentium laudantium veniam itaque asperiores, voluptatum ab odio, libero sint saepe. Voluptate, totam!
      </AlertBox>
      <Button mt={16} onClick={() => setOpen(true)}>Open Alert</Button>
    </>
  );
};
