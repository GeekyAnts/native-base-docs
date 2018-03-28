##theme-font-headref
## Theme Font

Having different font types in your [React Native](https://facebook.github.io/react-native/) apps is not tough any more.[NativeBase](https://nativebase.io/) provides you with a set of nine font families.<br />

To include these fonts into your app, go to `Themes/myTheme.js` and  replace value for <code>fontFamily</code> with your choice of font name.


Font families included with NativeBase:
* Entypo
* EvilIcons
* FontAwesome
* Foundation
* Ionicons
* MaterialIcons
* Octicons
* Roboto
* Roboto_medium
* SimpleLineIcons
* Zocial


NativeBase allows you to add more font styles on your own.


#### iOS
* **With react-native**<br />
Run this command on your terminal<br />
<pre class="command-line language-xxx" data-output="2-19"><code>react-native link</code></pre>
* **Manually**
  * Browse through **node_modules** and drag the font file the ones you want to your project in Xcode. Make sure your app is checked under **"Add to targets"** and that **"Create groups"** is checked if you add the whole folder.
  * Edit **Info.plist** and include in property called **Fonts provided by application** and type in the files you just added.

#### Android
* **With react-native**<br />
Run this command on your terminal<br />
<pre class="command-line language-xxx" data-output="2-19"><code>react-native link</code></pre>
* **Manually**
  * Copy the font files to <code>android/app/src/main/assets/fonts.</code>
