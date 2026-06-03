import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

const TripCompletedScreen = ({ navigation }) => {
  const fare = '$14.20';
  const distance = '5.2 km';
  const duration = '12 min';

  const handleDone = () => navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Completed</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Fare</Text>
        <Text style={styles.value}>{fare}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Distance</Text>
        <Text style={styles.value}>{distance}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Duration</Text>
        <Text style={styles.value}>{duration}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDone}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 30,
  },
  infoBox: {
    width: '100%',
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: { fontSize: 16, color: colors.textLight },
  value: { fontSize: 16, fontWeight: '600', color: colors.primary },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: '600' },
});

export default TripCompletedScreen;
