import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';


const RedButton = () => {


    const handlePress = () => {
        PushNotification.localNotification({
            channelId: 'test-channel',
            title: 'My Notification Title',
            message: 'My Notification Message',
        });
    }


    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={{ color: 'red', fontSize: 50 }}>Press me</Text>
        </TouchableOpacity>
    );
};


export default RedButton;