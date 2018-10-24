import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
} from "react-native";


class Login extends Component {
  static navigationOptions = {
    title: "RecipeHub"
  };
  
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
            this.props.navigation.replace('Main', { auth: true });
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
    marginTop: 200
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

export default Login;
