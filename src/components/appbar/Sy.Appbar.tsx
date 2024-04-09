import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Appbar, Menu } from "react-native-paper";
import { useAppTheme } from "../../theme/defaultTheme";
import { useState } from "react";
import { SyMenu } from "../menu/Sy.Menu";
import { useNavigation } from "@react-navigation/native";

export type SyAppbarProps = NativeStackHeaderProps;

export const SyAppbar = ({
  navigation,
  options,
  route,
  back,
}: SyAppbarProps) => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  const [openMenu, setOpenMenu] = useState(false);

  const handleBackAction = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const menuOptions = [
    {
      label: "Login",
      navigate: () => navigate("Login"),
    },
    { label: "Create Account", navigate: () => navigate("Create Account") },
  ];

  return (
    <Appbar
      style={{ backgroundColor: theme.colors.primaryContainer }}
      theme={{
        colors: {
          onSurface: "#fff",
          onSurfaceVariant: "#fff",
        },
      }}
    >
      <Appbar.BackAction onPress={() => handleBackAction()} />
      <Appbar.Content title={route.name} />
      <SyMenu
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor={
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => setOpenMenu(true)}
            iconColor="#fff"
          />
        }
        options={menuOptions}
        getOptionLabel={(option) => option.label}
        onSelectOption={(option) => {
          option.navigate();
          setOpenMenu(false);
        }}
      />
    </Appbar>
  );
};
