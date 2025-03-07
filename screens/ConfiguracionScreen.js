import React from 'react';
import { View, Button, Alert, StyleSheet, Text } from 'react-native';

export default function ConfiguracionScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Configuración</Text>

      <View style={styles.buttonContainer}>
        <Button title="Cambiar Tema" onPress={() => Alert.alert('Tema cambiado')} color="#433878" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cambiar Idioma" onPress={() => Alert.alert('Idioma cambiado')} color="#433878" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} color="#433878" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  buttonContainer: {
    marginVertical: 10,
    width: 200,
  },
});