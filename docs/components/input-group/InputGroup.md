<div class="section" id="inputGroup">

    <h2>InputGroup</h2>

    <p>
        This is a <a href="http://nativebase.io/">NativeBase</a> component built on top of <a href="https://facebook.github.io/react-native/">React Native</a>'s <code>&lt;TextInput></code>.<br />

        A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.
    </p><br />

    <p>
        <ul style="list-style-type:none">
        	<li><b>Contents:</b></li>
            <li><a href="/docs/components/input-group/Regular.md">Regular Textbox</a></li>
            <li><a href="/docs/components/input-group/Underlined.md">Underlined Textbox</a></li>
            <li><a href="/docs/components/input-group/Rounded.md">Rounded Textbox</a></li>
            <li><a href="/docs/components/input-group/Icon.md">Icon Textbox</a></li>
            <li><a href="/docs/components/input-group/Success.md">Success Input Textbox</a></li>
            <li><a href="/docs/components/input-group/Error.md">Error Input Textbox</a></li>
            <li><a href="/docs/components/input-group/Disabled.md">Disabled Textbox</a></li>
        </ul>
    </p><br />

    <i>General Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base';
​
export default class InputGroupExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup>
                        &lt;Input />
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <ul>
        <li>
            <a href="http://nativebase.io/">NativeBase</a>
            extends <a href="https://facebook.github.io/react-native/">React Native</a>'s
            <code>&lt;TextInput/&gt;</code> by adding several attributes and props to
            <code>&lt;Input /&gt;</code>.
        </li>
        <li>NativeBase defines textbox for you, by just defining <code>&lt;Input /></code> in your app.</li>
        <li>Supports custom styles on both iOS and Android devices.</li>
        <li>InputGroup component renders elements such as: Text, Input, Icon.
        </li>
        <li>
            The props of <code>&lt;TextInput></code> are smoothly applicable to <code>&lt;Input></code>.
        </li>
        <li>InputGroup also takes in props value.</li>
        <li>
            <i>
                Replacing Component for InputGroup:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/view.html">
                    <code>&lt;View></code>
                </a>
            </i>
        </li>
        <li>
            <i>
                Replacing Component for Input:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/textinput.html">
                    <code>&lt;TextInput></code>
                </a>
            </i>
        </li>
    </ul><br />

    <b>Configuration</b><br />
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>placeholder</td>
                <td> - </td>
                <td> - </td>
                <td>The string that will be rendered before text input has been entered. Optional user-defined placeholder for textbox.</td>
            </tr>
            <tr>
                <td>borderType</td>
                <td>underline</td>
                <td>regular <br />underline <br />rounded</td>
                <td>Wraps the textbox with predefined border options.</td>
            </tr>
            <tr>
                <td>secureTextEntry</td>
                <td>false</td>
                <td>true <br /> false</td>
                <td>If true, the text input obscures the text entered so that sensitive text like passwords stay secure.<br />
                This prop can be passed to <code>&lt;Input></code>.</td>
            </tr>
            <tr>
                <td>iconRight</td>
                <td>true</td>
                <td>true <br /> false</td>
                <td>If true, the icon in the input text box appears to the right.</td>
            </tr>
            <tr>
                <td>success</td>
                <td> - </td>
                <td> - </td>
                <td>The border color of textbox for valid input.</td>
            </tr>
            <tr>
                <td>error</td>
                <td> - </td>
                <td> - </td>
                <td>The border color of textbox for invalid input.</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td> - </td>
                <td> - </td>
                <td>Disables inputting data.</td>
            </tr>
        </tbody>
    </table><br />

</div>
