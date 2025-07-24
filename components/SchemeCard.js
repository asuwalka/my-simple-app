import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SchemeCard({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.schemeTitle}>{title}</Text>
      <Text style={styles.schemeDesc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  schemeTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  schemeDesc: { fontSize: 14, color: '#333' },
});
