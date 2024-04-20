import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Divider, Drawer, Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/defaultTheme";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RootDrawerContent = ({
  ...props
}: DrawerContentComponentProps) => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: theme.spacing(2),
      }}
    >
      <View>
        <Text
          style={{
            color: theme.colors.onPrimaryContainer,
            textAlign: "center",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          }}
          variant="headlineSmall"
        >
          user@domain.com
        </Text>
        <Divider
          style={{
            marginStart: theme.spacing(4),
            marginEnd: theme.spacing(4),
            borderColor: theme.colors.onPrimaryContainer,
            borderWidth: 0.5,
          }}
        />
        <Drawer.Item
          label="Pesquisas"
          icon="file-document-outline"
          style={{ marginStart: 0 }}
          theme={{
            colors: { onSurfaceVariant: theme.colors.onPrimaryContainer },
          }}
          onPress={() => navigate("Home")}
        />
      </View>
      <Drawer.Item
        label="Sair"
        icon="exit-to-app"
        style={{ marginStart: 0 }}
        theme={{
          colors: { onSurfaceVariant: theme.colors.onPrimaryContainer },
        }}
        onPress={() => navigate("Login")}
      />
    </View>
  );
};
