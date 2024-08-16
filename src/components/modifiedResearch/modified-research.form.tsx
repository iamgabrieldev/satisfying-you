import * as React from "react";
import { Modal, Text, Button, Portal } from "react-native-paper";
import { FormProvider, useForm } from "react-hook-form";
import { Image, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import ModifiedResearchFormLayout, {
  ModifiedResearchFormFields,
} from "./modified-research.form-layout";
import { useNavigation } from "@react-navigation/native";
import { collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ModifiedResearchForm = (id: any) => {
  const { navigate } = useNavigation();

  let form = useForm<ModifiedResearchFormFields>({
    defaultValues: ModifiedResearchFormLayout.defaultValues,
  });
  const { handleSubmit, reset } = form;
  const theme = useAppTheme();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const removeResearch = async (id: any) => { 
    console.log("Remove research");
    try {
      const docRef = doc(db, "pesquisas", id.id);
      await deleteDoc(docRef);
      console.log("Research removed successfully");
    } catch (error) {
      console.error("Error removing research: ", error);
    } finally {
      hideModal();
      navigate('Home')
    }
  }


  const containerStyle = {
    backgroundColor: theme.colors.primaryContainer,
    padding: 20,
  };

  const pesquisaCollection = collection(db, 'pesquisas')

  const submit = handleSubmit((formData) => {
    const { nome, data } = formData;

    const docPesquisa = {
      nome: nome,
      data: data,
      votos: {
        pessimo: 0,
        ruim: 0,
        neutro: 0,
        bom: 0,
        excelente: 0,
      },
    }

    const docRef = doc(pesquisaCollection, id.id);
    updateDoc(docRef, docPesquisa).then(() => {
      console.log('Pesquisa atualizada com sucesso!');
      navigate('Home');
    }).catch((error) => {
      console.log('Erro ao atualizar pesquisa: ' + error);
    });
  });

  const fetchResearchData = async (id: any) => {
    try {
      const docRef = doc(db, "pesquisas", id.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const result = docSnap.data() as ModifiedResearchFormFields
        console.log("Result: ", result)
        reset({nome: result.nome, data: result.data, imageUrl: result.imageUrl});

      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

  React.useEffect(() => {
    fetchResearchData(id);
  }, [id]);

  return (
    <FormProvider {...form}>
      <View
        style={{
          marginBottom: theme.spacing(3),
          gap: theme.spacing(2),
        }}
      >
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text
              style={{
                textAlign: "center",
                color: theme.colors.onPrimaryContainer,
                fontSize: 30,
              }}
            >
              Tem certeza de apagar essa pesquisa?
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "baseline",
                paddingTop: 15,
              }}
            >
              <Button
                mode="contained"
                buttonColor={"#FF8383"}
                textColor={theme.colors.onPrimaryContainer}
                onPress={() => removeResearch(id)}
                style={{ width: "40%" }}
              >
                SIM
              </Button>
              <Button
                mode="contained"
                buttonColor={"#3F92C5"}
                textColor={theme.colors.onPrimaryContainer}
                onPress={hideModal}
                style={{ width: "40%" }}
              >
                CANCELAR
              </Button>
            </View>
          </Modal>
        </Portal>
        <ModifiedResearchFormLayout.Name />
        <ModifiedResearchFormLayout.Data />
        <ModifiedResearchFormLayout.ImageInput />
        <Button
          mode="contained"
          buttonColor={theme.colors.success}
          textColor={theme.colors.onSuccess}
          onPress={() => submit()}
        >
          Salvar
        </Button>
        <TouchableOpacity
          style={{
            padding: theme.spacing(4),
            width: "40%",
            justifyContent: "flex-start",
          }}
          onPress={showModal}
        >
          <Image
            source={require("../../assets/images/lixo.png")}
            style={{
              marginStart: "auto",
              marginEnd: "auto",
              width: 20,
              height: 20,
            }}
          />
          <Text
            variant="displaySmall"
            style={{
              textAlign: "center",
              color: theme.colors.onPrimaryContainer,
              fontSize: 16,
            }}
          >
            Apagar
          </Text>
        </TouchableOpacity>
      </View>
    </FormProvider>
  );
};
