import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../ui/forms/TextField";
import { ValidationMessages } from "../validation/Messages";
import { Text, TextInput } from "react-native-paper";
import { Image } from "react-native";

const Name = () => {
  const { control } = useFormContext<ModifiedResearchFormFields>();
  return (
    <Controller
      control={control}
      name="nome"
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
  const { control } = useFormContext<ModifiedResearchFormFields>();
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
          dataText={true}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

const ImageInput = () => {
  const { watch } = useFormContext<ModifiedResearchFormFields>();
  const imageUrl = watch("imageUrl");

  console.log("Image URL: ", imageUrl);

  return (
    <>
      <Text style={{ color: "#fff" }}>Imagem</Text>
      <Image source={require("../../assets/images/formImg.png")} />
    </>
  );
};

export type ModifiedResearchFormFields = {
  nome: string;
  data: string;
  imageUrl: any;
};

const defaultValues: ModifiedResearchFormFields = {
  nome: "Ubuntu 2022",
  data: "10/10/2023",
  imageUrl: "",
};

const ModifiedResearchFormLayout = {
  Name,
  Data,
  ImageInput,
  defaultValues,
};

export default ModifiedResearchFormLayout;
