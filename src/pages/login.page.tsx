import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SatisfyingYouLogo } from "../components/satisfying-you-logo";

const LoginPage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View>
      <SatisfyingYouLogo />
      <Button onPress={() => navigate("Home")}>Go to Home Page</Button>
    </View>
  );
};

export default LoginPage;
