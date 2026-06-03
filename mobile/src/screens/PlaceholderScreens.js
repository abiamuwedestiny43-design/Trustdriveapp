import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const PlaceholderScreen = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
  }
});

export const ActivityScreen = () => <PlaceholderScreen title="Activity" />;
export const WalletScreen = () => <PlaceholderScreen title="Wallet" />;
export const SupportScreen = () => <PlaceholderScreen title="Support" />;
export const ProfileScreen = () => <PlaceholderScreen title="Profile" />;
