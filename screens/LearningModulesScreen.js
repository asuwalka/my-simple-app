// screens/LearningModulesScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const learningModules = [
  {
    id: '1',
    title: 'How to Apply for Government Schemes',
    url: 'https://www.youtube.com/watch?v=2VPdhMFq1XA&pp=ygUzSG93IHRvIEFwcGx5IGZvciBHb3Zlcm5tZW50IFNjaGVtZXMgT25saW5lIGluIEluZGlh',
    thumbnail: 'https://img.youtube.com/vi/2VPdhMFq1XA/hqdefault.jpg',
  },
  {
    id: '2',
    title: 'Understanding Ration Card Benefits',
    url: 'https://www.youtube.com/watch?v=le4jV2sv5PU&pp=ygUoR292ZXJubWVudCBCZW5lZml0cyBmb3IgV29tZW4gJiBDaGlsZHJlbg%3D%3D',
    thumbnail: 'https://img.youtube.com/vi/le4jV2sv5PU/hqdefault.jpg',
  },
  {
    id: '3',
    title: 'Free Education for Girls',
    url: 'https://www.youtube.com/watch?v=T3sLCPipbVI&pp=ygUwZWR1Y2F0aW9uIHNjaGVtZXMgZXhwbGFpbmVkIGJ5IGluZGlhbiBnb3Zlcm5tZW50',
    thumbnail: 'https://img.youtube.com/vi/T3sLCPipbVI/hqdefault.jpg',
  },
];

const LearningModulesScreen = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item.url)} activeOpacity={0.8}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Ionicons name="arrow-forward-circle" size={24} color="#007AFF" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎓 Learning Modules</Text>
      <FlatList
        data={learningModules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default LearningModulesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  thumbnail: {
    height: 180,
    width: '100%',
  },
  cardContent: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flexShrink: 1,
    marginRight: 8,
  },
});
