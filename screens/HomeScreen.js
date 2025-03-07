import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>

      <View style={styles.buttonContainer}>
        <Button title="Ir a Ahorros" onPress={() => navigation.navigate('Ahorros')} color="#441752" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Ir a Perfil" onPress={() => navigation.navigate('Perfil')} color="#441752" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Ir a Configuración" onPress={() => navigation.navigate('Configuración')} color="#441752" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#756AB6',

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


