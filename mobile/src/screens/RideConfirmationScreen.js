import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const driver = {
  name: 'Alex Johnson',
  vehicle: 'Sedan',
  vehicleNumber: 'AB-1234',
  photo: 'https://i.pravatar.cc/150?img=3', // placeholder avatar image
  eta: '3 min',
};

const RideConfirmationScreen = ({ navigation }) => {
  const handleConfirm = () => {
    navigation.navigate('LiveTracking');
  };

  const handleCancel = () => {
    // Return to home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.driverCard}>
        <Image source={{ uri: driver.photo }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{driver.name}</Text>
          <Text style={styles.detail}>Vehicle: {driver.vehicle}</Text>
          <Text style={styles.detail}>Plate: {driver.vehicleNumber}</Text>
        </View>
        <Ionicons name="checkmark-circle" size={32} color={colors.primary} />
      </View>
      <View style={styles.etaContainer}>
        <Text style={styles.etaLabel}>Estimated Arrival</Text>
        <Text style={styles.etaValue}>{driver.eta}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
          <Text style={styles.btnText}>Confirm Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  detail: {
    fontSize: 14,
    color: colors.textLight,
  },
  etaContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  etaLabel: {
    fontSize: 16,
    color: colors.textLight,
  },
  etaValue: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 5,
  },
  actions: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: colors.textLight,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RideConfirmationScreen;
