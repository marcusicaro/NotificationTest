import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  requestUserPermission,
  NotificationListener,
} from './src/utils/pushnotification_helper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <View>
      <Text>Test notification</Text>
    </View>
  );
};

export default App;
