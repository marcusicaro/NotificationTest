import React from 'react';

import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const requestNotificationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: 'Acesso às notificações',
        message: 'LigaMagic quer permissão para exibir notificações',
        buttonNeutral: 'Perguntr mais tarde',
        buttonNegative: 'Não permitir',
        buttonPositive: 'Ok',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Você pode receber notificações');
    } else {
      console.log('Você não pode receber notificações');
    }
  } catch (err) {
    console.log(err);
  }
};
