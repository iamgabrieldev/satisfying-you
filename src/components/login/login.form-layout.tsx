import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../ui/forms/TextField";
import { ValidationMessages } from "../validation/Messages";

const Email = () => {
  const { control } = useFormContext<LoginFormFields>();
  return (
    <Controller
      control={control}
      name="email"
      rules={{ required: ValidationMessages.REQUIRED_EMAIL }}
      render={({ field, fieldState }) => (
        <TextField
          label="Email"
          {...field}
          isError={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

const Password = () => {
  const { control } = useFormContext<LoginFormFields>();
  return (
    <Controller
      control={control}
      name="password"
      rules={{ required: ValidationMessages.REQUIRED_PASS }}
      render={({ field, fieldState }) => (
        <TextField
          label="Senha"
          {...field}
          isError={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export type LoginFormFields = {
  email: string;
  password: string;
};

const defaultValues: LoginFormFields = {
  email: "",
  password: "",
};

const LoginFormLayout = {
  Email,
  Password,
  defaultValues,
};

export default LoginFormLayout;
