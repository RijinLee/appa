import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  DatePickerIOS,
  StyleSheet,
  Picker,
  Button,
  ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

function Separator() {
  return <View style={styles.separator} />;
}

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      gender: 'unknown',
      email: null
    };

    this.setDate = this.setDate.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

  setEmail(email) {
    this.setState({ email: email });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log('this is the props: ', this.props);
    return (
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        {this.state.email ? (
          <SafeAreaView>
            <View>
              <Text style={styles.section}>Please login</Text>
              {/* <View style={styles.fixToText}>
              <TextInput placeholder="First Name" style={styles.input} />
              <TextInput placeholder="Last Name" style={styles.input} />
            </View> */}
              <View style={styles.fixToText}>
                <TextInput placeholder="E-mail" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
              </View>
              <Button
                title="LOGIN"
                onPress={() => {
                  navigate('Home');
                }}
              />
            </View>
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.container}>
            <Button
              title="Create account"
              onPress={() => {
                navigate('Home');
                this.setEmail();
              }}
            />
            <View>
              <Text style={styles.section}>Please sign up</Text>
              {/* <View style={styles.fixToText}>
              <TextInput placeholder="First Name" style={styles.input} />
              <TextInput placeholder="Last Name" style={styles.input} />
            </View> */}
              <View style={styles.fixToText}>
                <TextInput placeholder="E-mail" style={styles.input} />
                <TextInput placeholder="Password" style={styles.input} />
              </View>
            </View>

            <Separator />

            <View>
              <Text style={styles.section}>
                When is the baby's expected due date?
              </Text>
              <DatePickerIOS
                date={this.state.chosenDate}
                onDateChange={this.setDate}
                mode={'date'}
              />
            </View>

            <Separator />

            <View>
              <Text style={styles.section}>What is the baby's gender?</Text>
              <Picker
                selectedValue={this.state.gender}
                style={{ height: 50, width: '100%' }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ gender: itemValue })
                }
              >
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
                <Picker.Item label="Not finding out" value="unknown" />
                <Picker.Item label="Too early" value="too early" />
              </Picker>
            </View>
            {/* <Button title="SAVE" onPress={() => navigate('Home')} /> */}
          </SafeAreaView>
        )}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
    // position: 'relative'
  },
  section: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20
    // fontWeight: 50
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    width: '50%'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button: {
    // flex: 2,
    width: '100%',
    color: '#000000',
    height: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});
