/**
 * @format
 * 
 * This is the index.js for native Android and iOS
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
