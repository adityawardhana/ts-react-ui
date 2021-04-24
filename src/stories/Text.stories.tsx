import { Fragment } from "react";
import { Box, Text, TextTypes } from "../components";

export default {
  title: "Example/Text",
  component: Text,
  parameters: {},
};

export const Default = () => {
  return Object.keys(TextTypes).map((key, index) => {
    return (
      <Fragment key={index}>
        <Box m={16}>
          <Text type={key}>
            Type {key} - The quick brown fox jumps over the lazy dog
          </Text>
        </Box>
      </Fragment>
    );
  });
};

export const CustomHTMLTag = () => {
  return (
    <Fragment>
      <Box m={16}>
        <Text as="h1" type="H28">
          Type H28 with h1 Heading - The quick brown fox jumps over the lazy dog
        </Text>
      </Box>
      <Box m={16}>
        <Text as="h2" type="H24">
          Type H24 with h2 Heading - The quick brown fox jumps over the lazy dog
        </Text>
      </Box>
      <Box m={16}>
        <Text as="h3" type="H20">
          Type H20 with h3 Heading - The quick brown fox jumps over the lazy dog
        </Text>
      </Box>
      <Box m={16}>
        <Text as="span" type="B16">
          Type B16 with span - The quick brown fox jumps over the lazy dog
        </Text>
      </Box>
    </Fragment>
  );
};

export const Color = () => {
  return ["primary", "secondary", "error", "success", "warning", "info", "white"].map(
    (key, index) => {
      return (
        <Fragment key={index}>
          <Box m={16} bg={key === "white" && "primary"}>
            <Text as="span" type="B16" color={key}>
              Type B16 with {key} color - The quick brown fox jumps over the lazy dog
            </Text>
          </Box>
        </Fragment>
      );
    }
  );
};

export const Attributes = () => {
  return [
    { transform: "uppercase" },
    "nowrap",
    "italic",
    "bold",
    "nodecor",
    { decoration: "line-through" },
  ].map((key, index) => {
    const props = typeof key === "object" ? { ...key } : { [key]: true };
    return (
      <Fragment key={index}>
        <Box m={16}>
          <Text as="span" type="B16" {...props}>
            Type B16 with span - The quick brown fox jumps over the lazy dog
          </Text>
        </Box>
      </Fragment>
    );
  });
};
