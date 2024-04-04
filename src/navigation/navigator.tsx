import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation";
import { HomePage } from "../home/home.page";
import { LoginPage } from "../login/login.page";
import { useAppTheme } from "../theme/defaultTheme";
import { View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const theme = useAppTheme();

  const headerOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: theme.colors.primaryContainer },
    headerTintColor: theme.colors.onPrimaryContainer,
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name="Home" component={HomePage} options={headerOptions} />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
