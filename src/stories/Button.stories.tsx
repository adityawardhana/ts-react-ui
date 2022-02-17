import { Story, Meta } from "@storybook/react";
import { ButtonProps, Button, Icon, Box } from "../components";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const filteredArgs = Object.keys(args)
    .filter((key) => args[key] !== "undefined")
    .reduce((obj: any, key) => {
      obj[key] = args[key];
      return obj;
    }, {});
  return <Button {...filteredArgs}>{args.variant}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  variant: "solid",
  size: "medium",
  shape: "rectangle",
};

export const ButtonWithIcon = () => {
  return (
    <>
      <Box mb={8}>
        <Button color="primary">
          <Icon icon="ChevronLeftIcon" color="white" mr={2} />
          Button With Icon
        </Button>
        <Button color="primary" shape="pill">
          Button Without Icon
        </Button>
        <Button color="primary" shape="square">
          <Icon icon="HomeIcon" color="white" />
        </Button>
        <Button color="primary" shape="circle">
          <Icon icon="HomeIcon" color="white" />
        </Button>
      </Box>
      <Box mb={8}>
        <Button color="secondary">
          Button With Icon
          <Icon icon="ChevronRightIcon" color="white" ml={2} />
        </Button>
        <Button color="secondary" shape="pill">
          Button Without Icon
        </Button>
        <Button color="secondary" shape="square">
          <Icon icon="HomeIcon" color="white" />
        </Button>
        <Button color="secondary" shape="circle">
          <Icon icon="HomeIcon" color="white" />
        </Button>
      </Box>
      <Box mb={8}>
        <Button color="primary" variant="flat">
          <Icon icon="ChevronLeftIcon" color="primary" mr={2} />
          Button With Icon
        </Button>
        <Button color="primary" variant="flat" shape="pill">
          Button Without Icon
        </Button>
        <Button color="primary" variant="flat" shape="square">
          <Icon icon="HomeIcon" color="primary" />
        </Button>
        <Button color="primary" variant="flat" shape="circle">
          <Icon icon="HomeIcon" color="primary" />
        </Button>
      </Box>
      <Box mb={8}>
        <Button color="secondary" variant="flat">
          Button With Icon
          <Icon icon="ChevronRightIcon" color="secondary" ml={2} />
        </Button>
        <Button color="secondary" variant="flat" shape="pill">
          Button Without Icon
        </Button>
        <Button color="secondary" variant="flat" shape="square">
          <Icon icon="HomeIcon" color="secondary" />
        </Button>
        <Button color="secondary" variant="flat" shape="circle">
          <Icon icon="HomeIcon" color="secondary" />
        </Button>
      </Box>
    </>
  );
};
