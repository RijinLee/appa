import React from 'react';
import { View, Image, Button, ImageBackground, Text } from 'react-native';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/564x/97/4a/f7/974af7885b97e63c72b60fd327862838.jpg'
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{
            // flexDirection: 'row',
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image source={require('../assets/images/logo1.png')} />
          <Text
            style={{ fontSize: 30, color: 'orange' }}
            onPress={() => navigate('Profile')}
          >
            Made for expecting dads
          </Text>
          {/* <Button
            title="Made for expecting dads"
            style={{ fontSize: 50 }}
          /> */}
        </View>
      </ImageBackground>
    );
  }
}

export default WelcomeScreen;
