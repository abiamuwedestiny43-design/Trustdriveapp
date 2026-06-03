import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

const RideBookingScreen = ({ navigation }) => {
  const [pickup, setPickup] = React.useState({ latitude: 37.78825, longitude: -122.4324 });
  const [dropoff, setDropoff] = React.useState({ latitude: 37.78925, longitude: -122.4224 });

  const fareEstimate = '$12.50';

  const handleConfirm = () => {
    // placeholder: navigate to a confirmation screen or back to home
    navigation.navigate('RideConfirmation');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: (pickup.latitude + dropoff.latitude) / 2,
          longitude: (pickup.longitude + dropoff.longitude) / 2,
          latitudeDelta: Math.abs(pickup.latitude - dropoff.latitude) + 0.01,
          longitudeDelta: Math.abs(pickup.longitude - dropoff.longitude) + 0.01,
        }}>
        <Marker coordinate={pickup} title="Pickup" />
        <Marker coordinate={dropoff} title="Drop‑off" />
      </MapView>
      <View style={styles.infoPanel}>
        <Text style={styles.title}>Ride Details</Text>
        <Text style={styles.label}>Fare Estimate:</Text>
        <Text style={styles.fare}>{fareEstimate}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Confirm Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.6,
  },
  infoPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: colors.textLight,
  },
  fare: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
    marginVertical: 8,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  confirmText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RideBookingScreen;
