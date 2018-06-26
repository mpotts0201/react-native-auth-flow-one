import React, { Component } from 'react';
import {Text, View} from 'react-native'


class CreatureList extends Component {

    onLearnMore = () => {
        this.props.navigation.navigate('CreatureShow')
    }

    render() {
        return (
            <View>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>

            </View>
        );
    }
}

export default CreatureList;