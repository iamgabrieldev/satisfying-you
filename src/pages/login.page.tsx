import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { SatisfyingYouLogo } from "../components/ui/Sy.Logo";
import { LoginForm } from "../components/login/login.form";
import { Button } from "react-native-paper";
import { Container } from "../components/ui/Container";
import { FC } from "react";
import { LoginScreenProps } from "../navigation/navigation";

const LoginPage: FC<LoginScreenProps> = ({ navigation }) => {
  const theme = useAppTheme();
  const { navigate } = navigation;

  return (
    <View style={{ height: "100%" }}>
      <SatisfyingYouLogo />
      <Container style={{ gap: theme.spacing(8) }}>
        <LoginForm />
        <View
          style={{
            gap: theme.spacing(1),
          }}
        >
          <Button mode="contained" onPress={() => navigate("Create Account")}>
            Criar minha conta
          </Button>
          <Button
            mode="contained"
            onPress={() => navigate("Recover Password")}
            style={{ backgroundColor: theme.colors.secondary }}
            textColor={theme.colors.onSecondary}
          >
            Esqueci minha senha
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default LoginPage;
