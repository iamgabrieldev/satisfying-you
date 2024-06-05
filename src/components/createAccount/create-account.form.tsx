import { FormProvider, useForm } from "react-hook-form";
import CreateAccountFormLayout, {
  CreateAccountFormFields,
} from "./create-account.form-layout";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import { Button } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase/config";

export const CreateAccountForm = () => {
  const form = useForm<CreateAccountFormFields>({
    defaultValues: CreateAccountFormLayout.defaultValues,
  });
  const { handleSubmit } = form;
  const { navigate } = useNavigation();
  const theme = useAppTheme();

  const submit = handleSubmit((formData) => {
    const { email, password } = formData;
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("Root");
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
          Criar Conta
        </Button>
      </View>
    </FormProvider>
  );
};
