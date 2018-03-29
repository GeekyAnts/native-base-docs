## To create new react app

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
