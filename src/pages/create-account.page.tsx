import { View } from "react-native";
import { CreateAccountForm } from "../components/createAccount/create-account.form";
import { useAppTheme } from "../theme/defaultTheme";

const CreateAccountPage = () => {
  const theme = useAppTheme();
  return (
    <View
      style={{
        marginTop: theme.spacing(3),
        marginStart: theme.spacing(3),
        marginEnd: theme.spacing(3),
      }}
    >
      <CreateAccountForm />
    </View>
  );
};

export default CreateAccountPage;
