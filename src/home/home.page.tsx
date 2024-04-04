import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const HomePage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View>
      <Text style={{ color: theme.colors.onBackground }}>Home Page!</Text>
      <Button onPress={() => navigate("Login")}>Go to Login Page</Button>
    </View>
  );
};
