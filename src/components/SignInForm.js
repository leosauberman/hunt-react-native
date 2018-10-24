import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';

export default class SignInForm extends Component {
    
  render() {
    return (
        <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.email}
          placeholder="EMAIL"
          placeholderTextColor="#000"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize='none'
          autoFocus={true}
          returnKeyType='next'
          onSubmitEditing={() => this.password.focus()}        
          ref={(input) => this.user = input}
        />
        <TextInput
          style={styles.password}
          placeholder="PASSWORD"
          placeholderTextColor="#000"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize='none'
          returnKeyType='go'
          ref={(input) => this.password = input}
		  onSubmitEditing={() => {
			  this.props.navigation.navigate('Main');
		  }}
        />    
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    email: {
      borderWidth: 1,
      borderColor: "black",
      margin: 20,
      width: 300,
      height: 50,
    },
    password: {
      borderWidth: 1,
      borderColor: "black",
      marginRight: 20,
      marginLeft: 20,
      marginTop: 5,
      width: 300,
      height: 50,
    }
  });