import { FormProvider, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import { Button } from "react-native-paper";
import ModifiedResearchFormLayout, { ModifiedResearchFormFields } from "./modified-research.form-layout";

export const ModifiedResearchForm = () => {
  const form = useForm<ModifiedResearchFormFields>({
    defaultValues: ModifiedResearchFormLayout.defaultValues,
  });
  const theme = useAppTheme();

  return (
    <FormProvider {...form}>
      <View
        style={{
          marginBottom: theme.spacing(3),
          gap: theme.spacing(2),
        }}
      >
        <ModifiedResearchFormLayout.Name />
        <ModifiedResearchFormLayout.Data />
        <ModifiedResearchFormLayout.ImageInput />
        <View>
          <Button
            mode="contained"
            buttonColor={theme.colors.success}
            textColor={theme.colors.onSuccess}
            >
            Salvar
          </Button>
          
        </View>
      </View>
    </FormProvider>
  );
};
