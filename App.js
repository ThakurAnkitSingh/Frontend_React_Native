import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabMain from './TabMain';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },


      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    });

    createChannel();

  }, [])


  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'testChannel'
    })
  }

  const Stack = createNativeStackNavigator();





  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={TabMain} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;