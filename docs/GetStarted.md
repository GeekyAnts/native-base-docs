# Quick Setup

To have [NativeBase](https://nativebase.io/) components running onto your native apps, all you need to do is, create a fresh [React Native](https://facebook.github.io/react-native/) project and install the NativeBase using *npm*.

**System Requirements**
* Globally installed [node](https://nodejs.org/en/) >= 6.0
* Globally installed [npm](https://www.npmjs.com/) >= 4.0
* Globally installed [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html) which allow you to easily create and initialize projects.   
* [Click here](/docs/Compatibility.md) to know about React Native version compatibility with NativeBase.

## Setup with React Native

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

Check out the [NativeBase KitchenSink](https://nativebase.io/kitchen-sink-app) an example of NativeBase components implementation. Here's the [source code](https://github.com/GeekyAnts/NativeBase-KitchenSink) for NativeBase KitchenSink.


## Setup with Expo
Create React Native project using expo.<br />
Expo helps you make React Native apps with no build configuration. Expo works on macOS, Windows, and Linux. <br />
Refer this link for additional information [Expo](https://expo.io/)

*Install NativeBase*
```js
yarn add native-base --save
```
*Install @expo/vector-icons*
```js
npm install @expo/vector-icons --save
```
<br />

NativeBase use some custom fonts that can be loaded using **loadAsync** function. Check out [this](https://docs.expo.io/versions/latest/sdk/font#expofontloadasyncobject) expo link.
<br />

*Syntax* <br />
```js
async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}
```
<br />
Check out the [NativeBase KitchenSink](https://expo.io/@geekyants/nativebasekitchensink) with CRNA for an example of NativeBase components implementation. Here's the [source code](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/CRNA) for NativeBase KitchenSink.


## Setup with Web


```
npm install -g create-react-app
create-react-app nativebase-web-app
cd nativebase-web-app
npm eject
npm install native-base --save
npm install create-react-app --save
npm install react-native-web --save
```
* **Setup resolve alias in your webpack configuration**

```
alias: {
  "react-native/Libraries/Renderer/shims/ReactNativePropRegistry": "react-native-web/dist/modules/ReactNativePropRegistry",
  "react-native": "react-native-web"
},
```
* **Add Path resolver for NativeBase dependencies in your webpack configuration**

```
{
  test: /\.(js|jsx|mjs)$/,
  include: [
    paths.appSrc,
    path.resolve(paths.appNodeModules, "native-base-shoutem-theme"),
    path.resolve(paths.appNodeModules, "react-navigation"),
    path.resolve(paths.appNodeModules, "react-native-easy-grid"),
    path.resolve(paths.appNodeModules, "react-native-drawer"),
    path.resolve(paths.appNodeModules, "react-native-safe-area-view"),
    path.resolve(paths.appNodeModules, "react-native-vector-icons"),
    path.resolve(
      paths.appNodeModules,
      "react-native-keyboard-aware-scroll-view"
    ),
    path.resolve(paths.appNodeModules, "react-native-web"),
    path.resolve(paths.appNodeModules, "react-native-tab-view"),
    path.resolve(paths.appNodeModules, "static-container")
  ],
  loader: require.resolve("babel-loader"),
  options: {
    cacheDirectory: true
  }
},
```

* **Include Icons**

    Copy font.css to App.css


* **Run**

```
npm start
```
OR
```
yarn start
```

Check out the [NativeBase KitchenSink](https://nativebase.io/kitchen-sink-web-app) with Web support for an example of NativeBase components implementation. Here's the [source code](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/web-support) for NativeBase KitchenSink.



## Setup with Vue Native

```js
npm install -g vue-native-cli
vue-native init AwesomeNativeBase               // Initializes crna project
vue-native init AwesomeNativeBase --no-crna     // Initializes react-native project
cd AwesomeNativeBase
```


*Install NativeBase*

```js
npm install native-base --save
```

*Register NativeBase components*
```
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);
```
Vue Native components are very similar to React Native components. You can use all the React Native components, by making use of the `kebab case` (hyphen-delimited) equivalent components. This is because Vue Native is a wrapper around the React Native APIs.

To use NativeBase components with Vue Native, follow the same pattern, `kebab case`. And prefix NativeBase components with `nb-`

**Run**

```
npm start
```

You've successfully setup [NativeBase](https://nativebase.io/) with your [Vue Native](https://vue-native.io) app. Your Vue Native app is ready to run on iOS and Android devices.

Check out [Vue Native Docs](https://vue-native.io/docs/installation.html). Also, NativeBase KitchenSink, an example of NativeBase components implementation with Vue Native, [source code](https://github.com/GeekyAnts/KitchenSink-Vue-Native) is here.
