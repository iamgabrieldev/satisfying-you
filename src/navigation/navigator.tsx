import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation";
import { useAppTheme } from "../theme/defaultTheme";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import { SyAppbar } from "../components/appbar/Sy.Appbar";
import CreateAccountPage from "../pages/create-account.page";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const theme = useAppTheme();

  const headerOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: theme.colors.primaryContainer },
    headerTintColor: theme.colors.onPrimaryContainer,
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        header: (props) => <SyAppbar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomePage} options={headerOptions} />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create Account" component={CreateAccountPage} />
    </Stack.Navigator>
  );
};
