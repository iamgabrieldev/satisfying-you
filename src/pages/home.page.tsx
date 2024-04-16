import { View } from "react-native";
import { useAppTheme } from "../theme/defaultTheme";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: theme.spacing(2),
          color: theme.colors.onBackground,
        }}
        variant="headlineMedium"
      >
        Home Page!
      </Text>
      <Button onPress={() => navigate("Login")} mode="contained">
        Sign out
      </Button>
    </View>
  );
};

export default HomePage;
