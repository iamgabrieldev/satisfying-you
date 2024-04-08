import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { SatisfyingYouLogo } from "../components/Sy.Logo";
import { LoginForm } from "../components/login/login.form";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View style={{ height: "100%" }}>
      <SatisfyingYouLogo />
      <View
        style={{
          paddingLeft: theme.spacing(4),
          paddingEnd: theme.spacing(4),
        }}
      >
        <LoginForm />
        <View
          style={{
            gap: theme.spacing(1),
          }}
        >
          <Button mode="contained" onPress={() => navigate("Create Account")}>
            Create Account
          </Button>
          <Button mode="contained">Forgot My Password</Button>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
