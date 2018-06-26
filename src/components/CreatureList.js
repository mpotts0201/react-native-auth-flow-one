import React, { Component } from 'react';
import {Text, View, AsyncStorage} from 'react-native'
import NavBar from './NavBar'

const ACCESS_TOKEN = 'access-token'
class CreatureList extends Component {

    onLearnMore = () => {
        this.props.navigation.navigate('CreatureShow')
    }

    signOut = async () => {
        try {
          await AsyncStorage.removeItem(ACCESS_TOKEN)
          const token = await AsyncStorage.getItem(ACCESS_TOKEN)
          console.log(token)
          this.props.navigation.navigate('Login')
        } catch (error) {
          console.log(error)
        }
      }

    render() {
        return (
            <View>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>
                <Text onPress={() => this.onLearnMore()}>Creature Show</Text>

                <NavBar signOut={this.signOut}/>

            </View>
        );
    }
}

export default CreatureList;