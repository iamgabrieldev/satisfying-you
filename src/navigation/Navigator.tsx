import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PreAuthParamList } from "./navigation";
import { useAppTheme } from "../theme/defaultTheme";
import LoginPage from "../pages/login.page";
import { UserAppbar } from "../components/ui/appbar/UserAppbar";
import CreateAccountPage from "../pages/create-account.page";
import { AppRoot } from "./AppRoot";
import RecoverPasswordPage from "../pages/recover-password.page";
import ReportPage from "../pages/report.page";

const Stack = createNativeStackNavigator<PreAuthParamList>();

export const Navigator = () => {
  const theme = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        header: (props) => <UserAppbar {...props} />,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create Account"
        component={CreateAccountPage}
        options={{ title: "Criar Conta" }}
      />
      <Stack.Screen
        name="Recover Password"
        component={RecoverPasswordPage}
        options={{ title: "Recuperar Senha" }}
      />
      <Stack.Screen
        name="Report Page"
        component={ReportPage}
        options={{ title: "Relatório" }}
      />
      <Stack.Screen
        name="Root"
        component={AppRoot}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
