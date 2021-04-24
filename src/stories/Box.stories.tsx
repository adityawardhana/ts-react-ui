import { Box, Text } from "../components";

export default {
  title: "Example/Layout/Box",
  component: Box,
  parameters: {},
};

export const Spacing = () => {
  return (
    <>
      <Box m={16} bg="primary">
        <Text type="B16" color="white">
          This Box with margin
        </Text>
      </Box>
      <Box p={16} bg="primary">
        <Text type="B16" color="white">
          This Box with padding
        </Text>
      </Box>
    </>
  );
};

export const Color = () => {
  return (
    <>
      <Box bg="secondary" color="white" p={8} mb={8}>
        This Box has background-color secondary
      </Box>
      <Box p={8} color="secondary">
        This Box has text-color secondary
      </Box>
    </>
  );
};

export const Border = () => {
  return (
    <>
      <Box border="1px solid secondary" p={8} mb={8}>
        <Text type="B16">I'm a text inside of Box</Text>
      </Box>
      <Box border="1px solid primary" borderRadius={8} p={8}>
        <Text type="B16">I'm a text inside of Box with radius 8</Text>
      </Box>
    </>
  );
};

export const Sizing = () => {
  return (
    <Box width={100} height={200} bg="secondary" p={8}>
      <Text type="B16" color="white">
        This Box width is 100px and height is 200px
      </Text>
    </Box>
  );
};

export const Flexbox = () => {
  return (
    <Box justifyContent="space-between" bg="cyan500" p={8} height={300}>
      <Box
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
        border="8px solid black900"
        bg="white"
        p={8}
        flex={1}
      >
        <Box bg="black900" width={50} height={50} />
        <Text>Flex-Start Box</Text>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        border="8px solid black900"
        bg="white"
        p={8}
        flex={1}
      >
        <Box bg="black900" width={50} height={50} />
        <Text>Center Box</Text>
      </Box>
      <Box
        justifyContent="flex-end"
        alignItems="flex-end"
        flexDirection="column"
        border="8px solid black900"
        bg="white"
        p={8}
        flex={1}
      >
        <Box bg="black900" width={50} height={50} />
        <Text>Flex-End Box</Text>
      </Box>
    </Box>
  );
};

export const Display = () => {
  return (
    <Box display="inline-block" bg="secondary" p={8}>
      <Text type="B16" color="white">
        inline-block element
      </Text>
    </Box>
  );
};
