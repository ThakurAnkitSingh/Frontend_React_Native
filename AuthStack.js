import React from 'react'
import LoginScreen from './Login';
import SigninScreen from './Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AuthStack() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Log In Screen" component={LoginScreen} />
            <Stack.Screen name="Register Screen" component={SigninScreen} />
        </Stack.Navigator>
    )
}