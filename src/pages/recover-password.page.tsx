import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextField } from "../components/ui/forms/TextField";
import { Controller, useForm } from "react-hook-form";
import { Button, Text } from "react-native-paper";
import { useAppTheme } from "../theme/defaultTheme";
import { Container } from "../components/ui/Container";
import { ValidationMessages } from "../components/validation/Messages";
import { FC } from "react";
import { RecoverPasswordScreenProps } from "../navigation/navigation";
import { sendPasswordResetEmail } from "@firebase/auth";
import { firebaseAuth } from "../firebase/config";

const RecoverPasswordPage: FC<RecoverPasswordScreenProps> = ({
  navigation,
}) => {
  const { control, handleSubmit } = useForm<{ email: string }>();
  const { navigate } = navigation;
  const theme = useAppTheme();

  const submit = handleSubmit((formData) => {
    const { email } = formData
    sendPasswordResetEmail(firebaseAuth, email).then(() => {
      console.log("E-mail de recuperação enviado com sucesso!")
      navigate("Login");
    })
  });

  return (
    <Container
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        gap: theme.spacing(2),
      }}
    >
      <Controller
        control={control}
        name="email"
        rules={{
          required: ValidationMessages.REQUIRED_EMAIL,
          validate: {
            isValid: (value) =>
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
                ? true
                : ValidationMessages.INVALID_EMAIL,
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Email"
            {...field}
            isError={fieldState.error ? true : false}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button
        onPress={() => submit()}
        mode="contained"
        buttonColor={theme.colors.success}
        textColor={theme.colors.onSuccess}
      >
        Recuperar
      </Button>
    </Container>
  );
};

export default RecoverPasswordPage;
