import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Main from './components/Main';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  return (
    <View>
      <Main />
    </View>
  );
}
