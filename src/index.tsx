/**
 * @format
 * 
 * This is the index.js for Web, 
 * React-scripts checks here for the entry point
 * I've pointed react native to the 
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
const appName = 'rn_ts_sb'

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });
}

export default App;