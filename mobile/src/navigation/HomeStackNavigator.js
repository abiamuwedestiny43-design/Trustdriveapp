import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RideBookingScreen from '../screens/RideBookingScreen';
import RideConfirmationScreen from '../screens/RideConfirmationScreen';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';
import TripCompletedScreen from '../screens/TripCompletedScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RideBooking" component={RideBookingScreen} />
      <Stack.Screen name="RideConfirmation" component={RideConfirmationScreen} />
      <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
      <Stack.Screen name="TripCompleted" component={TripCompletedScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
