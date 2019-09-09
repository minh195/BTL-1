import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    ImageBackground
} from 'react-native';
import {DetailScreen} from '../screenNames';

export default class SignInScreen extends Component {

    constructor(props) {
        super(props);
        state = {
            email: '',
            password: '',
        }
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../image/backgroud-login.png')} style={styles.imageBack}>
                    <Text style={styles.appName}>Chat demo</Text>
                </ImageBackground>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={require('../image/id-icon.png')}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTVFrqMbHP46lpXssJd7eY_wjtl2dB9IaqfU-iqwOtTqJqbYDRA'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={() => {
                                        navigation.navigate(DetailScreen);
                                    }}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer}
                    //onPress={() => this.onClickListener('restore_password')}
                >
                    <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer}
                    //onPress={() => this.onClickListener('register')}
                >
                    <Text style={styles.signInText}>Don't have an account?<Text style={{color: "blue"}}> Sign Up</Text></Text>
                </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBack: {
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
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 16,
        height: 16,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    forgotText: {
        fontSize: 13,
        color: "hotpink"
    },
    loginButton: {
        backgroundColor: "#CB5D9A",
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    signInText: {
        fontSize: 12
    }
});


