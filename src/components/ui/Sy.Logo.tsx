import { Icon, Text } from "react-native-paper";
import { useAppTheme } from "../../theme/defaultTheme";
import { View } from "react-native";

export const SatisfyingYouLogo = () => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(1),
      }}
    >
      <Text
        variant="headlineLarge"
        style={{
          color: theme.colors.onBackground,
          textAlign: "center",
          marginTop: theme.spacing(4),
          height: "100%",
        }}
      >
        Satisfying You
      </Text>
      <Icon
        source={"emoticon-happy-outline"}
        size={42}
        color={theme.colors.onBackground}
      />
    </View>
  );
};
