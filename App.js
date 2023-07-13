import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  requestUserPermission,
  NotificationListener,
} from './src/utils/pushnotification_helper';
import {requestNotificationPermission} from './src/utils/PermissionsAndroid';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <View>
      <Text>Test notification</Text>
      <Button
        title="Permitir notificação"
        onPress={requestNotificationPermission}
      />
    </View>
  );
};

export default App;
