import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';

const transactions = [
  { id: '1', type: 'Credit', amount: 2000, date: '2025-07-20', description: 'PM Awas Yojana' },
  { id: '2', type: 'Debit', amount: -500, date: '2025-07-18', description: 'Electricity Bill' },
  { id: '3', type: 'Credit', amount: 1500, date: '2025-07-15', description: 'Scholarship' },
  { id: '4', type: 'Debit', amount: -250, date: '2025-07-12', description: 'Mobile Recharge' },
  { id: '5', type: 'Credit', amount: 3000, date: '2025-07-10', description: 'Welfare Grant' },
];

const BankDetailsScreen = () => {
  const totalBalance = transactions.reduce((sum, tx) => sum + tx.amount, 0);

  return (
    <ScrollView style={styles.container}>
      {/* Bank Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://www.ux4g.gov.in/assets/img/logos-page/Emblem_of_India%202.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Balance Summary */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₹{totalBalance.toLocaleString()}</Text>
      </View>

      {/* Account Details */}
      <Text style={styles.header}>Bank Account Details</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Account Holder:</Text>
        <Text style={styles.value}>Aayush Suwalka</Text>

        <Text style={styles.label}>Account Number:</Text>
        <Text style={styles.value}>XXXX XXXX 1234</Text>

        <Text style={styles.label}>Bank Name:</Text>
        <Text style={styles.value}>State Bank of India</Text>

        <Text style={styles.label}>IFSC Code:</Text>
        <Text style={styles.value}>SBIN0001234</Text>
      </View>

      {/* Transactions */}
      <Text style={styles.header}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={[styles.amount, { color: item.amount > 0 ? 'green' : 'red' }]}>
              ₹{item.amount}
            </Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default BankDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  logo: {
    height: 70,
    width: 70,
  },
  balanceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#666',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 14,
    color: '#222',
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#222',
  },
  transaction: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  date: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
});
