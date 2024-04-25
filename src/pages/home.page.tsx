import { useAppTheme } from "../theme/defaultTheme";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../components/ui/Container";

const HomePage = () => {
  const theme = useAppTheme();
  const { navigate } = useNavigation();
  return (
    <Container style={{ gap: theme.spacing(2) }}>
      <Text
        style={{
          textAlign: "center",
          color: theme.colors.onBackground,
        }}
        variant="headlineMedium"
      >
        Home Page!
      </Text>
      <Button onPress={() => navigate("Login")} mode="contained">
        Sign out
      </Button>
      <Button
        onPress={() =>
          navigate("Research Actions", {
            research: { date: "21/04/2023", imgSourcePath: "", title: "Tile" },
          })
        }
        mode="contained"
      >
        Test Research Action
      </Button>
      <Button onPress={()=> navigate("New Research")} mode="contained">
        Nova Pesquisa
      </Button>
    </Container>
  );
};

export default HomePage;
