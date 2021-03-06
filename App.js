import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './src/components/Logo/index';
import Cadastro from './src/components/Cadastro/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Cadastro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A2D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
