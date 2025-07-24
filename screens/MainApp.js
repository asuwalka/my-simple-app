import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainApp({ route }) {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {userName}!</Text>
      {/* Your existing buttons and features go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcome: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
});
