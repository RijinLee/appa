import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground
} from 'react-native';
import Constants from 'expo-constants';

import SwipingComponent from './Swipers';

function Separator() {
  return <View style={styles.separator} />;
}

export default class HomeScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('this is the props', this.props);
    const { goBack, navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <SwipingComponent />
          </View>

          <Separator />

          <View>
            {/* <Text style={styles.title} onPress={() => navigate(SomeComponent)}> */}
            <Text
              style={styles.title}
              onPress={() => {
                navigate('WeeklyTips');
              }}
            >
              WEEKLY TIPS
            </Text>
          </View>

          <Separator />

          <View>
            <Text
              style={styles.title}
              onPress={() => Alert.alert('Simple Button pressed')}
            >
              DADDY DEEP DIVES
            </Text>
          </View>

          <Separator />

          <View>
            <Text
              style={styles.title}
              onPress={() => Alert.alert('Simple Button pressed')}
            >
              IMPORTANT DATES
            </Text>
          </View>

          <Separator />

          <View>
            <Text
              style={styles.title}
              onPress={() => Alert.alert('Simple Button pressed')}
            >
              CONTACTS
            </Text>
          </View>

          <Separator />

          <View>
            <Text
              style={styles.title}
              // onPress={() => {
              //   // this.setUser();
              //   navigate('Home');
              // }}>
              // onPress={() => {
              //   navigate('ProfileScreen');
              // }}
              onPress={() => {
                navigate('Profile');
              }}
            >
              GO BACK
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  // const { navigate } = this.props.navigation;
}

const styles = StyleSheet.create({
  container: {
    // flex: 3,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
