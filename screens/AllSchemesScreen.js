// screens/AllSchemesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AllSchemesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Schemes</Text>
      <Text style={styles.item}>• Scheme A - Healthcare Support</Text>
      <Text style={styles.item}>• Scheme B - Rural Education</Text>
      <Text style={styles.item}>• Scheme C - Employment Aid</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    fontSize: 18,
    marginVertical: 6,
  },
});
