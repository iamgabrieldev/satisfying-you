/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FC } from "react";
import { Navigator } from "./src/navigation/Navigator";
import "react-native-gesture-handler";
import { FirebaseProvider } from "./src/firebase/context";

const App: FC = () => {
  return (
    <FirebaseProvider>
      <Navigator />
    </FirebaseProvider>
  );
};

export default App;
