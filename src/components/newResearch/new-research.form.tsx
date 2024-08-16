import { FormProvider, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAppTheme } from "../../theme/defaultTheme";
import { Button } from "react-native-paper";
import NewResearchFormLayout, {
  NewResearchFormFields,
} from "./new-research.form-layout";
import React, { useState } from "react";
import { Asset, ImageLibraryOptions, launchImageLibrary, CameraOptions, launchCamera } from "react-native-image-picker";
import { StyleSheet, View, Image as RNImage, Text } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


export const NewResearchForm = () => {
  const [urlFoto, setUrlFoto] = useState<string>('');
  const [foto, setFoto] = useState<Asset | null>(null);
  const form = useForm<NewResearchFormFields>({
    defaultValues: NewResearchFormLayout.defaultValues,
  });
  const { handleSubmit, reset } = form;
  const { navigate } = useNavigation();
  const theme = useAppTheme();

  const pesquisaCollection = collection(db, 'pesquisas')

  const submit = handleSubmit( async (formData) => {
    const {name, data} = formData
    console.log("name: ", name)
    console.log("data: ", data)

    if (!foto) {
      console.log("Selecione uma imagem para a pesquisa");
      return;
    }

    const imageRef = ref(storage, 'pesquisas/' + name + '.jpg')
    const file = await fetch(urlFoto)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' }).then( (result) => {
      console.log('Imagem enviada com sucesso!')
      getDownloadURL(imageRef).then( (url) => {
        const docPesquisa = {
            nome: name,
            data: data,
            imageUrl: url,
            votos: {
                pessimo: 0,
                ruim: 0,
                neutro: 0,
                bom: 0,
                excelente: 0,
            }
        }
        addDoc(pesquisaCollection, docPesquisa).then( (docRef) => {
          console.log('Pesquisa adicionada com sucesso!' + docRef.id)
          reset(); // Limpa os campos do formulário
          setUrlFoto(''); // Limpa a URL da foto
          setFoto(null); // Limpa a foto
          navigate('Home');
        }).catch( (error) => {
            console.log('Erro ao adicionar pesquisa: ' + error)
        })
      })
    }).catch( (error) => {
      console.log('Erro ao enviar imagem: ' + error)
    })
  });

  return (
    <FormProvider {...form}>
      <View
        style={{
          marginBottom: theme.spacing(3),
          gap: theme.spacing(2),
        }}
      >
        <NewResearchFormLayout.Name />
        <NewResearchFormLayout.Data />
        <ImageInput setUrlFoto={setUrlFoto} setFoto={setFoto} urlFoto={urlFoto} />
        <Button
          mode="contained"
          buttonColor={theme.colors.success}
          textColor={theme.colors.onSuccess}
          onPress={() => submit()}
        >
          Cadastrar
        </Button>
      </View>
    </FormProvider>
  );
};

interface ImageInputProps {
  setUrlFoto: any;
  setFoto: any;
  urlFoto: any;
}

const ImageInput = ({ setUrlFoto, setFoto, urlFoto }: ImageInputProps) => {

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