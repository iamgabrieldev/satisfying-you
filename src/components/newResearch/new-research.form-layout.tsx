import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../ui/forms/TextField";
import { ValidationMessages } from "../validation/Messages";

const Name = () => {
  const { control } = useFormContext<NewResearchFormFields>();
  return (
    <Controller
      control={control}
      name="name"
      rules={{ required: ValidationMessages.REQUIRED_NAME_RESEARCH }}
      render={({ field, fieldState }) => (
        <TextField
          label="Nome"
          {...field}
          isError={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

const Data = () => {
  const { control } = useFormContext<NewResearchFormFields>();
  return (
    <Controller
      control={control}
      name="data"
      rules={{ required: ValidationMessages.REQUIRED_DATE_RESEARCH }}
      render={({ field, fieldState }) => (
        <TextField
          label="Data"
          {...field}
          isError={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

const Image = () => {
  const { control } = useFormContext<NewResearchFormFields>();
  return (
    <Controller
      control={control}
      name="image"
      render={({ field, fieldState }) => (
        <TextField
          label="Imagem"
          {...field}
          isError={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export type NewResearchFormFields = {
  name: string;
  data: string;
  image: any;
};

const defaultValues: NewResearchFormFields = {
  name: "",
  data: "",
  image: undefined,         
};

const NewResearchFormLayout = {
  Name,
  Data,
  Image,
  defaultValues,
};

export default NewResearchFormLayout;