import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../pages/home.page";
import { AppParamList, RootScreenProps } from "./navigation";
import { useAppTheme } from "../theme/defaultTheme";
import { RootAppbar } from "../components/ui/appbar/RootAppbar";
import { RootDrawerContent } from "../components/ui/appbar/RootDrawerContent";
import ResearchActions from "../pages/search-actions";
import CollectPage from "../pages/collect.page";
import NewResearch from "../pages/new-research";
import ModifiedResearch from "../pages/modified-research";
import ThanksParticipationPage from "../pages/thanks-participation.page";
import ReportPage from "../pages/report.page";
import { FC, useEffect } from "react";
import { useFirebaseContext } from "../firebase/context";

const Drawer = createDrawerNavigator<AppParamList>();

export const AppRoot: FC<RootScreenProps> = ({ navigation }) => {
  const theme = useAppTheme();
  const { user } = useFirebaseContext();
  const { navigate } = navigation;

  /**
   * Redirects user to login page as soon as this Drawer mounts if
   * user is null.
   */
  useEffect(() => {
    if (!user) {
      navigate("Login");
    }
  }, []);

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
        name="Collect"
        component={CollectPage}
        options={{ title: "Coleta" }}
      />
      <Drawer.Screen
        name="New Research"
        component={NewResearch}
        options={{ title: "Nova Pesquisa" }}
      />
      <Drawer.Screen
        name="Modified Research"
        component={ModifiedResearch}
        options={{ title: "Modificar Pesquisa" }}
      />
      <Drawer.Screen
        name="Thanks Participation"
        component={ThanksParticipationPage}
        options={{ title: "Obrigado pela participação", headerShown: false }}
      />
      <Drawer.Screen
        name="Report Page"
        component={ReportPage}
        options={{ title: "Relatório" }}
      />
    </Drawer.Navigator>
  );
};
