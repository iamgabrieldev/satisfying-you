import * as React from "react";
import { Modal, Text, Button, Portal } from "react-native-paper";
import { FormProvider, useForm } from "react-hook-form";
import { Image, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";
import ModifiedResearchFormLayout, {
  ModifiedResearchFormFields,
} from "./modified-research.form-layout";
import { useNavigation } from "@react-navigation/native";

export const ModifiedResearchForm = () => {
  const { navigate } = useNavigation();
  const form = useForm<ModifiedResearchFormFields>({
    defaultValues: ModifiedResearchFormLayout.defaultValues,
  });
  const { handleSubmit } = form;
  const theme = useAppTheme();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: theme.colors.primaryContainer,
    padding: 20,
  };

  const submit = handleSubmit((formData) => {
    navigate("Root");
  });

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
                onPress={hideModal}
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
