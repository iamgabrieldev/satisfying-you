import { FormProvider, useForm } from "react-hook-form";
import CreateAccountFormLayout, {
  CreateAccountFormFields,
} from "./create-account.form-layout";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import { Button } from "react-native-paper";

export const CreateAccountForm = () => {
  const form = useForm<CreateAccountFormFields>({
    defaultValues: CreateAccountFormLayout.defaultValues,
  });
  const { handleSubmit } = form;
  const { navigate } = useNavigation();
  const theme = useAppTheme();

  const submit = handleSubmit((formData) => {
    // TODO: Handle create account
    navigate("Login");
  });

  return (
    <FormProvider {...form}>
      <View
        style={{
          marginBottom: theme.spacing(3),
          gap: theme.spacing(2),
        }}
      >
        <CreateAccountFormLayout.Email />
        <CreateAccountFormLayout.Password />
        <CreateAccountFormLayout.RePassword />
        <Button
          onPress={() => submit()}
          mode="contained"
          buttonColor={theme.colors.success}
          textColor={theme.colors.onSuccess}
        >
          Create Account
        </Button>
      </View>
    </FormProvider>
  );
};
