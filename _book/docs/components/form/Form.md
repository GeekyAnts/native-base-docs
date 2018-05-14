## Form

[NativeBase](https://nativebase.io/) makes use of <code>List</code> to design Forms that include group of related input components. Include any combination of NativeBase components to make up your form.<br/>
Input is a NativeBase component built on top of React Native's <code>TextInput</code>. A foundational component for inputting text into the app via a keyboard. Item component wrapper around it that apply specific styles.<br />

Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.<br />
Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.<br />

Replacing Component:
*   <b>Form</b>: React Native [View](https://facebook.github.io/react-native/docs/view.html)
*   <b>Item</b>: React Native [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html)
*   <b>Input</b>: React Native [TextInput](http://facebook.github.io/react-native/docs/textinput.html)
*   <b>Label</b>: React Native [Text](http://facebook.github.io/react-native/docs/text.html)

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
* [Textarea](Components.md#textarea-textbox-headref)

![Preview ios Form](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/ios/input-placeholder.png)
![Preview android Form](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/android/input-placeholder.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
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
                <td>true</td>
                <td>boolean</td>
                <td>
                    Label is fixed to the left of Input and does not hide when text is entered.
                </td>
            </tr>
            <tr>
                <td>floatingLabel</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                    Label that animates upward when input is selected and animates downward when input is erased.
                </td>
            </tr>
            <tr>
                <td>inlineLabel</td>
                <td> - </td>
                <td>boolean</td>
                <td>
                    Label placed to the left of input element and does not hide when text is entered. This can also be used along with placeholder.
                </td>
            </tr>
            <tr>
                <td>stackedLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Places the label on top of input element which appears like a stack. This can also be used along with placeholder.
                </td>
            </tr>
            <tr>
                <td>bordered</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Includes border with the textbox
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
                <td>regular</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Includes rectangluar border with the textbox.
                </td>
            </tr>
            <tr>
                <td>underline</td>
                <td> true </td>
                <td> - </td>
                <td>
                    Includes underline border with the textbox
                </td>
            </tr>
            <tr>
                <td>disabled</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Disables inputting data
                </td>
            </tr>
            <tr>
                <td>placeholderLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Renders the same way the TextInput does with the form styling of NativeBase
                </td>
            </tr>
            <tr>
                <td>placeholder</td>
                <td> - </td>
                <td> - </td>
                <td>
                    String that renders before text input is entered
                </td>
            </tr>
            <tr>
                <td>last</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Styles last Item of the Form
                </td>
            </tr>
            <tr>
                <td>error</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Border color of textbox for invalid input
                </td>
            </tr>
            <tr>
                <td>success</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Border color of textbox for valid input
                </td>
            </tr>
        </tbody>
    </table><br />

**Note:** Form in NativeBase is just a wrapper around the inputs and hence has no <code>onSubmit</code> function.<br /><br />
