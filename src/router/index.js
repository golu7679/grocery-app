import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Home, Favorite, Notification, Profile } from '../screens';
const Stack = createNativeStackNavigator();


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';

const Tab = createBottomTabNavigator();

function MainApp() {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator  {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router;

const styles = StyleSheet.create({})