import React, { Component } from 'react'
import { Text, View, TextInput, Button, AsyncStorage } from 'react-native'
import axios from 'axios'


const ACCESS_TOKEN = 'access-token'

const styles = {
    input: {
        borderColor: 'grey',
        borderWidth: 1,
    }
}

class Login extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
    }

    signIn = () => {
        this.props.signIn(this.state.email, this.state.password)

    }





    signUp = () => {
        this.props.signUp(this.state.email, this.state.password, this.state.password_confirmation)
    }



    render() {
        return (
            <View>



                <Text style={{ fontSize: 28, fontWeight: '400', marginBottom: 50 }}>Bog App One</Text>

                <Text>Email</Text>

                <TextInput style={styles.input} value={this.state.email} placeholer='email' name='email'
                    onChangeText={(text) => this.setState({ email: text })}
                    autoCapitalize='none'
                />

                <Text>Password</Text>


                <TextInput style={styles.input} value={this.state.password} placeholer='password' name='password'
                    onChangeText={(text) => this.setState({ password: text })}
                    autoCapitalize='none'

                />

                <Text>Password Confirmation</Text>

                <TextInput style={styles.input} value={this.state.password_confirmation} placeholer='password_confirmation' name='password_confirmation'
                    onChangeText={(text) => this.setState({ password_confirmation: text })}
                    autoCapitalize='none'

                />


                <Button title='Sign In' onPress={this.signIn} />
                <Button title="Register" onPress={this.signUp} />





            </View>
        )
    }

}

export default Login