import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles';
export default function ManageRecentlyUpdatedScreen() {
  const [db, setDb] = useState(null);
  const [updates, setUpdates] = useState([]);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  
  useEffect(() => {
    const initializeDB = async () => {
      const database = await SQLite.openDatabaseAsync('sorsogonExplorer');
      setDb(database);
      await database.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS recent_updates (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          description TEXT
        );
      `);
      fetchUpdates(database);
    };
    initializeDB();
  }, []);
  
  const fetchUpdates = async (database) => {
    const result = await database.getAllAsync('SELECT * FROM recent_updates');
    setUpdates(result);
  };

  const handleAddUpdate = async () => {
    if (updateTitle && updateDescription) {
      await db.execAsync(`
        INSERT INTO recent_updates (title, description) 
        VALUES ('${updateTitle}', '${updateDescription}');
      `);
      fetchUpdates(db); 
      setUpdateTitle('');
      setUpdateDescription('');
    } else {
      alert('Please provide both title and description');
    }
  };

  return (
    <View style={[styles.container, {paddingHorizontal:20}]}>
      <Text style={styles.headerText}>Manage Recently Updated</Text>
      
      {/* Add new update form */}
      <TextInput
        style={styles.input}
        placeholder="Update Title"
        value={updateTitle}
        onChangeText={setUpdateTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Update Description"
        value={updateDescription}
        onChangeText={setUpdateDescription}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleAddUpdate}>
        <Text style={styles.loginButtonText}>Add Update</Text>
      </TouchableOpacity>
    
      
      <ScrollView showsVerticalScrollIndicator={false} style={styles.updatesList}>
        {updates.length > 0 ? (
          updates.map((update) => (
            <View key={update.id} style={styles.updateItem}>
              <Text style={styles.updateTitle}>{update.title}</Text>
              <Text style={styles.updateDescription}>{update.description}</Text>
            </View>
          ))
        ) : (
          <Text>No recent updates available.</Text>
        )}
      </ScrollView>
    </View>
  );
}
