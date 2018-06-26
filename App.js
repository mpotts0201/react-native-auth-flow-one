/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import { createSwitchNavigator } from 'react-navigation'
import Login from './src/components/Login'
import Home from './src/components/Home'
import axios from 'axios'


export const Navigation = createSwitchNavigator({

  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
},
  {
    mode: 'modal',
    initialRouteName: 'Login'
  }
)



const ACCESS_TOKEN = 'access-token'

class App extends Component {

  state = {
    signedIn: false,
  }


  componentDidMount() {
    this.getToken()



  }

  storeToken = async (accessToken) => {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, accessToken)
      this.getToken()
    } catch (error) {
      console.log(error)
    }
  }

  getToken = async () => {
    try {
      let token = await AsyncStorage.getItem(ACCESS_TOKEN)
      console.log("Token is: " + token)
      if (token !== null) {
        this.setState({ signedIn: true })
      }
    } catch (error) {
      console.log(error)
    }
  }


  signIn = async (email, password) => {
    try {


      const payload = {
        email,
        password
      }


      const res = await axios.post(
        // 'https://glacial-falls-92984.herokuapp.com/auth/sign_in'
        'http://localhost:3000/auth/sign_in'
        , payload)

      const accessToken = res.headers[ACCESS_TOKEN]

      this.storeToken(accessToken)

      this.setState({ signedIn: true })
    } catch (error) {
      console.log(error)
    }
  }

  signUp = async (email, password, password_confirmation) => {
    try {
      const res = await axios.post('http://localhost:3000/auth',
        {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
      )
      const accessToken = res.headers[ACCESS_TOKEN]

      this.storeToken(accessToken)
      this.setState({ signedIn: true })
    } catch (error) {
      console.log(error)
    }
  }



  removeToken = async () => {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN)
      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    if (this.state.signedIn) {
      return <Home removeToken={this.removeToken} />
    }

    else {
      return (
        <View>
          <Text>App.js</Text>
          <Login
            signIn={this.signIn}
            signUp={this.signUp}
          />
        </View>

      );
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
