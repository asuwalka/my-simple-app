import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const allSchemes = [
  'Pradhan Mantri Awas Yojana',
  'Ayushman Bharat Yojana',
  'PM Kisan Samman Nidhi',
  'Startup India Scheme',
  'Make in India',
  'Digital India',
  'Pradhan Mantri Jan Dhan Yojana',
  'Swachh Bharat Abhiyan',
  'Ujjwala Yojana',
  'Skill India Mission',
  'Stand Up India',
  'MUDRA Loan Scheme',
  'National Social Assistance Scheme',
  'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
  'Beti Bachao Beti Padhao'
];

const ApplySchemesScreen = () => {
  const [schemeName, setSchemeName] = useState('');
  const [filteredSchemes, setFilteredSchemes] = useState([]);

  const handleSchemeChange = (text) => {
    setSchemeName(text);
    if (text.length > 0) {
      const filtered = allSchemes.filter((scheme) =>
        scheme.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredSchemes(filtered);
    } else {
      setFilteredSchemes([]);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Application Submitted', 'Your scheme application has been submitted successfully.');
  };

  const handleSuggestionSelect = (suggestion) => {
    setSchemeName(suggestion);
    setFilteredSchemes([]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Apply for a Government Scheme</Text>

        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Aadhaar Number" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Address" multiline numberOfLines={3} />

        <View style={{ marginBottom: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="Scheme Name"
            value={schemeName}
            onChangeText={handleSchemeChange}
          />
          {filteredSchemes.length > 0 && (
            <View style={styles.suggestionBox}>
              {filteredSchemes.map((item) => (
                <TouchableOpacity key={item} onPress={() => handleSuggestionSelect(item)}>
                  <Text style={styles.suggestion}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Application</Text>
          <Ionicons name="checkmark-circle" size={20} color="white" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f4f8',
    flexGrow: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  suggestionBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 5,
    maxHeight: 150,
  },
  suggestion: {
    padding: 10,
    fontSize: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

export default ApplySchemesScreen;