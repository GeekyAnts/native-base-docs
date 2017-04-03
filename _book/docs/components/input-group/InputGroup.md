# InputGroup Default

This is a [NativeBase](https://nativebase.io/) component built on top of [React Native](https://facebook.github.io/react-native/)'s <code>&lt;TextInput></code>.<br />
A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.

![Preview ios InputGroup_Default](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/inputgroup.png)
![Preview android InputGroup_Default](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/inputgroup.png)

**Contents:**
* [Regular Textbox](README.md#Regular_Textbox)
* [Underlined Textbox](README.md#Underlined_Textbox)
* [Rounded Textbox](README.md#Rounded_Textbox)
* [Icon Textbox](README.md#Icon_Textbox)
* [Success Input Textbox](README.md#Success_Input_Textbox)
* [Error Input Textbox](README.md#Error_Input_Textbox)
* [Disabled Textbox](README.md#Disabled_Textbox)

*General Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base/ui';
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

* [NativeBase](https://nativebase.io/) extends [React Native](https://facebook.github.io/react-native/)'s <code>&lt;TextInput/&gt;</code> by adding several attributes and props to <code>&lt;Input /&gt;</code>.
* NativeBase defines textbox for you, by just defining <code>&lt;Input /></code> in your app.
* Supports custom styles on both iOS and Android devices.
* InputGroup component renders elements such as: Text, Input, Icon.
* The props of <code>&lt;TextInput></code> are smoothly applicable to <code>&lt;Input></code>.
* InputGroup also takes in props value.</li>
* *Replacing Component for InputGroup: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*
* *Replacing Component for Input: [React Native](https://facebook.github.io/react-native/) [<code>&lt;TextInput></code>](https://facebook.github.io/react-native/docs/textinput.html)*

**Configuration**

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
                <td>regular</td>
                <td>false</td>
                <td>true <br />false <br />
                <td>Wraps the textbox with sharp border.</td>
            </tr>
            <tr>
                <td>underline</td>
                <td>false</td>
                <td>true <br />false <br />
                <td>textbox with only bottom border.</td>
            </tr>
            <tr>
                <td>rounded</td>
                <td>false</td>
                <td>true <br />false <br />
                <td>Wraps the textbox with rounded border.</td>
            </tr>
            <tr>
                <td>secureTextEntry</td>
                <td>false</td>
                <td>true <br /> false</td>
                <td>If true, the text input obscures the text entered so that sensitive text like passwords stay secure.<br />
                This prop can be passed to <code>&lt;Input></code>.</td>
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
