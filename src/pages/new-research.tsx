import React, { FC } from "react";
import { useAppTheme } from "../theme/defaultTheme";
import { NewResearchForm } from "../components/newResearch/new-research.form";
import { View } from "react-native";
import { NewResearchScreenProps } from "../navigation/navigation";

const NewResearch: FC<NewResearchScreenProps> = ({ route, navigation }) => {
  const theme = useAppTheme();
  return (
    <View style={{ margin: theme.spacing(2) }}>
      <NewResearchForm />
    </View>
  );
};

export default NewResearch;
