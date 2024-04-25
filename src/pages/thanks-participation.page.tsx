import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { Container } from "../components/ui/Container"
import { useNavigation } from "@react-navigation/native";

const ThanksParticipationPage = () => {
    const { navigate } = useNavigation();
    
    setTimeout(() => {
        navigate("Collect")
    }, 3000)

    return (
        <Container>
            <Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
            <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
  })

export default ThanksParticipationPage