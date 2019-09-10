//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {MainScreen} from "../screenNames";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
        //Setting up the Main Top Large Image of the Custom Sidebar
        this.proileImage =
            'https://ih1.redbubble.net/image.467903495.2798/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
        //Array of the sidebar navigation option with icon and screens to navigate
        //This screens can be any screens defined in Drawer Navigator in DrawerNav.js
        //You can find the Icons from here https://material.io/tools/icons/
        this.items = [
            {
                navOptionThumb: 'snapchat',
                navOptionName: 'Chat',
                screenToNavigate: 'NavScreen1',
            },
            {
                navOptionThumb: 'wechat',
                navOptionName: 'Room chat',
                screenToNavigate: 'NavScreen2',
            },
        ];
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate(MainScreen);
    };

    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                <Image
                    source={{uri: this.proileImage}}
                    style={styles.sideMenuProfileIcon}
                />
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={styles.divider}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{width: '100%'}}>
                    {this.items.map((item, key) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                            }}
                            key={key}>
                            <View style={{marginRight: 10, marginLeft: 20}}>
                                <Icon name={item.navOptionThumb} size={25}/>
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: global.currentScreenIndex === key ? 'red' : 'black',
                                }}
                                onPress={() => {
                                    global.currentScreenIndex = key;
                                    this.props.navigation.navigate(item.screenToNavigate);
                                }}>
                                {item.navOptionName}
                            </Text>
                        </View>
                    ))}
                </View>
                <View>
                    <TouchableOpacity onPress={
                        this._signOutAsync
                    }>
                        <Icon size={30}
                              color={'red'}
                              name='sign-out'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    }, divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#e2e2e2',
        marginTop: 15,
    }, sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});