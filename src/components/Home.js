import React, { Component } from 'react';
import { View, Text } from 'react-native'

class Home extends Component {



    render() {
        return (
            <View>
                <Text>Home Page</Text>
                <Text onPress={this.props.removeToken} >Sign Out</Text>
            </View>
        );
    }
}

export default Home;