# Quick Setup

To have [NativeBase](https://nativebase.io/) components running onto your native apps, all you need to do is, create a fresh [React Native](https://facebook.github.io/react-native/) project and install the NativeBase using *npm*.

**System Requirements**
* Globally installed [node](https://nodejs.org/en/) >= 6.0
* Globally installed [npm](https://www.npmjs.com/) >= 4.0
* Globally installed [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html) which allow you to easily create and initialize projects.   
* [Click here](/docs/Compatibility.md) to know about React Native version compatibility with NativeBase.

*Create React Native project*
```js
react-native init AwesomeNativeBase
cd AwesomeNativeBase
```


*Install NativeBase*

```js
npm install native-base --save
```
*Install Peer Dependencies*<br />
The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.

```js
react-native link
```

You've successfully setup [NativeBase](https://nativebase.io/) with your [React Native](https://facebook.github.io/react-native/) app. Your React Native app is ready to run on iOS and Android devices.


## Setup with CRNA
Create React Native project using the CRNA CLI.  
CRNA helps you make React Native apps with no build configuration. Create React App works on macOS, Windows, and Linux.  
Refer this link for additional information [CRNA](https://github.com/react-community/create-react-native-app)

*Install NativeBase*
```js
npm install native-base --save
```
*Install @expo/vector-icons*
```js
npm install @expo/vector-icons --save
```
  

NativeBase uses some custom fonts that can be loaded using **loadAsync** function. Check out [this](https://docs.expo.io/versions/v15.0.0/sdk/font.html#expofontloadasyncname-url) expo link.
  
*Syntax*  
```js
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}
```
  

Check out the [NativeBase KitchenSink](https://exp.host/@geekyants/nativebase-kitchenSink) with CRNA for an example of NativeBase components implementation.  
Here's the [source code](https://github.com/GeekyAnts/NativeBase-KitchenSink) for NativeBase KitchenSink.
