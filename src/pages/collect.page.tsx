import { Text } from "react-native-paper";
import { Container } from "../components/ui/Container";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FC } from "react";
import { CollectScreenProps } from "../navigation/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const CollectPage: FC<CollectScreenProps> = ({ route, navigation }) => {
  const { navigate } = navigation;
  const researchId = route.params?.id;

  console.log("ID da pesquisa:", researchId)
  const pesquisaRef = doc(db, 'pesquisas', researchId)

  const updateVote = async (voteType: any) => {
    try {
      const docPesquisa = await getDoc(pesquisaRef)

      if (docPesquisa.exists()) {
        const currentVotes = docPesquisa.data().votos
        currentVotes[voteType] += 1;

        await updateDoc(pesquisaRef, { votos: currentVotes })

        console.log(`Voto ${voteType} computado com sucesso!`)
        navigate("Thanks Participation")
      } else {
        console.log("Documento não encontrado!")
      }
    } catch (error) {
      console.log("Erro ao computar o voto:", error)
    }
  };

  return (
    <Container>
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => updateVote('pessimo')}>
          <Icon name="sentiment-very-dissatisfied" size={60} color="#FF0000" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('ruim')}>
          <Icon name="sentiment-dissatisfied" size={60} color="#FF5733" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('neutro')}>
          <Icon name="sentiment-neutral" size={60} color="#FFC300" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('bom')}>
          <Icon name="sentiment-satisfied" size={60} color="#33FF57" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('excelente')}>
          <Icon name="sentiment-very-satisfied" size={60} color="#00FF00" />
          <Text style={styles.iconText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%",
  },
  iconText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "AveriaLibre-Regular",
  },
  selectedFeedback: {
    fontSize: 18,
    color: "#fff",
    marginTop: 20,
  },
});

export default CollectPage;
