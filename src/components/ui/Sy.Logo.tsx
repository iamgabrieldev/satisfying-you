import { Text } from "react-native-paper";
import { useAppTheme } from "../../theme/defaultTheme";

export const SatisfyingYouLogo = () => {
  const theme = useAppTheme();
  return (
    <Text
      variant="headlineLarge"
      style={{
        color: theme.colors.onBackground,
        textAlign: "center",
        marginTop: theme.spacing(3),
      }}
    >
      Satisfying You =D
    </Text>
  );
};
