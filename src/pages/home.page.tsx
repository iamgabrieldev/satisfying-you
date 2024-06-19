import { useAppTheme } from "../theme/defaultTheme";
import { Button, Searchbar } from "react-native-paper";
import { Container } from "../components/ui/Container";
import { CardAction } from "../components/cards/CardsAction";
import { ScrollView } from "react-native-gesture-handler";
import { FC, useState } from "react";
import { HomeScreenProps } from "../navigation/navigation";

const HomePage: FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useAppTheme();
  const { navigate } = navigation;
  const [searchQuery, setSearchQuery] = useState("");

  const goToCard = () => {
    navigate("Research Actions", {
      research: { date: "21/04/2023", imgSourcePath: "", title: "Tile" },
    });
  };

  return (
    <ScrollView style={{ marginTop: 20, marginBottom: 20 }}>
      <Container style={{ gap: theme.spacing(2) }}>
        <Searchbar
          placeholder="Insira o termo de busca"
          style={{ marginBottom: 30 }}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        <CardAction
          title="SECOMP 2023"
          date="10/10/2023"
          imgSource={require("../assets/images/secomp.png")}
          onClick={goToCard}
        />
        <CardAction
          title="UBUNTU 2022"
          date="05/06/2022"
          imgSource={require("../assets/images/ubuntu.png")}
          onClick={goToCard}
        />
        <CardAction
          title="MENINAS CPU"
          date="01/04/2022"
          imgSource={require("../assets/images/meninascpu.png")}
          onClick={goToCard}
        />
        <Button
          style={{ marginTop: 30, backgroundColor: theme.colors.success }}
          onPress={() => navigate("New Research")}
          mode="contained"
        >
          NOVA PESQUISA
        </Button>
      </Container>
    </ScrollView>
  );
};

export default HomePage;
