import { ThemeProvider } from 'styled-components';

import theme from "../theme";
import GlobalStyles from './global'

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;