import { View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import LoginFormLayout from "./login.form-layout";
import { FormProvider, useForm } from "react-hook-form";
import { Button, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase/config";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

export const LoginForm = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  const form = useForm({ defaultValues: LoginFormLayout.defaultValues });
  const { handleSubmit } = form;
  const [error, setError] = useState<string | null>(null);

  const submit = handleSubmit((formData) => {
    const { email, password } = formData;
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        navigate("Root");
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          setError("Usuário ou senha inválidos");
        }
      });
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
        {error && (
          <HelperText type="error" style={{ textAlign: "center" }}>
            {error}
          </HelperText>
        )}
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
