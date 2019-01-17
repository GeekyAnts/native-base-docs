# FAQs

<br />
<a id="installation-failed"></a>
#### I am facing issues while setting up.

<b>Solution:</b>

Please verify the system requirements mentioned in [installation](/docs/GetStarted.md) procedure.

<br />
<hr>
<br />

<a id="watchman-error"></a>
#### I am getting a watchman error when I run npm install.

<b>Solution:</b>

<ul>
  <li> Update <code>watchman</code> to the latest version. </li>
  <li> Run <code>npm</code> install again. </li>
</ul>

<br />
<hr>
<br />

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

<br />
<hr>
<br />

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
    manual setup mentioned in the docs.
</div>

<br />
<hr>
<br />

<a id="override-style"></a>
#### How to override style in NativeBase?

<div id="faq-5" class="panel-collapse collapse">
    <div class="panel-body">
        I didn't find a way to override style. <br />
        How can I include React StyleSheet into my app?
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        <a href="https://nativebase.io/">NativeBase</a> is built on top of <a href="https://facebook.github.io/react-native/">React Native</a>.<br />
        Hence with any component you can pass the style property which will be merged to the default style of that component.<br />

        Example:
        <pre><code class="language-jsx">&lt;Button style=&#123;{backgroundColor: '#FF0000'}}>
        Click me!&lt;/Button></code></pre>
    </div>
</div>

<br />
<hr>
<br />

<a id="add-events"></a>
#### How do I add events with the components?

<div id="faq-6" class="panel-collapse collapse">
    <div class="panel-body">
        What events are available for the components?<br />
        Example buttons, list items etc.
    </div>
    <br />
    <div class="panel-footer">
        <b>Solution:</b> <br />
        The <a href="https://nativebase.io/">NativeBase</a> components are built on top of <a href="https://facebook.github.io/react-native/">React Native</a> components. Hence the callback events of React Native holds good with NativeBase components. <br />

        <i>Example:</i> The <code>Button</code> component is actually a wrapper of the <code>TouchableOpacity</code> component of React Native. So you can just use the <code>onPress</code> callback function for event handling.<br /><br />

        Refer the cheatsheet
        for more details.
    </div>
</div>

<br />
<hr>
<br />

<a id="none"></a>
#### None of the above, I have a different error


<div id="faq-7" class="panel-collapse collapse">
    <div class="panel-body">
        The above listed FAQs were not of your help?<br />
        Facing some other issues?
    </div>
    <br />
    <div class="panel-footer">
        <b>Solution:</b> <br />
        We welcome all your issues. Feel free to raise issues on GitHub.<br />
        Please go through the gitflow to report issues.
    </div>
</div>

<br />
<hr>
<br />

<a id="customize"></a>
#### How to customize components of NativeBase?

<div id="faq-8" class="panel-collapse collapse">
    <div class="panel-body">
        I didn't find a way to customize the default styles of NativeBase components. <br />
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        <a href="https://nativebase.io/">NativeBase</a> provides a separate file inclusive of color schemes for all components.<br />
        Go through customize section of docs.
    </div>
</div>

<br />
<hr>
<br />

<a id="list-icons"></a>
#### I want list of icons with their names used in NativeBase

<div id="faq-9" class="panel-collapse collapse">
    <div class="panel-body">
        Docs says <b>Choose from 700+ Icons</b><br />
        I want the complete list of icons containing the name and image of the icons that are ready to use.
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        NativeBase use Icons from <a href="https://github.com/oblador/react-native-vector-icons">React Native Vector Icons</a>.<br />
        Hence the collection of icons from Vector Icons holds good with that in NativeBase.
    </div>
</div>

<br />
<hr>
<br />

<a id="FlatList-inside-Content-item"></a>
#### FlatList inside Content item invokes onEndReached infinite times

<div id="faq-10" class="panel-collapse collapse">
    <div class="panel-body">
        I was facing the issue that <code>onEndReached</code> was getting called again and again after an interval when setting onEndReachedThreshold greater than 0.
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        Use prop <code>contentContainerStyle</code> of <code>Content</code> component as in<br/>
        <code>{% raw %}contentContainerStyle={{flex: 1}}{% endraw %}</code>
</div>

<br />
<hr>
<br />

<a id="styling-Tabs"></a>
#### I want to style Tabs, change text color of individual Tab

<div id="faq-11" class="panel-collapse collapse">
    <div class="panel-body">
        I want to change width of Tabs, and change TextColor of individual Tab.
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        Use <code>tabsContainerStyle</code> to style <code>Tabs</code> component,<br/>
        Use <code>textStyle</code> and <code>activeTextStyle</code> to change text color of individual <code>Tab</code> component, and <code>tabStyle</code> to style individual <code>Tab</code> component.<br/>
    </div>
</div>

<br />
<hr>
<br />

<a id="Left-component-alignment"></a>
#### Content of Left Component not being rendered at the left of the screen

<div id="faq-12" class="panel-collapse collapse">
    <div class="panel-body">
        I am not sure why the content of <code>Left</code> appears at somewhere middle of the screen. It should appear at left side.
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        If you use <code>Left</code> or <code>Body</code> or <code>Right</code> with any NativeBase component, you must include these 3, to align the components.
    </div>
</div>

<br />
<hr>
<br />

<a id="reference-of-Input-floatingLabel"></a>
#### I want to get the reference of native-base floatinglabel Input

<div id="faq-13" class="panel-collapse collapse">
    <div class="panel-body">
        How can I get the reference of native-base floatinglabel Input?
    </div>
    <br />
    <div class="panel-footer">
        <b> Solution: </b><br />
        When using floatingLabel, use <code>getRef</code> to get the reference of <code>Input</code> component. Always wrap floatingLabel component with <code>Form</code>.
    </div>
</div>

<br />
<hr>
<br />



