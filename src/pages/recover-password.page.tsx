import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextField } from "../components/ui/forms/TextField";
import { Controller, useForm } from "react-hook-form";
import { Button, Text } from "react-native-paper";
import { useAppTheme } from "../theme/defaultTheme";
import { Container } from "../components/ui/Container";
import { ValidationMessages } from "../components/validation/Messages";

const RecoverPasswordPage = () => {
  const { control, handleSubmit } = useForm<{ email: string }>();
  const { navigate } = useNavigation();
  const theme = useAppTheme();

  const submit = handleSubmit((formData) => {
    // TODO: Handle recover password here
    navigate("Login");
  });

  return (
    <Container
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        gap: theme.spacing(1),
      }}
    >
      <Text style={{ color: theme.colors.onBackground }} variant="bodyMedium">
        Informe seu e-mail abaixo para recuperar sua senha:{" "}
      </Text>
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
      <Button onPress={() => submit()} mode="contained">
        Enviar
      </Button>
    </Container>
  );
};

export default RecoverPasswordPage;
