import React, { createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './config/theme';

export const ThemeProviderContext = createContext();

export default ({ children }) => {
    const { activeTheme } = useContext(ThemeProviderContext);

    return <ThemeProvider theme={theme[activeTheme]}>
        {children}
    </ThemeProvider>
};
