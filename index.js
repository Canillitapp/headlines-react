import {AppRegistry} from 'react-native';
import Main from './src/Main';
import {name as appName} from './app.json';

export default Main;

AppRegistry.registerComponent(appName, () => Main);
