/**
 * Assignment 3: Sigma Dog Care System
 *
 * This application is a dog care service calculator that allows users to:
 * - Select a dog and number of hours for care
 * - Choose additional services and quantities
 * - Calculate the total cost based on selections
 */
import React, { useState } from 'react'; // Core React library and useState hook for state management
import {
  SafeAreaView,  // Renders content within the safe area boundaries of a device
  StyleSheet,    // Provides a way to create styles
  View,          // Container component for layout
  Text,          // Text display component
  Image,         // Component for displaying images
  ScrollView,    // Scrollable container
  TouchableOpacity,  // Touchable component with opacity feedback
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // External component for dropdown selection

export default function App() {
  /**
   * State Management Section
   * Using React's useState hook to track user selections and calculated values
   * Each state variable represents a piece of data that can change during app usage
   */
  const [selectedDog, setSelectedDog] = useState(''); // Stores selected dog with pricing info
  const [selectedDogHours, setSelectedDogHours] = useState(''); // Stores number of hours
  const [selectedService, setSelectedService] = useState(''); // Stores selected service with pricing
  const [selectedServiceQuantity, setSelectedServiceQuantity] = useState(''); // Stores service quantity
  const [totalCost, setTotalCost] = useState('$0'); // Stores the calculated total cost

  /**
   * Utility Functions Section
   * Helper functions for data processing and calculations
   */

  /**
   * extractPrice: Parses a string to extract numeric price value
   * Example: "Finn-$15" returns 15
   * {string} item - The string containing price information
   * {number} - The extracted price as a number or 0 if not found
   */

  const extractPrice = (item) => {
    if (!item) {return 0;} // Handle null/empty values
    const priceMatch = item.match(/\$(\d+)/); // Use regex to extract price
    return priceMatch ? parseInt(priceMatch[1], 10) : 0; // Convert to integer or return 0
  };

  /**
   * safeParseInt: Safely converts a string to integer
   * Handles potential NaN values by returning 0
   * {string} value - The string to convert
   * {number} - Integer value or 0 if invalid
   */

  const safeParseInt = (value) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? 0 : parsed; // Return 0 for invalid inputs
  };

  /**
   * calculateTotal: Computes the total cost based on selections
   * Formula: (dog hourly rate × hours) + (service cost × quantity)
   * Updates the totalCost state when called
   */

  const calculateTotal = () => {
    const dogCost = extractPrice(selectedDog) * safeParseInt(selectedDogHours);
    const serviceCost = extractPrice(selectedService) * safeParseInt(selectedServiceQuantity);
    const total = dogCost + serviceCost;
    setTotalCost(`$${total}`); // Update state with formatted total
  };

  /**
   * UI Rendering Section
   * The JSX structure defines the app layout and user interface components
   */
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView allows content to be scrollable when it exceeds screen height */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.heading}>Sigma Dog Care System</Text>
        </View>

        {/* Dog Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80' }}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>

        {/* Dog Selection Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Select Your Dog</Text>
          <View style={styles.row2}>
            {/* Dog Picker - Uses external Picker component for dropdown selection */}
            <Picker
              style={styles.picker1}
              selectedValue={selectedDog}
              onValueChange={(itemValue) => setSelectedDog(itemValue)}>
              <Picker.Item label="Select A Dog" value="" />
              <Picker.Item label="Finn - $15/hr" value="Finn-$15" />
              <Picker.Item label="Bluey - $18/hr" value="Bluey-$18" />
              <Picker.Item label="Max - $20/hr" value="Max-$20" />
              <Picker.Item label="Charlie - $18/hr" value="Charlie-$18" />
              <Picker.Item label="Bella - $15/hr" value="Bella-$15" />
            </Picker>

            {/* Hours Picker - For selecting duration */}
            <Picker
              style={styles.picker2}
              selectedValue={selectedDogHours}
              onValueChange={(itemValue) => setSelectedDogHours(itemValue)}>
              <Picker.Item label="Hours" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
        </View>

        {/* Services Selection Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Select Services</Text>
          <View style={styles.row2}>
            {/* Service Picker */}
            <Picker
              style={styles.picker1}
              selectedValue={selectedService}
              onValueChange={(itemValue) => setSelectedService(itemValue)}>
              <Picker.Item label="Select A Service" value="" />
              <Picker.Item label="Grooming - $20" value="Grooming-$20" />
              <Picker.Item label="Walking - $10" value="Walking-$10" />
              <Picker.Item label="Feeding - $15" value="Feeding-$15" />
              <Picker.Item label="Training - $25" value="Training-$25" />
              <Picker.Item label="Bathing - $10" value="Bathing-$10" />
            </Picker>

            {/* Quantity Picker */}
            <Picker
              style={styles.picker2}
              selectedValue={selectedServiceQuantity}
              onValueChange={(itemValue) => setSelectedServiceQuantity(itemValue)}>
              <Picker.Item label="Qty" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
        </View>

        {/* Cost Display Section */}
        <View style={styles.costSection}>
          <Text style={styles.costLabel}>Total Cost:</Text>
          <Text style={styles.totalText}>{totalCost}</Text>
        </View>

        {/* Calculate Button - Uses TouchableOpacity for better user feedback */}
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={calculateTotal} // Calls calculate function on press
        >
          <Text style={styles.buttonText}>CALCULATE</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>App developed by Pouya, Riley, James</Text>
      </View>
    </SafeAreaView>
  );
}

/**
 * StyleSheet Section
 * React Native uses StyleSheet for optimized, type-checked styling
 * Styles are separated from components for better organization
 *
 * Key styling approaches demonstrated:
 * - Flexbox layout
 * - Shadow styling for elevation effects
 * - Color theming
 * - Responsive sizing
 * - Border styling
 */
const styles = StyleSheet.create({
  // Container styles for the main app layout
  container: {
    flex: 1, // Takes up entire screen
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingBottom: 60, // Space for footer
  },
  // Header styling with shadow effects and rounded corners
  header: {
    backgroundColor: '#4a6fa5', // Brand color
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
    // Cross-platform shadow implementation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subheading: {
    fontSize: 16,
    color: '#e6e6e6',
    marginTop: 5,
  },
  // Image container with shadow effect
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes image circular
    borderWidth: 3,
    borderColor: '#4a6fa5',
  },
  // Section container styles
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a6fa5',
    marginBottom: 10,
    paddingLeft: 5,
  },
  // Row layout for picker controls
  row2:{
    flexDirection: 'row', // Horizontal layout
    marginBottom: 15,
  },
  // Picker styles with consistent shadowing
  picker1:{
    flex: 2, // Takes up 2/3 of the row
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  picker2:{
    flex: 1, // Takes up 1/3 of the row
    backgroundColor: '#ffffff',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#d1d9e6',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  // Cost display section
  costSection: {
    alignItems: 'center',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  costLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a6fa5',
    marginRight: 10,
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Green for money
  },
  // Button styling with press effect
  calculateButton: {
    backgroundColor: '#4a6fa5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Fixed footer at bottom of screen
  footer: {
    position: 'absolute', // Fixed positioning
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#4a6fa5',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
});


