import { View, Text, StyleSheet, ScrollView } from 'react-native';
import WasteAnalytics from '../../components/WasteAnalytics';
import SchedulePickup from '../../components/SchedulePickup';

const mockData = [
  {
    id: '1',
    type: 'Organic',
    quantity: '2.5',
    date: '2024-02-20',
  },
  {
    id: '2',
    type: 'Plastic',
    quantity: '1.8',
    date: '2024-02-19',
  },
  {
    id: '3',
    type: 'Paper',
    quantity: '3.2',
    date: '2024-02-18',
  },
  {
    id: '4',
    type: 'Metal',
    quantity: '1.5',
    date: '2024-02-17',
  },
  {
    id: '5',
    type: 'Glass',
    quantity: '2.0',
    date: '2024-02-16',
  },
];

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Waste Analytics</Text>
        <Text style={styles.headerSubtitle}>Track your recycling journey</Text>
      </View>

      <WasteAnalytics />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Schedule Pickup</Text>
        <SchedulePickup />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {mockData.map((item) => (
          <View key={item.id} style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <Text style={styles.wasteType}>{item.type}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.activityBody}>
              <Text style={styles.quantity}>{item.quantity} kg</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  wasteType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
  },
  activityBody: {
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingTop: 8,
  },
  quantity: {
    fontSize: 20,
    fontWeight: '700',
    color: '#10b981',
  },
});