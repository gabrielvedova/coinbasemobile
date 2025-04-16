import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ToastAndroid,
} from 'react-native';

  
export default function AdicionarValor() {
  const [valor, setValor] = useState('');

  const handleChange = (text) => {
    const clean = text.replace(/[^0-9]/g, '');
    setValor(clean);
  };

  const handleEnviar = () => {
    if (valor === '') {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Por favor, insira um valor!', ToastAndroid.SHORT);
      } else {
        console.log('Por favor, insira um valor!');
      }
      return;
    }
    if (Platform.OS === 'android') {
      ToastAndroid.show('Valor enviado com sucesso!', ToastAndroid.SHORT);
    } else {
      console.log('Valor enviado com sucesso!');
    }

    setValor('')
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.titulo}>Adicionar valor</Text>


          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={valor}
              onChangeText={handleChange}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#ccc"
            />
            <Text style={styles.moeda}>R$</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
            <Text style={styles.botaoTexto}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardContainer: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 32,
    textAlign: 'right',
    paddingRight: 10,
    width: 100,
    color: '#000',
  },
  moeda: {
    fontSize: 32,
    color: '#000',
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
  botaoVoltar: {
    marginBottom: 20,
  },
});