import React from "react";
import { useAppTheme } from "../theme/defaultTheme";
import { View } from "react-native";
import { ModifiedResearchForm } from "../components/modifiedResearch/modified-research.form";

const ModifiedResearch = ({ route, navigation }: any) => {
  const theme = useAppTheme();
  return (
    <View style={{ margin: theme.spacing(2) }}>
      <ModifiedResearchForm />
    </View>
  );
};

export default ModifiedResearch;
