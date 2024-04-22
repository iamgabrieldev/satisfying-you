import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultSquareDiv } from '../components/defaultSquareDiv';

type AcoesPesquisaProps = {
  navigation: any; // Ou substitua por um tipo de navegação específico se estiver usando React Navigation
};

const SearchActions: React.FC<AcoesPesquisaProps> = (props) => {
  const goToModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa');
  };

  const goToColeta = () => {
    props.navigation.navigate('Coleta');
  };

  const goToRelatorio = () => {
    props.navigation.navigate('Relatorio');
  };

  return (
    <View style={styles.container}>
      <View style={styles.squaresContainer}>
        <DefaultSquareDiv
          style={styles.div}
          textColor="#FFFFFF"
          text="Modificar"
          imageSource={require('../assets/images/modificarImg.png')}
          onPress={goToModificarPesquisa}
        />
        <DefaultSquareDiv
          style={styles.div}
          textColor="#FFFFFF"
          text="Coletar dados"
          imageSource={require('../assets/images/ColetarDadosImg.png')}
          onPress={goToColeta}
        />
        <DefaultSquareDiv
          style={styles.div}
          textColor="#FFFFFF"
          text="Relatório"
          imageSource={require('../assets/images/RelatorioImg.png')}
          onPress={goToRelatorio}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  squaresContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  div: {
    backgroundColor: '#312464',
    width: 200,
    height: 200,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchActions;
