import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../pages/home.page";
import { AppParamList } from "./navigation";
import { useAppTheme } from "../theme/defaultTheme";

const Drawer = createDrawerNavigator<AppParamList>();

export const AppRoot = () => {
  const theme = useAppTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        sceneContainerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.primaryContainer,
        },
        headerTintColor: theme.colors.onPrimaryContainer,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerStyle: {
          backgroundColor: theme.colors.primaryContainer,
        },
        drawerActiveTintColor: theme.colors.onPrimary,
      }}
    >
      <Drawer.Screen name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
};
