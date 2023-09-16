import { useState } from 'react';
import { Button, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Forms = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [inputValid, setInputValid] = useState(true);
  const [inputValidSenha, setInputValidSenha] = useState(true);

  const onChangeEmail = (value) => {
    setInputValid(true);
    setEmail(value);
  };

  const onChangeSenha = (value) => {
    setInputValidSenha(true);
    setNumber(value);
  };

  const onPressButton = () => {
    if (email.trim() === '' || number.trim() === '') {
      setInputValid(false);
      setInputValidSenha(false);
      return;
    }

    if (email.length < 10) {
      setInputValid(false);
      return;
    }

    if (number.length < 8) {
      setInputValidSenha(false);
      return;
    }
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.cards}>
        <TextInput
          style={styles.text}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Digite Email"
        />
        {!inputValid ? <Text>Email deve conter pelo menos 10 caracteres</Text> : null}
        <TextInput
          style={styles.text}
          onChangeText={onChangeSenha}
          value={number}
          secureTextEntry={true}
          placeholder="Senha"
        />
        {!inputValidSenha ? <Text>Senha deve conter pelo menos 8 caracteres</Text> : null}
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardText: {
    padding: 12,
    backgroundColor: '#F5FFFA',
    margin: 8,
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'aqua',
    padding: 10,
    marginTop: 12,
  },
  cards: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 8,
    padding: 2,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
});

export default Forms;