import { View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import LoginFormLayout from "./login.form-layout";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  const form = useForm({ defaultValues: LoginFormLayout.defaultValues });
  const { handleSubmit } = form;

  const submit = handleSubmit((formData) => {
    // TODO: Handle login
    navigate("Root");
  });

  return (
    <FormProvider {...form}>
      <View
        style={{
          gap: theme.spacing(1),
        }}
      >
        <LoginFormLayout.Email />
        <LoginFormLayout.Password />
        <Button
          onPress={() => submit()}
          mode="contained"
          buttonColor={theme.colors.success}
          textColor={theme.colors.onSuccess}
        >
          Entrar
        </Button>
      </View>
    </FormProvider>
  );
};
