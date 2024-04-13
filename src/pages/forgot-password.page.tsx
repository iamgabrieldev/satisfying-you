
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultButton } from '../components/forms/DefaultButton';
import DefaultInput from '../components/forms/DefaultInput';
import { useNavigation } from '@react-navigation/native';

  
function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const navigation = useNavigation(); 


  const handleEmailChange = (text: string) => {
    setEmail(text);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setEmailError(regex.test(text) ? "" : "E-mail parece ser inválido")
  }

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <DefaultInput onChangeText={handleEmailChange} placeholder={'Digite seu email'} title={'E-mail'} size={300} error={emailError} height={0} onFocus={function (): void {
          } } />

      <DefaultButton title={'Recuperar '} color={'#37BD6D'} width={300} disabled={Boolean(emailError) || email == ""} onPress={goToLogin} />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  input: {
    borderWidth: 1,
    borderRadius: 20,
    padding: '2%',
    width: 300,
    color: 'white',
    borderColor: 'white'
  },

  bottomContainer: {
    gap: 10,
    marginTop: 50
  }
});

export default ForgotPasswordPage;