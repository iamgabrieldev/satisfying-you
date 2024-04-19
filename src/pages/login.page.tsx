import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { SatisfyingYouLogo } from "../components/ui/Sy.Logo";
import { LoginForm } from "../components/login/login.form";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../components/ui/Container";

const LoginPage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View style={{ height: "100%" }}>
      <SatisfyingYouLogo />
      <Container>
        <LoginForm />
        <View
          style={{
            gap: theme.spacing(1),
          }}
        >
          <Button mode="contained" onPress={() => navigate("Create Account")}>
            Criar minha conta
          </Button>
          <Button mode="contained" onPress={() => navigate("Recover Password")}>
            Esqueci minha senha
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default LoginPage;
