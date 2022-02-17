import { Story, Meta } from "@storybook/react";
import { Fragment, useState } from "react";
import { ChipsProps, Icon, Chips } from "../components";
import { chips } from "../theme/default";

export default {
  title: "Example/Chips",
  component: Chips,
  argTypes: {
    activeColor: {
      control: {
        type: "radio",
        options: Object.keys(chips.activeColor),
      },
    },
  },
} as Meta;

const Template: Story<ChipsProps> = (args) => {
  const filteredArgs = Object.keys(args)
    .filter((key) => args[key] !== "undefined")
    .reduce((obj: any, key) => {
      obj[key] = args[key];
      return obj;
    }, {});
  return <Chips {...filteredArgs}>I am Chips</Chips>;
};

export const Default = Template.bind({});
Default.args = {
  variant: "outline",
  activeColor: "primary",
  shape: "rectangle",
};
export const Rectangle = () => {
  const [active, setActive] = useState("");
  return Object.keys(chips.activeColor).map((color: any, index) => (
    <Fragment key={index}>
      <Chips
        activeColor={color}
        active={active === color}
        onClick={() => setActive(color)}
        mr={4}
        mb={4}
      >
        {index % 2 === 0 && (
          <Icon
            icon={active === color ? "HeartFillIcon" : "HeartIcon"}
            color="red400"
            size="small"
            mr={2}
          />
        )}
        Chips color {color}
      </Chips>
    </Fragment>
  ));
};
export const Pill = () => {
  const [active, setActive] = useState("");
  return Object.keys(chips.activeColor).map((color: any, index) => (
    <Fragment key={index}>
      <Chips
        activeColor={color}
        active={active === color}
        onClick={() => setActive(color)}
        mr={4}
        mb={4}
        shape="pill"
      >
        {index % 2 === 0 && (
          <Icon
            icon={active === color ? "HeartFillIcon" : "HeartIcon"}
            color="red400"
            size="small"
            mr={2}
          />
        )}
        Chips color {color}
      </Chips>
    </Fragment>
  ));
};
