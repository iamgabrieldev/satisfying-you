import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { Button, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SatisfyingYouLogo } from "../components/SatisfyingYouLogo";
import { LoginForm } from "../components/login/login.form";

const LoginPage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View>
      <SatisfyingYouLogo />
      <View
        style={{ paddingLeft: theme.spacing(4), paddingEnd: theme.spacing(4) }}
      >
        <LoginForm />
        <Button onPress={() => navigate("Home")} mode="contained">
          Go to Home Page
        </Button>
      </View>
    </View>
  );
};

export default LoginPage;
