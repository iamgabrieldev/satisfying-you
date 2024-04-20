import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Appbar } from "react-native-paper";
import { useAppTheme } from "../../../theme/defaultTheme";

export const RootAppbar = ({
  layout,
  navigation,
  options,
  route,
}: DrawerHeaderProps) => {
  const theme = useAppTheme();
  return (
    <Appbar
      style={{ backgroundColor: theme.colors.primaryContainer }}
      theme={{
        colors: {
          onSurface: theme.colors.onPrimaryContainer,
          onSurfaceVariant: theme.colors.onPrimaryContainer,
        },
      }}
    >
      <Appbar.Action icon={"menu"} onPress={() => navigation.openDrawer()} />
      <Appbar.Content
        title={
          options.headerTitle !== undefined &&
          typeof options.headerTitle === "string"
            ? options.headerTitle
            : route.name
        }
      />
    </Appbar>
  );
};
