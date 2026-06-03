import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from '../theme/colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>TrustDrive</Text>
        <Text style={styles.subtitle}>Your Journey, Our Priority</Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('OtpVerification')}
        >
          <Text style={styles.primaryButtonText}>Continue with Phone Number</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <View style={styles.authLinks}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.divider}>|</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    marginTop: 10,
  },
  bottomSection: {
    padding: 24,
    paddingBottom: 40,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginBottom: 24,
  },
  secondaryButtonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  authLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    marginHorizontal: 16,
    color: colors.textLight,
  }
});

export default WelcomeScreen;
