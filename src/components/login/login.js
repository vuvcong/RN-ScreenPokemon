import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../styles/styles';
export default class DemoPokemonGo extends Component {
  constructor(props) {
    super(props);
    background = require('../../imgs/background.jpg')
    logo = require('../../imgs/logo.png')
    this.state = {
      username: '',
      password: '',
    }
  }
  _onPress() {
    alert(this.state.username +'-'+ this.state.password)
  }
  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.containerBg}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={logo} />
          <KeyboardAvoidingView style={styles.viewInput}>
            <Text style={styles.txtRegister}>REGISTER</Text>
            <TextInput
              onChangeText={(value) => this.setState({ username: value })}
              style={styles.txtInput}
              placeholder={'Username'}
              placeholderTextColor={'white'}
            />
            <TextInput
              onChangeText={(value) => this.setState({ password: value })}
              style={styles.txtInput}
              placeholder={'Password'}
              placeholderTextColor={'white'}
              secureTextEntry={true}
            />
            <TouchableOpacity
            onPress={this._onPress.bind(this)}
              style={styles.btnLogin}
            >
              <Text
                style={styles.txtLogin}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
            <View style={styles.viewOther}>
              <View style={styles.viewLine} />
              <Text>OR CONNECT WITH</Text>
              <View style={styles.viewLine} />
            </View>
            <View style={styles.viewSession}>
              <TouchableOpacity style={styles.viewSessionItem}>
                <Image></Image>
                <Text style={styles.txtSessionItem}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewSessionItem}>
                <Image></Image>
                <Text style={styles.txtSessionItem}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewSessionItem}>
                <Image></Image>
                <Text style={styles.txtSessionItem}>Twitter</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    )
  }
}

