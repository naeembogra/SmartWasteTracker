import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Scale } from 'lucide-react-native';

export default function QuantityInput({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quantity (kg)</Text>
      <View style={styles.inputContainer}>
        <Scale size={20} color="#6b7280" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType="decimal-pad"
          placeholder="Enter weight in kg"
          placeholderTextColor="#9ca3af"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
});