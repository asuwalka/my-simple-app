import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const faqs = [
  {
    question: 'What is this app for?',
    answer: 'This app helps users discover and apply for Indian government schemes easily.',
  },
  {
    question: 'How can I apply for a scheme?',
    answer: 'Go to the "Apply for Schemes" section, choose a scheme, and follow the instructions.',
  },
  {
    question: 'Are these schemes official?',
    answer: 'Yes, the schemes listed are from official government sources.',
  },
  {
    question: 'Is there any cost to use this app?',
    answer: 'No, it is completely free to use.',
  },
  {
    question: 'How often is the information updated?',
    answer: 'We regularly update the scheme and news sections to reflect current data.',
  },
];

const FAQScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>Q. {faq.question}</Text>
          <Text style={styles.answer}>A. {faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FAQScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  answer: {
    fontSize: 14,
    color: '#444',
  },
});
