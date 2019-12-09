import React, { Component } from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import styles from "../../style";

export class RegisterPage extends Component {
  registerFun() {
    alert("regist");
  }
  render() {
    return (
      <View style={styles.registerPageContainer}>
        <TextInput
          style={styles.registerPageinput}
          placeholder='Enter password'
          returnKeyType='next'
          onSubmitEditing={() => this.emailinput.focus()}
        />
        <TextInput
          style={styles.registerPageinput}
          placeholder='Enter your email'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          ref={input => (this.emailinput = input)}
        />

        <TextInput
          style={styles.registerPageinput}
          placeholder='Enter password'
          returnKeyType='go'
          secureTextEntry
          ref={input => (this.passwordInput = input)}
        />
        <TouchableOpacity
          style={styles.registerPageButtonContainer}
          onPress={this.registerFun}>
          <Text style={styles.registerPageButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
