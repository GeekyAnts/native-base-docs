# Form

[NativeBase](https://nativebase.io/) makes use of <code>List</code> to design Forms that include group of related input components. Include any combination of NativeBase components to make up your form.<br/>
Input is a NativeBase component built on top of React Native's <TextInput>. Item component is wrap around it apply the specific styles.
A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.<br />
Note: Form in native base is just a wrapper around the inputs and hence has no onSubmit function.<br />
**Contents:**
* [Fixed Label](Components.md#fixed-label-headref)
* [Inline Label](Components.md#inline-label-headref)
* [Floating Label](Components.md#floating-label-headref)
* [Stacked Label](Components.md#stacked-label-headref)
* [Regular Textbox](Components.md#regular-textbox-headref)
* [Underlined Textbox](Components.md#underlined-textbox-headref)
* [Rounded Textbox](Components.md#rounded-textbox-headref)
* [Icon Textbox](Components.md#icon-textbox-headref)
* [Success Input Textbox](Components.md#success-textbox-headref)
* [Error Input Textbox](Components.md#error-textbox-headref)
* [Disabled Textbox](Components.md#disabled-textbox-headref)

![Preview ios Form](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/placeholderInput.png)
![Preview android Form](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/placeholderInput.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
export default class FormExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Form>
                        &lt;Item>
                            &lt;Input placeholder="Username" />
                        &lt;/Item>
                        &lt;Item last>
                            &lt;Input placeholder="Password" />
                        &lt;/Item>
                    &lt;/Form>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

**Configuration**

<table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>fixedLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Label is Fixed to the left of the Input and does not hide when text is entered.
                </td>
            </tr>
            <tr>
                <td>floatingLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Label that animates upwards when the input is selected and animates downward when input is erased.
                </td>
            </tr>
            <tr>
                <td>inlineLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Label placed to the left of the input element. When the user enters text, the label does not hide. This can also be used along with placeholder.
                </td>
            </tr>
            <tr>
                <td>stackedLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Places the label on top of the input element which appears like a stack. This can also be used along with placeholder.
                </td>
            </tr>
            <tr>
                <td>placeholderLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Renders the same way the TextInput does with the form styling of NativeBase.
                </td>
            </tr>
            <tr>
                <td>bordered</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Includes border with the textbox.
                </td>
            </tr>
            <tr>
                <td>rounded</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Includes rounded border with the textbox.
                </td>
            </tr>
            <tr>
                <td>underline</td>
                <td> true </td>
                <td> - </td>
                <td>
                    Includes and underline border with the textbox.
                </td>
            </tr>
            <tr>
                <td>disabled</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Disables inputting data.
                </td>
            </tr>
            <tr>
                <td>error</td>
                <td> - </td>
                <td> - </td>
                <td>
                    The border color of textbox for invalid input.
                </td>
            </tr>
            <tr>
                <td>placeholder</td>
                <td> - </td>
                <td> - </td>
                <td>
                    The string that will be rendered before text input has been entered. Optional user-defined placeholder for textbox.
                </td>
            </tr>
            <tr>
                <td>secureTextEntry</td>
                <td> false </td>
                <td> true false</td>
                <td>
                If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
                This prop can be passed to Input.
                </td>
            </tr>
            <tr>
                <td>success</td>
                <td> - </td>
                <td> - </td>
                <td>
                    The border color of textbox for valid input.
                </td>
            </tr>
            <tr>
                <td>last</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Style the Form Item for the last Item of the Form.
                </td>
            </tr>
        </tbody>
    </table><br />
