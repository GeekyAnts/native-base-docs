<div class="section" id="themeFont">

    <h3>Theme Font</h3>

    <p>
        Having different font types in your <a href="https://facebook.github.io/react-native/">React Native</a> apps is not tough any more.<br />
        <a href="http://nativebase.io/">NativeBase</a> provides you with a set of nine font families.<br />
    </p>

    <ul style="padding-bottom: 10px; ">
        <li>
            To include these fonts into your app, go to <b>Themes/myTheme.js</b>
        </li>
        <li>
            Replace value for <code>fontFamily</code> with your choice of font name.
        </li>
    </ul>

    Font families included with NativeBase:
    <ul style="padding-bottom: 10px;">
        <li>Andale Mono</li>
        <li>Arial</li>
        <li>Arial Black</li>
        <li>Chalkboard</li>
        <li>Cochin</li>
        <li>Comic Sans MS</li>
        <li>Courier New</li>
        <li>Devanagiri</li>
        <li>Georgia</li>
        <li>Microsoft Sans Serif</li>
        <li>Skia</li>
        <li>Times New Roman</li>
    </ul>



    <p>
        NativeBase allows you to add more font styles on your own.
    </p>

    <h4>iOS</h4>
    <ul>
        <li>
            <b>With rnpm</b><br />
            Run this command on your terminal<br />
<pre class="command-line language-xxx" data-output="2-19"><code>rnpm link</code></pre>
        </li>
        <li>
            <b>Manually</b>
        </li>
        <ul>
            <li>
                Browse through <b>node_modules</b> and drag the font file the ones you want to your project in Xcode. Make sure your app is checked under <b>"Add to targets"</b> and that <b>"Create groups"</b> is checked if you add the whole folder.
            </li>
            <li>
                Edit <b>Info.plist</b> and include in property called <b>Fonts provided by application</b> and type in the files you just added.
            </li>
        </ul>
    </ul>

    <h4>Android</h4>
    <ul>
        <li>
            <b>With rnpm</b><br />
            Run this command on your terminal<br />
<pre class="command-line language-xxx" data-output="2-19"><code>rnpm link</code></pre>
        </li>
        <li>
            <b>Manually</b>
        </li>
        <ul>
            <li>
                Copy the font files to <code>android/app/src/main/assets/fonts.</code>
            </li>
        </ul>
    </ul><br />


</div>
