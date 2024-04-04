/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { defaultTheme } from './src/theme/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (
    <PaperProvider theme={defaultTheme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
