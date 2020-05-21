import React, { useContext } from 'react';
import { Button } from 'react-native';
import { ThemeContext } from 'styled-components';
import { ThemeProviderContext } from '../ThemeProvider';

const ChangeThemeButton = () => {
  const { activeTheme, setActiveTheme } = useContext(ThemeProviderContext);
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    setActiveTheme(activeTheme == 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      color={theme.button.background}
      title="Trocar Tema"
      onPress={changeTheme}
    />
  );
};

export default ChangeThemeButton;
