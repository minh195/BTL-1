import React, {Component} from 'react';
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChatScreen from '../screens/ChatScreen';
import RoomChatScreen from '../screens/RoomChatScreen';
import SignInScreen from "../screens/LoginScreen";
import PopUpLogOut from "./PopUpLogOut";
//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;

//Navigation Drawer Structure for all screens
class NavigationDrawerStructure extends Component {
    constructor(props) {
        super(props)
    }

    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
            </View>
        );
    }
}

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
    {
        //Drawer Optons and indexing
        NavScreen1: {
            screen: ChatScreen,
        },
        NavScreen2: {
            screen: RoomChatScreen,
        },
        NavScreen3: {
            screen: SignInScreen,
        },
        NavScreen4: {
            screen: PopUpLogOut,
        }
    },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        contentComponent: CustomSidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 130,
        initialRouteName: 'NavScreen1'
    }
);
const style = StyleSheet.create(
    {
        avatarImage: {
            width: 25,
            height: 25,
            marginLeft: 5
        }
    }
)
export default DrawerNavigatorExample
