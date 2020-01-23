# React Native + React Native Web Typescript Template

## Commands
### Installation
yarn

### Run Web
yarn web

### Run Android
yarn android

### Run iOS
yarn ios

## Goals
Provide a boilerplate that offers Type Safety, React Native, React Web, and Storybook Integration for Web and Native.

## Prior Works
I was unable to extend https://github.com/reallynotburner/rn_web_monorepo with Storbook for React and Storybook for React Native. Also, adding another plaftorm (AppleTV for example) would be messy since the directory structure was inconsistent between mobile and web.

## Development
I used this template: https://github.com/react-native-community/react-native-template-typescript as a start.  Then enhanced it the instructions here:
https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native.
Then I added https://github.com/necolas/react-native-web
I resolved package.json collisions as they happened.

## Entry Points
- Web:  uses react-scripts cli to serve up the web.  I'm using default configuration, so https://github.com/reallynotburner/rn_ts_sb/blob/addReactNativeWEb/src/index.tsx is where Web enters the app.
- iOS: https://github.com/reallynotburner/rn_ts_sb/blob/addReactNativeWEb/index.ios.js
- Android: https://github.com/reallynotburner/rn_ts_sb/blob/addReactNativeWEb/index.android.js


