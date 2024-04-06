import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { useNavigation } from "@react-navigation/native";
import { SatisfyingYouLogo } from "../components/Sy.Logo";
import { LoginForm } from "../components/login/login.form";

const LoginPage = () => {
  const theme = useAppTheme();
  return (
    <View>
      <SatisfyingYouLogo />
      <View
        style={{ paddingLeft: theme.spacing(4), paddingEnd: theme.spacing(4) }}
      >
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginPage;
