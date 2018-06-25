import React from 'react'
import { TabNavigator, createStackNavigator } from 'react-navigation'
import Root from '../src/components/Root'
import Home from '../src/components/Home'
import Login from '../src/components/Login'
// import { Icon } from 'react-native-elements'




export const Tabs = createStackNavigator({

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

    initialRouteName: 'Login',
    mode: 'modal'

})

