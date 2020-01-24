/**
 * @format
 * 
 * This is the index.js for native Android and iOS
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
const STORYBOOK_START = true;

console.reportErrorsAsExceptions = STORYBOOK_START ? false : true;
console.disableYellowBox = STORYBOOK_START ? true : false;

// import App from './src';

AppRegistry.registerComponent(appName, () => {
  return STORYBOOK_START
  ? require('./storybook').default
  : require('./src/App').default;
});
