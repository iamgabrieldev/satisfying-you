import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ResearchActionsScreenProps } from "../navigation/navigation";
import { ResearchAction } from "../components/research/ResearchAction";
import { useAppTheme } from "../theme/defaultTheme";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ResearchActions: FC<ResearchActionsScreenProps> = ({
  route,
  navigation,
}) => {
  const theme = useAppTheme();
  const research = route.params.research;
  const { navigate } = navigation;

  const goToModifyResearch = () => {
    // TODO: Handle modify research navigation.
    navigate("Modified Research", { id: research.id });
  };

  const goToCollect = () => {
    // TODO: Handle collect research navigation.
    navigate("Collect");
  };

  const goToReport = () => {
    navigate("Report Page");
  };

  return (
    <ScrollView
      style={{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      }}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(2),
        height: "100%",
      }}
    >
      <ResearchAction
        title="Modificar"
        imgSource={require("../assets/images/modificarImg.png")}
        onClick={goToModifyResearch}
      />
      <ResearchAction
        title="Coletar dados"
        imgSource={require("../assets/images/ColetarDadosImg.png")}
        onClick={goToCollect}
      />
      <ResearchAction
        title="Relatório"
        imgSource={require("../assets/images/RelatorioImg.png")}
        onClick={goToReport}
      />
    </ScrollView>
  );
};

export default ResearchActions;
