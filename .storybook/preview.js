import { addDecorator } from "@storybook/react";
import { ThemeProvider, GlobalStyles, defaultTheme } from "../src/theme";

addDecorator((story) => (
  <ThemeProvider theme={defaultTheme}>
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
