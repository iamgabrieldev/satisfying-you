import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "../ui/forms/TextField";
import { ValidationMessages } from "../validation/Messages";
import { Text, Button } from "react-native-paper";
import { launchCamera, launchImageLibrary, Asset, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import React, { useState } from 'react';
import { StyleSheet, View, Image as RNImage } from "react-native";


const ImageInput = () => {
  const [urlFoto, setUrlFoto] = useState<string>('');
  const [foto, setFoto] = useState<Asset | null>(null);

  const uploadImageGaleria = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    try {
      const result = await launchImageLibrary(options);
      if (result.assets && result.assets.length > 0) {
        setUrlFoto(result.assets[0].uri || '');
        setFoto(result.assets[0]);
      }
    } catch (error) {
      console.log("Erro na captura de imagem: " + JSON.stringify(error));
    }
  };

  const uploadImage = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
      quality: 1,
    };

    try {
      const result = await launchCamera(options);
      if (result.assets && result.assets.length > 0) {
        setUrlFoto(result.assets[0].uri || '');
        setFoto(result.assets[0]);
      }
    } catch (error) {
      console.log("Erro na captura de imagem: " + JSON.stringify(error));
    }

    return "not implemented";
  };

  return (
    <View style={styles.container}>
      {urlFoto ? (
        <RNImage
          source={{ uri: urlFoto }}
          style={styles.imagePreview}
        />
      ) : (
        <Text style={styles.imagePlaceholder}>Nenhuma imagem selecionada</Text>
      )}
      <Button onPress={() => uploadImage()} mode="contained" style={styles.button}>
        Câmera
      </Button>
      <Button onPress={() => uploadImageGaleria()} mode="contained" style={styles.button}>
        Galeria
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  imagePreview: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 80,
    color: '#999',
  },
  button: {
    marginTop: 10,
  },
});

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
  ImageInput,
  defaultValues,
};

export default NewResearchFormLayout;
