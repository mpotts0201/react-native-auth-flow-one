import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native'




class Root extends Component {

    onNav = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View>
                <Text>Welcome to Bog App One</Text>
                <Text onPress={() => this.onNav()} >Home</Text>

            </View>
        );
    }
}

export default Root;