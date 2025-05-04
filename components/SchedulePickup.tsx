import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Calendar, Clock, Truck } from 'lucide-react-native';
import { useState } from 'react';

export default function SchedulePickup() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00 AM');

  const handleSchedule = () => {
    alert('Pickup scheduled successfully!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateTimeContainer}>
        <TouchableOpacity 
          style={styles.dateButton}
          onPress={() => alert('Date picker coming soon!')}
        >
          <Calendar size={24} color="#10b981" />
          <Text style={styles.dateTimeText}>
            {selectedDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.timeButton}
          onPress={() => alert('Time picker coming soon!')}
        >
          <Clock size={24} color="#10b981" />
          <Text style={styles.dateTimeText}>{selectedTime}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.scheduleButton}
        onPress={handleSchedule}
      >
        <Truck size={24} color="#ffffff" />
        <Text style={styles.scheduleButtonText}>Schedule Pickup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  timeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  dateTimeText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#111827',
  },
  scheduleButton: {
    backgroundColor: '#10b981',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  scheduleButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});