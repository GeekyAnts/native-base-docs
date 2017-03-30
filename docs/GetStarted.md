# Quick Setup

To have [NativeBase](http://nativebase.io/) components running onto your native apps, all you need to do is create a fresh [React Native](https://facebook.github.io/react-native/) project and install the NativeBase command line tools.

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

You've successfully setup [NativeBase](http://nativebase.io/) with your [React Native](https://facebook.github.io/react-native/) app. Your React Native app is now all set to run on iOS and Android simulator.


**Gif/video of a init new projet and adding a Button component to a new blank project(iOS and Android) goes here**

## Setup with CRNA
*Create React Native project using the CRNA cli.* <br />

*Install NativeBase*
```js
npm install native-base --save
```
*Install @expo/vector-icons*
```js
npm install @expo/vector-icons --save
```
