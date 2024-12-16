import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './../styles';
export default function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feedback</Text>
      <Text style={styles.description}>
        Share your thoughts and help us improve your experience!
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder="Your feedback here..."
        multiline
        numberOfLines={6}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}