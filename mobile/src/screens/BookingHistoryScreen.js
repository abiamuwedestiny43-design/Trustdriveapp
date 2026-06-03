import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../theme/colors';

const mockTrips = [
  { id: '1', date: '2023-01-12', from: 'Location A', to: 'Location B', fare: '$12.30' },
  { id: '2', date: '2023-02-05', from: 'Location C', to: 'Location D', fare: '$9.80' },
];

const BookingHistoryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Booking History</Text>
    <FlatList
      data={mockTrips}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.date}>{item.date}</Text>
          <Text>{item.from} → {item.to}</Text>
          <Text style={styles.fare}>{item.fare}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.secondary, marginBottom: 12 },
  item: { backgroundColor: colors.white, padding: 12, borderRadius: 8, marginBottom: 10 },
  date: { fontSize: 14, color: colors.textLight },
  fare: { fontSize: 16, fontWeight: '600', color: colors.primary, marginTop: 4 },
});

export default BookingHistoryScreen;
