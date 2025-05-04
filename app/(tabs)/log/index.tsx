import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { router } from 'expo-router';
import { Camera } from 'lucide-react-native';
import WasteTypeSelector from '../../../components/WasteTypeSelector';
import QuantityInput from '../../../components/QuantityInput';

export default function LogWasteScreen() {
  const [selectedType, setSelectedType] = useState(null);
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    if (!selectedType || !quantity) {
      alert('Please fill in all required fields');
      return;
    }

    // TODO: Implement actual submission logic
    alert('Waste log submitted successfully!');
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Select Waste Type</Text>
        <WasteTypeSelector
          selected={selectedType}
          onSelect={setSelectedType}
        />

        <QuantityInput
          value={quantity}
          onChangeText={setQuantity}
        />

        <View style={styles.photoSection}>
          <Text style={styles.sectionTitle}>Add Photo (Optional)</Text>
          <TouchableOpacity 
            style={styles.photoButton}
            onPress={() => alert('Camera feature coming soon!')}
          >
            <Camera size={24} color="#6b7280" />
            <Text style={styles.photoButtonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.submitButton,
            (!selectedType || !quantity) && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={!selectedType || !quantity}
        >
          <Text style={styles.submitButtonText}>Submit Waste Log</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  photoSection: {
    marginTop: 24,
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#e5e5e5',
  },
  photoButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#6b7280',
  },
  submitButton: {
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: Platform.OS === 'ios' ? 32 : 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});