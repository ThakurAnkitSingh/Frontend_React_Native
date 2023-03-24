import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import { Image, Text, View } from 'react-native'
import cameraIcon from './assets/icons/camera.png'

import keysIcon from './assets/icons/keys.png'
import notificationIcon from './assets/icons/notification.png'
import todoIcon from './assets/icons/todo.png'





export default function TabMain() {

    const tab = () => {
        return <View>
            <Text>TAB FUnction here</Text>
            <Image source={launch_screen} style={{ width: 105, height: 105 }} />
            <Image source={keysIcon} style={{ width: 25, height: 25 }} />
            <Image source={notificationIcon} style={{ width: 35, height: 35 }} />
            <Image source={todoIcon} style={{ width: 35, height: 35 }} />
            <Image source={cameraIcon} style={{ width: 35, height: 35 }} />

        </View>
    }



    const Tab = createBottomTabNavigator()

    return <Tab.Navigator initialRouteName='Notification' screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e91e63', tabBarStyle: { height: 50, position: 'absolute', borderRadius: 90, border: 20 }
    }}>
        <Tab.Screen name="Notification" component={Tab1}
            options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ focused }) => (
                    <Image source={notificationIcon} style={{ width: 25, height: 25, tintColor: focused ? '#000' : '#717171' }} />
                )
            }} />



        <Tab.Screen name="Photos" component={Tab2}
            options={{
                tabBarLabel: 'Photos',
                tabBarIcon: ({ focused }) => (
                    <Image source={cameraIcon} style={{ width: 25, height: 25, tintColor: focused ? '#000' : '#717171' }} />
                )
            }} />


        <Tab.Screen name="Todo" component={Tab3}
            options={{
                tabBarLabel: 'Todo',
                tabBarIcon: ({ focused }) => (
                    <Image source={todoIcon} style={{ width: 25, height: 25, tintColor: focused ? '#000' : '#717171' }} />
                )
            }} />


        <Tab.Screen name="Calculator" component={Tab4}
            options={{
                tabBarLabel: 'Calculator',
                tabBarIcon: ({ focused }) => (
                    <Image source={keysIcon} style={{ width: 25, height: 25, tintColor: focused ? '#000' : '#717171' }} />
                )
            }} />
    </Tab.Navigator>

}

