import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Test from '~/screens/Test';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Victor Batalha</Text>
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
