import { FormProvider, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import { Button } from "react-native-paper";
import NewResearchFormLayout, {
  NewResearchFormFields,
} from "./new-research.form-layout";

export const NewResearchForm = () => {
  const form = useForm<NewResearchFormFields>({
    defaultValues: NewResearchFormLayout.defaultValues,
  });
  const { handleSubmit } = form;
  const { navigate } = useNavigation();
  const theme = useAppTheme();

  const submit = handleSubmit((formData) => {
    navigate("Root");
  });

  return (
    <FormProvider {...form}>
      <View
        style={{
          marginBottom: theme.spacing(3),
          gap: theme.spacing(2),
        }}
      >
        <NewResearchFormLayout.Name />
        <NewResearchFormLayout.Data />
        <NewResearchFormLayout.ImageInput />
        <Button
          mode="contained"
          buttonColor={theme.colors.success}
          textColor={theme.colors.onSuccess}
          onPress={() => submit()}
        >
          Cadastrar
        </Button>
      </View>
    </FormProvider>
  );
};
