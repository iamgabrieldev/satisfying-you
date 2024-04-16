import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootParamList } from "./navigation";
import { useAppTheme } from "../theme/defaultTheme";
import LoginPage from "../pages/login.page";
import { SyAppbar } from "../components/appbar/Sy.Appbar";
import CreateAccountPage from "../pages/create-account.page";
import { AppRoot } from "./AppRoot";

const Stack = createNativeStackNavigator<RootParamList>();

export const Navigator = () => {
  const theme = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        header: (props) => <SyAppbar {...props} />,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create Account" component={CreateAccountPage} />
      <Stack.Screen
        name="Root"
        component={AppRoot}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
