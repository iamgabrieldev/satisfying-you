import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";
import { useAppTheme } from "../../../theme/defaultTheme";

export type UserAppbarProps = NativeStackHeaderProps;

export const UserAppbar = ({
  navigation,
  options,
  route,
  back,
}: UserAppbarProps) => {
  const theme = useAppTheme();

  const handleBackAction = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

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
      <Appbar.BackAction onPress={() => handleBackAction()} />
      <Appbar.Content
        title={options.title !== undefined ? options.title : route.name}
      />
    </Appbar>
  );
};
