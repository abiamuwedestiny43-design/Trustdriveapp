import React from 'react';
import { Linking, useNavigation } from 'react-native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const vehicles = [
    { id: 1, type: 'Bike', time: '2 min', price: '$4', icon: 'bicycle' },
    { id: 2, type: 'Auto', time: '3 min', price: '$6', icon: 'car-sport' },
    { id: 3, type: 'Mini', time: '5 min', price: '$12', icon: 'car' },
    { id: 4, type: 'Sedan/SUV', time: '8 min', price: '$18', icon: 'car-outline' },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView 
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Top Floating Section */}
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={24} color={colors.secondary} />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <View style={styles.dot} />
            <Text style={styles.searchText}>Where to?</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Bottom Panel Section */}
      <View style={styles.bottomPanel}>
        <View style={styles.panelHeader}>
          <Text style={styles.panelTitle}>Choose a Ride</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vehicleScroll}>
          {vehicles.map((v) => (
            <TouchableOpacity key={v.id} style={styles.vehicleCard}>
              <View style={styles.vehicleIconContainer}>
                <Ionicons name={v.icon} size={32} color={colors.secondary} />
              </View>
              <Text style={styles.vehicleType}>{v.type}</Text>
              <Text style={styles.vehicleTime}>{v.time}</Text>
              <Text style={styles.vehiclePrice}>{v.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.actionContainer}>
            {/* Login Handler Button */}
            <TouchableOpacity style={styles.loginButton} onPress={() => Linking.openURL('exps://login-handler--supporttrustnij.replit.app')}>
              <Text style={styles.loginButtonText}>Open Login Handler</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.couponButton}>
            <Ionicons name="pricetag-outline" size={20} color={colors.textLight} />
            <Text style={styles.couponText}>Apply Coupon</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('RideBooking')}>
            <Text style={styles.bookButtonText}>Book Ride</Text>
          </TouchableOpacity>
        </View>
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
    height: height * 0.65,
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: colors.textLight,
    fontWeight: '500',
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  panelHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  vehicleScroll: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  vehicleCard: {
    alignItems: 'center',
    marginRight: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 16,
    width: 100,
    backgroundColor: '#FAFAFA',
  },
  vehicleIconContainer: {
    marginBottom: 8,
  },
  vehicleType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  vehicleTime: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  vehiclePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  couponButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  couponText: {
    marginLeft: 8,
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '500',
  },
  bookButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  bookButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default HomeScreen;
