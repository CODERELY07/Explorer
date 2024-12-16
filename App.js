import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Alert } from 'react-native';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import LogoutScreen from './screens/LogoutScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Feedback' component={FeedbackScreen} />
      <Drawer.Screen name='Contact Us' component={ContactUsScreen} />
      <Drawer.Screen
        name='Logout'
        listeners={{
          focus: () => {
            Alert.alert(
              'Are you sure?',
              'Do you really want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Logout',
                  onPress: () => {
                    AsyncStorage.removeItem('isLoggedIn');
                    AsyncStorage.removeItem('username');
                    navigation.replace('Login'); 
                  },
                  style: 'destructive',
                },
              ]
            );
          },
        }}
        component={LogoutScreen}
      />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
