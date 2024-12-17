import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import styles from './../styles';


const initializeDb = async () => {
  const db = await SQLite.openDatabaseAsync('sorsogonExplorer');
  // Create feedback table if it doesn't exist
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY NOT NULL,
      feedback TEXT NOT NULL
    );
  `);
};

const insertFeedback = async (feedback, callback) => {
  try {
    const db = await SQLite.openDatabaseAsync('sorsogonExplorer');
    const result = await db.runAsync('INSERT INTO feedback (feedback) VALUES (?)', feedback);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  // Initialize database on component mount
  useEffect(() => {
    initializeDb();
  }, []);

  const handleSubmit = async () => {
    if (feedback.trim()) {
      insertFeedback(feedback, (error, result) => {
        if (error) {
          Alert.alert('Error', 'Failed to save feedback');
        } else {
          Alert.alert('Success', 'Thank you for your feedback!');
          setFeedback('');  // Clear feedback field
        }
      });
    } else {
      Alert.alert('Error', 'Please enter some feedback');
    }
  };

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
        value={feedback}
        onChangeText={setFeedback}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedbackScreen;
