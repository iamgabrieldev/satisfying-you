import { useAppTheme } from "../theme/defaultTheme";
import { Button, Searchbar } from "react-native-paper";
import { Container } from "../components/ui/Container";
import { CardAction } from "../components/cards/CardsAction";
import { ScrollView } from "react-native-gesture-handler";
import { FC, useEffect, useState } from "react";
import { HomeScreenProps } from "../navigation/navigation";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

const HomePage: FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useAppTheme();
  const { navigate } = navigation;
  const [searchQuery, setSearchQuery] = useState("");

  const [listaPesquisas, setListaPesquisas] = useState([])

  const pesquisaCollection = collection(db, 'pesquisas')

  useEffect(() => {
    const q = query(pesquisaCollection, orderBy('nome', 'asc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const pesquisas: any = []
        snapshot.forEach((doc) => {
            pesquisas.push({
                id: doc.id,
                ...doc.data()
            })
        })
        setListaPesquisas(pesquisas)
    })
}, [])

  const goToCard = (id: string) => {
    navigate("Research Actions", {
      research: { id: id, date: "21/04/2023", imgSourcePath: "", title: "Tile" },
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

        {listaPesquisas.map((pesquisa: any) => (
          <CardAction 
            key={pesquisa.id}
            title={pesquisa.nome}
            date={pesquisa.data}
            imgSource={{ uri: pesquisa.imageUrl }}
            onClick={() => goToCard(pesquisa.id)}
          />
        ))}
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
