import React, { Component } from "react";
import {Image,Text,TextInput,Button,View,TouchableOpacity} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RegisterPage } from "./RegisterPage";
import HomePage from "./HomePage";
import styles from "../../style";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      mockUser: "michal",
      mockPass: "1234"
    };
  }

  checkUserAndPass = () => {
    if (this.validateAuth()) {
      this.props.navigation.navigate("Home");
    } else {
      alert("Invalid username and/or Password.");
    }
  };

  ///check user and password.
  validateAuth = () => {
    const { userName, password, mockPass, mockUser } = this.state;
    return userName === mockUser && password === mockPass;
  };

  render() {
    return (
      <View style={styles.logincontainer}>
        <View style={styles.logintextfields}>
          <Image
            style={styles.LogoImage}
            source={require("../../assets/Hello-Heart-logo.png")}
          />
          <TextInput
            style={styles.logininput}
            placeholder='username'
            returnKeyType='next'
            onChangeText={e => this.setState({ userName: e })}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TextInput
            style={styles.logininput}
            placeholder='password'
            onChangeText={e => this.setState({ password: e })}
            returnKeyType='go'
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
          <TouchableOpacity
            style={styles.loginbuttoncontainer}
            onPress={this.checkUserAndPass}>
            <Text style={styles.loginbuttontext}>Login</Text>
          </TouchableOpacity>
          <Button
            title='Register Here'
            color='#1abc9c'
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </View>
    );
  }
}
