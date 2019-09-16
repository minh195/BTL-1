import React, {Component} from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChatScreen from '../screens/ChatScreen';
import RoomChatScreen from '../screens/RoomChatScreen';
import SignInScreen from "../screens/SignInScreen";
//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;

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

const DrawerNavigatorExample = createDrawerNavigator(
    {
        NavScreen1: {
            screen: ChatScreen,
        },
        NavScreen2: {
            screen: RoomChatScreen,
        },
        NavScreen3: {
            screen: SignInScreen,
        }
    },
    {
        contentComponent: CustomSidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 130,
        initialRouteName: 'NavScreen1'
    }
);
export default DrawerNavigatorExample
