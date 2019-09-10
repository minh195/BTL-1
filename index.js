import {AppRegistry} from 'react-native';
//import App from './App'
import Example from './TestLibrary'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Example);
