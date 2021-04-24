import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/theme/GlobalStyles";
import themes from "../src/theme";

addDecorator((story) => (
  <ThemeProvider theme={themes}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
