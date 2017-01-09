# FAQs


- [Installation Failed](#installation-failed)
- [Watchman Error](#watchman-error)
- [Unrecognized font family ionicons](#unrecognized-font)
- [react-native-vector-icons peer installation failed](#icons-peer-installation-failed)
- [How to override style in NativeBase?](#override-style)
- [How do I add events with the components?](#general-build-tools)
- [None of the above, I have a different error](#general-when-to-use)
- [How to customize components of NativeBase?](#general-only-react)
- [I want list of icons with their names used in NativeBase](#general-build-tools)


<a id="installation-failed"></a>
#### I am facing issues while setting up.

<b>Solution:</b>

Please verify the system requirements mentioned in [installation]('/docs/GetStarted.md') procedure.




<a id="watchman-error"></a>
#### I am getting a watchman error when I run npm install.

<b>Solution:</b>

<ul>
  <li> Update <code>watchman</code> to the latest version. </li>
  <li> Run <code>npm</code> install again. </li>
</ul>



<a id="unrecognized-font"></a>
#### Unrecognized font family ionicons

<div class="panel-body">
    When I run it in Xcode I'm getting a "Build Failed" error, with message:
    <ul>
        <li>
            ld: library not found for -lRNVectorIcons
        </li>
        <li>
            clang: error: linker command failed with exit code 1 (use -v to see invocation)
        </li>
    </ul>
</div>
<div class="panel-footer">
    <b>Solution:</b> <br />
    Linking the Vector Icons repo in Xcode will solve the issue.<br />
    More information about how to link libraries to your app.
    <font size="1">
        <a href="http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content">
            Click here
        </a>
    </font><br />
    If you still face the same issue, then restart packager and run from xcode.
</div>



<a id="icons-peer-installation-failed"></a>
#### react-native-vector-icons peer installation failed

<div class="panel-body">
    The react-native-vector-icons is always not installed.<br />
    I follow up the installation instruction by using <code>rnpm link</code>.<br />
    But this doesn't seem to link the package correctly.
</div>
<div class="panel-footer">
    <b>Probabilities:</b><br />
    <ol>
        <li>This might be the problem if your rootProject name is not correct at all places.</li>
        <li><b>rnpm link</b> might not work all the time.</li>
        <ul>
            <li>In case of android</li>
            <li>If React Native version in your app >= 0.29</li>
        </ul>
    </ol><br />

    <div style="padding-bottom: 20px;">
        <b>Solution 1:</b> <br />
        Check your rootProject name in react-native-vector-icons's <b><i>font.gradle</i></b>, in case if its hard coded there. This causes failure in linking because the rootProject name may not be same with the definition in <b><i>settings.gradle</i></b>.
    </div>
    <b>Solution 2:</b>
    Please complete the installation procedure for <b>react-native-vector-icons</b> by taking up the
    <a href="">
        manual setup
    </a> mentioned in the docs.
</div>


<a id="override-style"></a>
#### How to override style in NativeBase?

<div class="panel-heading">
    <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-5" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
        <h4 class="panel-title">
            How to override style in NativeBase?
            <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
        </h4>
    </a>
</div>
<div id="faq-5" class="panel-collapse collapse">
    <div class="panel-body">
        I didn't find a way to override style. <br />
        How can I include React StyleSheet into my app?
    </div>
    <div class="panel-footer">
        <b> Solution: </b><br />
        <a href="http://nativebase.io/">NativeBase</a> is built on top of <a href="https://facebook.github.io/react-native/">React Native</a>.<br />
        Hence with any component you can pass the style property which will be merged to the default style of that component.<br />

        Example: <pre><code class="language-jsx">&lt;Button style=&#123;{backgroundColor: '#FF0000'}}>
Click me!
&lt;/Button></code></pre>
    </div>
</div>
