import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>+</Text>
      <Image source={require('./imagens/Ram1.png')} style={{ position: 'absolute', // Posicionamento absoluto
    justifyContent: 'center',
    alignItems: 'center',
    top: 130, // 20 pixels da borda superior
    width: 212,
    height: 70, }} />
    <Image source={require('./imagens/retangulo.png')} style={{ position: 'absolute', // Posicionamento absoluto
    justifyContent: 'center',
    alignItems: 'center',  
    top: 50, // 20 pixels da borda superior
    width: 300,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 50, }} />
    <Image source={require('./imagens/logo.png')} style={{ position: 'absolute', // Posicionamento absoluto
    justifyContent: 'center',
    alignItems: 'center',
    top: 50, // 20 pixels da borda superior
    width: 46,
    height: 49, }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
