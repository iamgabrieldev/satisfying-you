import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../ui/forms/TextField";
import { ValidationMessages } from "../validation/Messages";
import { Text, Button } from "react-native-paper";
import { launchCamera, launchImageLibrary, Asset, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import React, { useState } from 'react';

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
          dataText={true}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export type NewResearchFormFields = {
  name: string;
  data: string;
};

const defaultValues: NewResearchFormFields = {
  name: "",
  data: "",
};

const NewResearchFormLayout = {
  Name,
  Data,
  defaultValues,
};

export default NewResearchFormLayout;
