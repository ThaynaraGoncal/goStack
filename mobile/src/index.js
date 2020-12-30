import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <View >
          <Text style={styles.title}>Hello GoStack</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
})