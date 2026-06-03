import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, Polyline } from 'react-native-maps';
import { colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

const LiveTrackingScreen = ({ navigation }) => {
  // Mock driver location moving from start to destination
  const driverLocation = { latitude: 37.78875, longitude: -122.4334 };
  const destination = { latitude: 37.78975, longitude: -122.4254 };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: (driverLocation.latitude + destination.latitude) / 2,
          longitude: (driverLocation.longitude + destination.longitude) / 2,
          latitudeDelta: Math.abs(driverLocation.latitude - destination.latitude) + 0.01,
          longitudeDelta: Math.abs(driverLocation.longitude - destination.longitude) + 0.01,
        }}>
        <Marker coordinate={driverLocation} title="Driver" pinColor={colors.primary} />
        <Marker coordinate={destination} title="Destination" pinColor={colors.secondary} />
        <Polyline
          coordinates={[driverLocation, destination]}
          strokeColor={colors.primary}
          strokeWidth={3}
        />
      </MapView>
      <View style={styles.infoPanel}>
        <Text style={styles.eta}>ETA: 5 mins</Text>
        <Text style={styles.sos}>Press SOS for emergency</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  map: { ...StyleSheet.absoluteFillObject, height: height * 0.65 },
  infoPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  eta: { fontSize: 18, fontWeight: '600', color: colors.primary },
  sos: { fontSize: 14, color: colors.textLight, marginTop: 8 },
});

export default LiveTrackingScreen;
