import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CreatureList from './CreatureList'
import CreatureShow from './CreatureShow'
import { createStackNavigator } from 'react-navigation'

export const Navigation = createStackNavigator({
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
)


class NavBar extends Component {
    render() {
        return (
            <View>
                <Text>Navbar</Text>
            </View>
        )
    }
}

export default NavBar