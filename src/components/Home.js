import React, { Component } from 'react';
import { View, Text } from 'react-native'
import NavBar from './NavBar'
import CreatureList from './CreatureList'
import CreatureShow from './CreatureShow'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation'






class Home extends Component {


    render() {
        return (
            <NavBar signOut={this.props.signOut} />

        );
    }
}

export default Home;