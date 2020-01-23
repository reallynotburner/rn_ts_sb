/**
 * @format
 * 
 * This is the index.js for native Android and iOS
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src';

AppRegistry.registerComponent(appName, () => App);
