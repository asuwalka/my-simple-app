import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, KeyboardAvoidingView, Platform, Alert, ScrollView, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SchemeFormScreen = ({ route, navigation }) => {
  const { scheme } = route.params;
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (!fullName || !mobile || !address) {
      Alert.alert('Missing Info', 'Please fill out all fields.');
      return;
    }

    Alert.alert(
      'Application Submitted',
      `You have applied for "${scheme.title}" successfully.`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{
              uri: 'https://www.ux4g.gov.in/assets/img/logos-page/Emblem_of_India%202.png',
        }}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.card}>
          <View style={styles.schemeHeader}>
            <Text style={styles.schemeIcon}>{scheme.icon}</Text>
            <Text style={styles.title}>{scheme.title}</Text>
          </View>

          <Text style={styles.description}>{scheme.description}</Text>

          <View style={styles.formGroup}>
            <Ionicons name="person-outline" size={18} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={styles.formGroup}>
            <Ionicons name="call-outline" size={18} color="#666" />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
              maxLength={10}
            />
          </View>

          <View style={styles.formGroup}>
            <Ionicons name="location-outline" size={18} color="#666" />
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Address"
              multiline
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Ionicons name="checkmark-circle-outline" size={22} color="white" />
            <Text style={styles.buttonText}>  Submit Application</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  logo: {
    width: 120,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  schemeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'nowrap',
  },
  schemeIcon: {
    fontSize: 20,
    marginRight: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    flexShrink: 1,
    color: '#333',
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SchemeFormScreen;
