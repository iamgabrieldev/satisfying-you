import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../forms/TextField";

const Email = () => {
  const { control } = useFormContext<LoginFormFields>();
  return (
    <Controller
      control={control}
      name="email"
      rules={{ required: "Email is required" }}
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
      rules={{ required: "Password is required" }}
      render={({ field, fieldState }) => (
        <TextField
          label="Password"
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
