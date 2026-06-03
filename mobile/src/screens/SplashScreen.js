import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading for 2 seconds then navigate to Welcome
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TrustDrive</Text>
      <Text style={styles.tagline}>Ride Safe, Ride Smart</Text>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: '600',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 50,
  }
});

export default SplashScreen;
