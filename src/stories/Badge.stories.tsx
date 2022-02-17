import { Story, Meta } from "@storybook/react";
import { Fragment } from "react";
import { BadgeProps, Badge, Box, Icon, Button, Chips } from "../components";
import { badge } from "../theme/default";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: Object.keys(badge.color),
      },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => {
  const filteredArgs = Object.keys(args)
    .filter((key) => args[key] !== "undefined")
    .reduce((obj: any, key) => {
      obj[key] = args[key];
      return obj;
    }, {});
  return <Badge {...filteredArgs}>{args.variant}</Badge>;
};

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  variant: "solid",
  size: "medium",
  shape: "rectangle",
};

export const BadgeColorAndVariant = () => {
  return Object.keys(badge.color).map((color: any, index) => (
    <Fragment key={index}>
      <Box mb={8}>
        <Badge mr={4} color={color}>
          Badge {color} Solid Rectangle
        </Badge>
        <Badge mr={4} color={color} shape="pill">
          Badge {color} Solid Pill
        </Badge>
        <Badge mr={4} color={color} variant="invert">
          Badge {color} Invert Rectangle
        </Badge>
        <Badge mr={4} color={color} variant="invert" shape="pill">
          Badge {color} Invert Pill
        </Badge>
      </Box>
    </Fragment>
  ));
};

export const BadgePosition = () => {
  return Object.keys(badge.color).map((color: any, index) => (
    <Box key={index}>
      <Box mb={8} position="relative" display="inline-block" mr={8}>
        <Badge color={color} shape="pill" topRight boxShadow={1}>
          4
        </Badge>
        <Button shape="circle" variant="invert">
          <Icon icon="BellIcon" color={color} />
        </Button>
      </Box>
      <Box mb={8} position="relative" display="inline-block" mr={8}>
        <Badge color={color} shape="pill" bottomRight>
          4
        </Badge>
        <Button shape="circle" variant="invert">
          <Icon icon="BellIcon" color={color} />
        </Button>
      </Box>
    </Box>
  ));
};

export const BadgeDotWithCustomPosition = () => {
  return Object.keys(badge.color).map((color: any, index) => (
    <Fragment key={index}>
      <Box mb={8} position="relative" display="inline-block" mr={8}>
        <Badge color={color} shape="pill" topRight dot top={-4} right={-2} boxShadow={2}/>
        <Icon icon="BellIcon" size="large" color={color} />
      </Box>
    </Fragment>
  ));
};

export const BadgeInsideComponent= () => {
  return Object.keys(badge.color).map((color: any, index) => (
    <Fragment key={index}>
      <Box mb={8} position="relative" display="inline-block" mr={8}>
        <Badge color={color} shape="pill" topRight dot />
        <Chips>I am chips</Chips>
      </Box>
      <Box mb={8} position="relative" display="inline-block" mr={8}>
        <Chips>
          Chips
          <Badge color={color} shape="pill" ml={4}>
            New
          </Badge>
        </Chips>
      </Box>
    </Fragment>
  ));
};
