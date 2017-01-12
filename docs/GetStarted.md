# Quick Setup

To have [NativeBase](http://nativebase.io/) components running onto your native apps, all you need to do is create a fresh [React Native](https://facebook.github.io/react-native/) project and install the NativeBase command line tools.

**System Requirements**
* Globally installed [node](https://nodejs.org/en/) >= 4.0
* Globally installed [npm](https://www.npmjs.com/) >= 3.0
* Globally installed [rnpm](https://github.com/rnpm/rnpm) *(only if React Native version < 0.29)*
* Globally installed [React Native CLI](https://facebook.github.io/react-native/docs/getting-started.html) which allow you to easily create and initialize projects.   
* [Click here](/docs/Compatibility.md) to know about React Native version compatibility with NativeBase.

*Create React Native project*
```js
react-native init AwesomeNativeBase

This will walk you through creating a new React Native project in /User/localhost/AwesomeNativeBase
Installing react-native package from npm...
Setting up new React Native app in /User/localhost/AwesomeNativeBase
Installing React...
Installing Jest...
AwesomeNativeBase@0.0.1 /User/localhost/AwesomeNativeBase
└── react@15.4.2
.  .  .
.  .  .

To run your app on iOS:
   cd /User/localhost/AwesomeNativeBase
   react-native run-ios
   - or -
   Open /User/localhost/AwesomeNativeBase/ios/AwesomeNativeBase.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   Have an Android emulator running (quickest way to get started), or a device connected
   cd /User/localhost/AwesomeNativeBase
   react-native run-android

cd AwesomeNativeBase
```


*Install NativeBase*

```js
npm install native-base --save

AwesomeNativeBase@0.0.1 /Users/sahusoft/AwesomeNativeBase
└─┬ native-base@2.0.0-alpha1
  ├─┬ @shoutem/animation@0.8.10
  │ └── hoist-non-react-statics@1.2.0
  ├── @shoutem/theme@0.8.8
  ├── blueimp-md5@2.6.0
  ├── clamp@1.0.1
  ├─┬ color@0.11.4
  │ ├─┬ color-convert@1.8.2
  │ │ └── color-name@1.1.1
  │ └── color-string@0.3.0
  ├── lodash@4.11.2
  ├── react-native-checkbox@1.0.17
  ├── react-native-easy-grid@0.1.7
  ├── react-native-keyboard-aware-scroll-view@0.2.0
  ├── react-native-vector-icons@3.0.0
  ├─┬ react-tween-state@0.1.5
  │ └─┬ raf@3.3.0
  │   └── performance-now@0.2.0
  └── tween-functions@1.2.0
```
You've successfully setup [NativeBase](http://nativebase.io/) with your [React Native](https://facebook.github.io/react-native/) app. Your React Native app is now all set to run on iOS and Android simulator.



### Installing Peer Dependencies
The peer dependencies included from any npm package does not automatically get installed. Your application will need to depend on it explicitly. [NativeBase](http://nativebase.io/) includes [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) as one of its peer dependency. So here we help you with the setup.

#### iOS
* **On Terminal**
  * React Native < 0.29
    ```js
    $rnpm link
    ```
  * React Native >= 0.29
    ```js
    $react-native link react-native-vector-icons
    ```
* **Manually**
  If you want to use any of the bundled icons, you need to add the icon fonts to your Xcode project. Follow these steps:
  * Right click on you project in Xcode and select **Add files to "AwesomeNativeBase"**.
  * Browse to <code>node_modules/react-native-vector-icons</code> and select the folder **Fonts**
    Make sure your app is checked under **"Add to targets"** and that **"Create groups"** is checked if you add the whole folder.
  * Edit **Info.plist** and add a property called **Fonts provided by application** (or **UIAppFonts** if Xcode won't       autocomplete/not using Xcode) and type in the files you just added.

    This is how it looks:
    <img class="img-fix" src="{{('/docs/assets/installation.png')}}" alt="" style="padding-top: 10px; padding-bottom:10px">
  * You need to recompile your project after adding new fonts, also ensure that they also appear under **Copy Bundle Resources** in **Build Phases**.






#### Android
* **On Terminal**
  * React Native < 0.29
    ```js
    $rnpm link
    ```
  * React Native >= 0.29
    ```js
    $react-native link react-native-vector-icons</code>
    ```
* **With Gradle**
  * Edit <code>android/app/build.gradle</code> and add the following:
  ```js
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
  ```
  * To customize the files being copied, add the following instead:
  <pre><code class="language-groovy">project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ]             // font filenames
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"</code></pre>
* **Manually**
  * Copy the contents in the **Fonts** folder to <code>android/app/src/main/assets/fonts</code>.
  * Edit <code>android/settings.gradle</code> and add the following:
  ```js
  include ':react-native-vector-icons'
  project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
  ```
  * Edit <code>android/app/build.gradle</code> and add the following:
  ```js
  dependencies {
    .  .  .
    compile project(':react-native-vector-icons')
  }
  ```
  * React Native < 0.29

    Edit <code>android/app/src/main/java/com/awesomenativebase/MainActivity.java</code> and add the following:
    <pre><code class="language-java">package com.awesomenativebase;
    .  .  .
    import com.oblador.vectoricons.VectorIconsPackage;
    .  .  .

    public class MainActivity extends ReactActivity {
        .  .  .
        &#64;Override
        protected List&lt;ReactPackage> getPackages() {
            return Arrays.&lt;ReactPackage>asList(
                new MainReactPackage(),
                .  .  .
                new VectorIconsPackage(),
                .  .  .
            );
        }
    }
    </code></pre>
  * React Native >= 0.29

    Edit <code>android/app/src/main/java/com/awesomenativebase/MainApplication.java</code> and add the following:
    <pre><code class="language-java">package com.awesomenativebase;
    .  .  .
    import com.oblador.vectoricons.VectorIconsPackage;
    .  .  .

    public class MainApplication extends Application implements ReactApplication {
        .  .  .
        &#64;Override
        protected List&lt;ReactPackage> getPackages() {
            return Arrays.&lt;ReactPackage>asList(
                new MainReactPackage(),
                .  .  .
                new VectorIconsPackage(),
                .  .  .
            );
        }
    }
    </code></pre>
