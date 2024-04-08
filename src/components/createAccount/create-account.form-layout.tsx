import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../forms/TextField";

const Email = () => {
  const { control } = useFormContext<CreateAccountFormFields>();
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
  const { control } = useFormContext<CreateAccountFormFields>();
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

const RePassword = () => {
  const { control, watch } = useFormContext<CreateAccountFormFields>();
  const pass = watch("password");
  return (
    <Controller
      control={control}
      name="repassword"
      rules={{
        required: "Repeating Password is Required",
        validate: (value) => value === pass || "Should be the same as password",
      }}
      render={({ field, fieldState }) => (
        <TextField
          label="Repeat Password"
          {...field}
          isError={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export type CreateAccountFormFields = {
  email: string;
  password: string;
  repassword: string;
};

const defaultValues: CreateAccountFormFields = {
  email: "",
  password: "",
  repassword: "",
};

const CreateAccountFormLayout = {
  Email,
  Password,
  RePassword,
  defaultValues,
};

export default CreateAccountFormLayout;
