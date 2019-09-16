import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import {DetailScreen} from '../screenNames';
import PopUpMoDal from '../component/PopUpMoDal';

export default class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    _onChangeTextUser = (text) => this.setState({text, username: text})
    _onChangeTextPassword = (text) => this.setState({text, username: text})
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc')
        this.props.navigation.navigate(DetailScreen)
        this.refs.addModal.showModal()
    }
    _signUp = () => {
        this.refs.addModal.showModal()
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <PopUpMoDal ref={'addModal'}/>
                <ImageBackground source={require('../image/backgroud-login.png')}
                                 style={styles.imageBack}>
                    <Text style={styles.appName}>
                        Chat demo
                    </Text>
                </ImageBackground>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={require('../image/id-icon.png')}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChangeTextUser}/>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTVFrqMbHP46lpXssJd7eY_wjtl2dB9IaqfU-iqwOtTqJqbYDRA'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChangeTextPassword}/>
                </View>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
                                  onPress={this._signInAsync}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}
                                  onPress={this._signUp}>
                    <Text style={styles.signInText}>
                        Don't have an account?
                        <Text style={styles.textSignUp}>
                            Sign Up
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, textSignUp: {
        color: "blue"
    }, imageBack: {
        flex: 1,
        marginBottom: 20,
        height: '80%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }, appName: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 40,
        marginBottom: 100,
        fontWeight: 'bold'
    }, inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black', borderWidth: 1
    }, inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    }, inputIcon: {
        width: 16,
        height: 16,
        marginLeft: 15,
        justifyContent: 'center'
    }, buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    }, forgotText: {
        fontSize: 13,
        color: "hotpink"
    }, loginButton: {
        backgroundColor: "#CB5D9A",
    }, loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }, signInText: {
        fontSize: 12
    }
});


