import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Constants from 'expo-constants';

export default class WeeklyTips extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <SafeAreaView style={styles.container}>
          <View>
            <Image
              source={require('../../assets/images/giphy.gif')}
              style={{
                height: 250,
                width: 350,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
            <Text style={styles.title}>
              Planning your role on delivery days: In the 1950's, expectant
              American fathers dropped their wives off at the hospital and
              picked them back up after the baby was born. In the 1970's,
              fathers were still largely banned from being present during the
              actual brith. The times have changed. Think of your delivery room
              role as the cornerman in a boxing match. You'll participate in the
              prep and the planning but on the day of the match, you'll be there
              to cheer her on and then keep her occupied, comfortable and cool
              in between contraction rounds. You might be in store for a twelve
              round bout or a first round push out. Either way, stick to these
              general guidelines and you'll be regarded as a rock star.
            </Text>
          </View>
          <Button
            title="BACK"
            onPress={() => {
              navigate('Home');
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 3,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8
  }
});
