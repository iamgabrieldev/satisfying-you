import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../pages/home.page";
import { AppParamList } from "./navigation";
import { useAppTheme } from "../theme/defaultTheme";
import { RootAppbar } from "../components/ui/appbar/RootAppbar";
import { RootDrawerContent } from "../components/ui/appbar/RootDrawerContent";
import ResearchActions from "../pages/search-actions";
import NewResearch from "../pages/new-research";

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
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerStyle: {
          backgroundColor: theme.colors.primaryContainer,
        },
        drawerActiveTintColor: theme.colors.onPrimary,
        header: (props) => <RootAppbar {...props} />,
      }}
      drawerContent={(props) => <RootDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Research Actions"
        component={ResearchActions}
        options={{ headerTitle: "Ações de Pesquisa" }}
      />
      <Drawer.Screen 
        name="New Research" 
        component={NewResearch}
        options={{ headerTitle: "Nova Pesquisa" }}
      />
    </Drawer.Navigator>
  );
};
