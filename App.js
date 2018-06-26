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
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Login from './src/components/Login'
import Home from './src/components/Home'
import axios from 'axios'
import CreatureList from './src/components/CreatureList'
import CreatureShow from './src/components/CreatureShow'


// export const Tabs = createBottomTabNavigator({
//   Home: Home,
//   List: SignedIn
// })

export const SignedOut = createStackNavigator({ Login: Login })


export const SignedIn = createStackNavigator({
  CreatureList: {
    screen: CreatureList,
    navigationOptions: {
      title: 'List'
    },
  },
  CreatureShow: {
    screen: CreatureShow,
    navigationOptions: {
      title: 'Details'
    },
  },
},
  {
    initialRouteName: 'CreatureList'
  }
)

export const Navigation = createSwitchNavigator({
  SignedIn: SignedIn,
  SignedOut: SignedOut

})



const ACCESS_TOKEN = 'access-token'

class App extends Component {

  state = {
    signedIn: false,
  }


  componentDidMount() {
    // this.getToken()
    this.checkSignIn()


  }

  checkSignIn = async () => {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN)
    this.props.navigation.navigate(
      token
        ? ('Home', { signOut: this.signOut.bind(this) })
        : ('Login', { signUp: this.signUp.bind(this), signIn: this.signIn.bind(this) })

    )

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





  render() {

    return <Navigation />

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
