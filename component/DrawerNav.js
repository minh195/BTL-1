import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChatScreen from '../screens/ChatScreen';
import RoomChatScreen from '../screens/RoomChatScreen';
import SignInScreen from "../screens/LoginScreen";
//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;

//Navigation Drawer Structure for all screens
class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('../image/drawer.png')}
                        style={styles.avatarImage}
                    />
                </TouchableOpacity>
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
            navigationOptions: {
                header: null,
            }
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
