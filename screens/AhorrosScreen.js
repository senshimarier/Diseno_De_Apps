import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AhorrosScreen({ navigation }) {
  const [ahorro, setAhorro] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ahorro: ${ahorro}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Ahorrar $10" onPress={() => setAhorro(ahorro + 10)} color="#640D5F" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={() => setAhorro(0)} color="#640D5F" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} color="#640D5F" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC87C5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Espacio entre botones
    width: 200,
  },
});
