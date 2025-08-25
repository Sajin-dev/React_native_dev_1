import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Button, View } from 'react-native';
import { increment, decrement } from './counter';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={() => setCount((prev) => increment(prev))} />
        <Button title="Decrement" onPress={() => setCount((prev) => decrement(prev))} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

export default App;

