import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

const WalletScreen = () => {
  const balance = '$45.20';
  const handleAddMoney = () => {
    // Placeholder action – in real app would open payment flow
    alert('Add Money pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Balance</Text>
      <Text style={styles.balance}>{balance}</Text>
      <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        <Text style={styles.buttonText}>Add Money</Text>
      </TouchableOpacity>
      {/* Transaction list placeholder */}
      <Text style={styles.subTitle}>Recent Transactions</Text>
      <Text style={styles.placeholder}>No transactions yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.secondary, marginBottom: 8 },
  balance: { fontSize: 32, fontWeight: '600', color: colors.primary, marginBottom: 20 },
  button: { backgroundColor: colors.primary, paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: '600' },
  subTitle: { fontSize: 18, fontWeight: 'bold', color: colors.secondary, marginTop: 20 },
  placeholder: { fontSize: 14, color: colors.textLight, marginTop: 8 },
});

export default WalletScreen;
