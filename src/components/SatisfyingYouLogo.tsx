import { Text } from "react-native-paper";
import { useAppTheme } from "../theme/defaultTheme";

export const SatisfyingYouLogo = () => {
  const theme = useAppTheme();
  return (
    <Text
      variant="headlineLarge"
      style={{
        color: theme.colors.onBackground,
        textAlign: "center",
        margin: theme.spacing(4),
      }}
    >
      Satisfying You =D
    </Text>
  );
};
