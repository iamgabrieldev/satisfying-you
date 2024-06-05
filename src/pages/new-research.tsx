import React from "react";
import { useAppTheme } from "../theme/defaultTheme";
import { NewResearchForm } from "../components/newResearch/new-research.form";
import { View } from "react-native";

const NewResearch = ({ route, navigation }: any) => {
  const theme = useAppTheme();
  return (
    <View style={{ margin: theme.spacing(2) }}>
      <NewResearchForm />
    </View>
  );
};

export default NewResearch;
