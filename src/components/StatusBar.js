import React, { useContext } from 'react';

import { StatusBar } from "react-native"
import { ThemeProviderContext } from '../ThemeProvider';
import { ThemeContext } from 'styled-components';

export default () => {
    const theme = useContext(ThemeContext);

    return <StatusBar barStyle={theme.barStyle} translucent/>;
}