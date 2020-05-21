// import 'react-native-gesture-handler';

// import { enableScreens } from 'react-native-screens';
// enableScreens();
// import {
//   initialWindowSafeAreaInsets,
//   SafeAreaProvider,
// } from 'react-native-safe-area-context';

import React, {useState} from 'react';

import ThemeProvider, {ThemeProviderContext} from './ThemeProvider';

import StatusBar from './components/StatusBar';
import MainStack from './routes/MainStack';

const App = () => {
  const [activeTheme, setActiveTheme] = useState('light');

  return (
    <ThemeProviderContext.Provider value={{activeTheme, setActiveTheme}}>
      <ThemeProvider>
        <StatusBar />
        <MainStack />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default App;
