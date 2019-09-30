import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-web-swiper';

export default class SwipingComponent extends React.Component {
  render() {
    return (
      <View style={{ height: 400 }}>
        <Swiper
          direction={'column'}
          loop
          autoplayTimeout={-2.5}
          overRangeButtonsOpacity={0.3}
        >
          <View style={[styles.slideContainer, styles.slide1]}>
            <Text style={{ fontSize: 20 }}> Week 33 - Comin' in hot!</Text>
          </View>
          <View style={[styles.slideContainer, styles.slide2]}>
            <Text style={{ fontSize: 20 }}>
              Your baby is roughly the weight of a 15" macbook pro
            </Text>
          </View>
          <View style={[styles.slideContainer, styles.slide3]}>
            <Text style={{ fontSize: 20 }}>
              Baby's bones are hardening, except the skull, which stays soft.
              Heads up: newborns aren't always great looking. They have mishaped
              heads and puffy eyes.
            </Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)'
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)'
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)'
  }
});
