import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Modal, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schemesData = [
  {
    id: '1',
    title: 'Pradhan Mantri Jan Dhan Yojana',
    description: 'Financial inclusion for all households.',
    category: 'Finance',
    icon: '💰',
    applyUrl: 'https://pmjdy.gov.in/',
  },
  {
    id: '2',
    title: 'Ayushman Bharat Yojana',
    description: 'Health insurance for poor families.',
    category: 'Health',
    icon: '🏥',
    applyUrl: 'https://pmjay.gov.in/',
  },
  {
    id: '3',
    title: 'PM Kisan Samman Nidhi',
    description: 'Direct income support to farmers.',
    category: 'Agriculture',
    icon: '🌾',
    applyUrl: 'https://pmkisan.gov.in/',
  },
  {
    id: '4',
    title: 'Sukanya Samriddhi Yojana',
    description: 'Savings scheme for girl child.',
    category: 'Women',
    icon: '👧',
    applyUrl: 'https://www.indiapost.gov.in/',
  },
];

export default function DisplaySchemesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSchemes, setFilteredSchemes] = useState(schemesData);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSchemes(schemesData);
    } else {
      setFilteredSchemes(
        schemesData.filter(scheme =>
          scheme.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleApplyPress = (item) => {
    setSelectedScheme(item);
    setModalVisible(true);
  };

  const handleApplyOnline = () => {
    if (selectedScheme?.applyUrl) {
      Linking.openURL(selectedScheme.applyUrl);
    } else {
      Alert.alert("No link available for this scheme");
    }
    setModalVisible(false);
  };

  const handleFillForm = () => {
    setModalVisible(false);
    navigation.navigate('SchemeFormScreen', { scheme: selectedScheme });
  };

  const handleSaveForLater = async () => {
    try {
      const saved = await AsyncStorage.getItem('savedSchemes');
      const savedSchemes = saved ? JSON.parse(saved) : [];
      const updated = [...savedSchemes, selectedScheme];
      await AsyncStorage.setItem('savedSchemes', JSON.stringify(updated));
      Alert.alert("Saved for later!");
    } catch (e) {
      Alert.alert("Error saving scheme");
    }
    setModalVisible(false);
  };

  const renderSchemeCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.icon}>{item.icon}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={() => handleApplyPress(item)}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search Schemes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredSchemes}
        keyExtractor={(item) => item.id}
        renderItem={renderSchemeCard}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Apply Options</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleApplyOnline}>
              <Text style={styles.modalButtonText}>🌐 Apply Online</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleFillForm}>
              <Text style={styles.modalButtonText}>📝 Fill Form in App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleSaveForLater}>
              <Text style={styles.modalButtonText}>💾 Save for Later</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  searchBox: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    fontSize: 28,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  applyButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  applyText: {
    color: '#fff',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalCancel: {
    marginTop: 10,
    color: '#777',
    fontSize: 14,
  },
});
