import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions} from 'react-navigation-drawer';
import PopUpLogOut from "./PopUpLogOut";
import {MainScreen} from "../screenNames";

export default class CustomSidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.profileImage =
            'https://ih1.redbubble.net/image.467903495.2798/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
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
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
        this.refs.addModal1.showModal()
    };

    _HandleLogOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate(MainScreen);
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.sideMenuContainer}>
                <Image
                    source={{uri: this.profileImage}}
                    style={styles.sideMenuProfileIcon}
                />
                <View
                    style={styles.divider}
                />
                <View style={{width: '100%'}}>
                    {this.items.map((item, key) => (
                        <View style={[
                            styles.itemContainer,
                            {backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff'}
                        ]}
                              key={key}>
                            <View style={{marginRight: 10, marginLeft: 20}}>
                                <Icon name={item.navOptionThumb} size={25} color={'#747375'}/>
                            </View>
                            <Text style={[
                                styles.navigationName,
                                {color: global.currentScreenIndex === key ? 'red' : 'black'}
                            ]}
                                  onPress={() => {
                                      global.currentScreenIndex = key;
                                      this.props.navigation.navigate(item.screenToNavigate);
                                  }}>
                                {item.navOptionName}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.buttonLogOut}>
                    <TouchableOpacity onPress={this._signOutAsync}>
                        <Icon size={30}
                              color={'red'}
                              name='sign-out'/>
                    </TouchableOpacity>
                </View>
                <PopUpLogOut logout={this._HandleLogOut} ref={'addModal1'}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }, sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    navigationName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    divider: {
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
    }, buttonLogOut: {
        marginTop: 10
    }
});