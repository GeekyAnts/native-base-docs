<div id="quick-setup">

    <h3>Quick Setup</h3>

    <p style="padding-bottom: 10px;">
        To have <a href="http://nativebase.io/">NativeBase</a> components running onto your native apps, all you need to do is create a fresh <a href="https://facebook.github.io/react-native/">React Native</a> project and install the NativeBase command line tools.
    </p>

    <b>System Requirements</b>
    <ul style="line-height: 1.9em; padding-bottom: 10px;">
        <li>
            Globally installed <a href="https://nodejs.org/en/">node</a> >= 4.0
        </li>
        <li>
            Globally installed <a href="https://www.npmjs.com/">npm</a> >= 3.0
        </li>
        <li>
            Globally installed <a href="https://github.com/rnpm/rnpm">rnpm</a>
            <font size="2">
                <i>
                    (only if React Native version < 0.29)
                </i>
            </font>
        </li>
        <li>
            Globally installed <a href="https://facebook.github.io/react-native/docs/getting-started.html">React Native CLI</a> which allow you to easily create and initialize projects.   
        </li>
        <li>
            <a href="{{('/docs/Compatibility.md')}}">Click here</a> to know about React Native version compatibility with NativeBase.
        </li>
    </ul>



    <font size="2"><i>Create React Native project</i></font>

<pre class="command-line language-xxx" data-output="2-23"><code>react-native init AwesomeNativeBase

This will walk you through creating a new React Native project in /User/localhost/AwesomeNativeBase
Installing react-native package from npm...
Setting up new React Native app in /User/localhost/AwesomeNativeBase
Installing React...
Installing Jest...
AwesomeNativeBase@0.0.1 /User/localhost/AwesomeNativeBase
└── react@15.3.2
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

cd AwesomeNativeBase</code></pre><br />


    <font size="2"><i>Install NativeBase</i></font>

<pre class="command-line language-xxx" data-output="2-27"><code>npm install native-base --save

AwesomeNativeBase@0.0.1 /User/localhost/AwesomeNativeBase
└─┬ native-base@0.5.13
  ├── clamp@1.0.1
  ├─┬ color@0.11.4
  │ ├─┬ color-convert@1.7.0
  │ │ └── color-name@1.1.1
  │ └── color-string@0.3.0
  ├── lodash@4.11.2
  ├── react-native-checkbox@1.0.15
  ├─┬ react-native-easy-grid@0.1.5
  │ └── lodash@4.16.6
  ├── react-native-keyboard-aware-scroll-view@0.2.0
  └─┬ react-native-vector-icons@2.1.0
    ├── lodash@4.16.6
    └─┬ yargs@4.8.1
      ├── cliui@3.2.0
      ├── window-size@0.2.0
      └─┬ yargs-parser@2.4.1
        └── camelcase@3.0.0</code></pre><br />

    <p>
        You've successfully setup <a href="http://nativebase.io/">NativeBase</a> with your <a href="https://facebook.github.io/react-native/">React Native</a> app. Your React Native app is now all set to run on iOS and Android simulator.
    </p>
</div>



<br />

<div id="installing-peer-dependencies" style="padding-top: 35px">

    <h3>Installing Peer Dependencies</h3>

    <p style="padding-bottom: 15px;">
        The peer dependencies included from any npm package does not automatically get installed. Your application will need to depend on it explicitly. <a href="http://nativebase.io/">NativeBase</a> includes <a href="https://github.com/oblador/react-native-vector-icons">React Native Vector Icons</a> as one of its peer dependency. So here we help you with the setup.
    </p>

    <h4>iOS</h4>
    <ul style="padding-bottom: 10px;">
        <li>
            <b>On Terminal</b>
        </li>
        <ul style="padding-bottom: 10px">
            <li>
                React Native < 0.29<br />
                <code>$rnpm link</code>
            </li>
            <li>
                React Native >= 0.29<br />
                <code>$react-native link react-native-vector-icons</code>
            </li>
        </ul>



        <li>
            <b>Manually</b><br />
            If you want to use any of the bundled icons, you need to add the icon fonts to your Xcode project. Follow these steps:
        </li>
        <ul>
            <li>
                Right click on you project in Xcode and select <b>Add files to "AwesomeNativeBase"</b>.
            </li>
            <li>
                Browse to <code>node_modules/react-native-vector-icons</code> and select the folder <b>Fonts</b>.<br />
                Make sure your app is checked under <b>"Add to targets"</b> and that <b>"Create groups"</b> is checked if you add the whole folder.
            </li>
            <li>
                Edit <b>Info.plist</b> and add a property called <b>Fonts provided by application</b> (or <b>UIAppFonts</b> if Xcode won't autocomplete/not using Xcode) and type in the files you just added.<br />
                This is how it looks:<br />
                <img class="img-fix" src="{{('/docs/assets/installation.png')}}" alt="" style="padding-top: 10px; padding-bottom:10px">
            </li>
            <li>
                You need to recompile your project after adding new fonts, also ensure that they also appear under <b>Copy Bundle Resources</b> in <b>Build Phases</b>.
            </li>
        </ul>
    </ul>






    <h4>Android</h4>
    <ul>
       <li>
            <b>On Terminal</b>
        </li>
        <ul style="padding-bottom: 10px">
            <li>
                React Native < 0.29<br />
                <code>$rnpm link</code>
            </li>
            <li>
                React Native >= 0.29<br />
                <code>$react-native link react-native-vector-icons</code>
            </li>
        </ul>



        <li>
            <b>With Gradle</b>
        </li>
        <ul>
            <li style="padding-bottom: 10px">
                Edit <code>android/app/build.gradle</code> and add the following:<br />
<pre><code class="language-groovy">apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"</code></pre>
            </li>

            <li style="padding-bottom: 20px">
                To customize the files being copied, add the following instead:<br />
<pre><code class="language-groovy">project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ]             // font filenames
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"</code></pre>
            </li>
        </ul>




        <li>
            <b>Manually</b></li>
        <ul>
            <li>
                Copy the contents in the <b>Fonts</b> folder to <code>android/app/src/main/assets/fonts</code>.
            </li>

            <li style="padding-bottom: 10px">
                Edit <code>android/settings.gradle</code> and add the following:
<pre><code class="language-groovy">include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')</code></pre>
            </li>

            <li style="padding-bottom: 10px">
                Edit <code>android/app/build.gradle</code> and add the following:
<pre><code class="language-groovy">dependencies {
    .  .  .
    compile project(':react-native-vector-icons')
}</code></pre>
            </li>

            <li style="padding-bottom: 10px">
                React Native < 0.29<br />
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
            </li>

            <li style="padding-bottom: 10px">
                React Native >= 0.29<br />
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
            </li>
        </ul>
    </ul>
</div>
