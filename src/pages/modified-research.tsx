import React, { FC } from "react";
import { useAppTheme } from "../theme/defaultTheme";
import { View } from "react-native";
import { ModifiedResearchForm } from "../components/modifiedResearch/modified-research.form";
import { ModifiedResearchScreenProps } from "../navigation/navigation";

const ModifiedResearch: FC<ModifiedResearchScreenProps> = ({
  route,
  navigation,
}) => {
  const theme = useAppTheme();
  const researchId = route.params.id;
  return (
    <View style={{ margin: theme.spacing(2) }}>
      <ModifiedResearchForm id={researchId} />
    </View>
  );
};

export default ModifiedResearch;
