import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.ebayimg.com/images/g/JHIAAOSwnZJfY7BW/s-l1600.png' }} style={styles.image} />
      <Text style={styles.title}>Usuario: Fer</Text>
      <Text>Correo: Fer@gmail.com</Text>

      <View style={styles.buttonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} color="purple" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0AED0',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: 200,
  },
});
