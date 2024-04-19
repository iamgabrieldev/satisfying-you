import { View, ViewProps } from "react-native";
import { useAppTheme } from "../../theme/defaultTheme";

type ContainerProps = ViewProps;

/**
 * Container with default margins.
 * Should be used to wrap page content.
 */
export const Container = ({ children, ...props }: ContainerProps) => {
  const theme = useAppTheme();

  return (
    <View
      {...props}
      style={{
        marginTop: theme.spacing(3),
        marginStart: theme.spacing(3),
        marginEnd: theme.spacing(3),
        // This needs to be cast as object for some weird reason
        ...(props.style as object),
      }}
    >
      {children}
    </View>
  );
};
