import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SignInScreen from '../screens/SignInScreen'
import DrawerNavigatorExample from './DrawerNav';

const StackNav = createStackNavigator({
    MainScreen: {
        screen: SignInScreen,
        navigationOptions: {
            header: null,
        }
    },
    DetailScreen: {
        screen: DrawerNavigatorExample,
        navigationOptions: {
            header: null,
        },
    },
    initialRouteName: 'DetailScreen',
});

export default createAppContainer(StackNav)
