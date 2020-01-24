# React Native + React Native Web  + Typescript + Storybook Template

## Commands
### Installation
`yarn`

### Run Web
`yarn web`

### Run Android
- you must have an emulator running already for this to work
`yarn android`

### Run iOS
- you must (cd ios && pod install) before you do this
`yarn ios`

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
- Web:  uses react-scripts cli to serve up the web.  I'm using default configuration, so https://github.com/reallynotburner/rn_ts_sb/src/index.tsx is where Web enters the app.
- iOS: https://github.com/reallynotburner/rn_ts_sb/index.ios.js
- Android: https://github.com/reallynotburner/rn_ts_sb/index.android.js

## Storybook
- iOS and Android is via a view within the app, I'm currently running it as the entrypoint for the app for development purposes, but you can easily have it as part of an enhanced settings menu.
- CAUTION: Storybook Native Server for Browser control of native stories DOES NOT WORK YET.  `yarn storybook` will start the server and cause many errors about parsing circular JSON references.  For now, what you see on the device is what you get for native.
- Web is a work in progress.  I'm trying hard not to destroy the functioning React Native storybook in favor of Storybook web.  it's a novel thing to have both in one  project, and a worthy cause.
- Storybook + Typescript is also a work in progress, as it's an odd configuration and I havent' completely resolved the compilation pipeline for it to work with the typescript components.