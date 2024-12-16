import { StyleSheet,Alert, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function AdminScreen({navigation}) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('adminLogin');
    await AsyncStorage.removeItem('username');
    navigation.replace('Login'); 
  };

  const confirmLogout = () => {
    Alert.alert(
      "Are you sure?",
      "Do you really want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: handleLogout,
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text>AdminScreen</Text>
      <TouchableOpacity onPress={confirmLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f8f8f8',
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  }
})