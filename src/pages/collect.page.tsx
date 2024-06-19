import { Text } from "react-native-paper";
import { Container } from "../components/ui/Container";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FC } from "react";
import { CollectScreenProps } from "../navigation/navigation";

const CollectPage: FC<CollectScreenProps> = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <Container>
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigate("Thanks Participation")}>
          <Icon name="sentiment-very-dissatisfied" size={60} color="#FF0000" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Thanks Participation")}>
          <Icon name="sentiment-dissatisfied" size={60} color="#FF5733" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Thanks Participation")}>
          <Icon name="sentiment-neutral" size={60} color="#FFC300" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Thanks Participation")}>
          <Icon name="sentiment-satisfied" size={60} color="#33FF57" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Thanks Participation")}>
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
