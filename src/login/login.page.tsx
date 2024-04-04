import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SatisfyingYouLogo } from "./satisfying-you-logo";

export const LoginPage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View>
      <SatisfyingYouLogo />
      <Button onPress={() => navigate("Home")}>Go to Home Page</Button>
    </View>
  );
};
