import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../ui/forms/TextField";
import { ValidationMessages } from "../validation/Messages";

const Email = () => {
  const { control } = useFormContext<CreateAccountFormFields>();
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
  const { control } = useFormContext<CreateAccountFormFields>();
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

const RePassword = () => {
  const { control, watch } = useFormContext<CreateAccountFormFields>();
  const pass = watch("password");
  return (
    <Controller
      control={control}
      name="repassword"
      rules={{
        required: ValidationMessages.REQUIRED_PASS,
        validate: (value) => value === pass || "Deve ser a mesma senha",
      }}
      render={({ field, fieldState }) => (
        <TextField
          label="Repetir Senha"
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
