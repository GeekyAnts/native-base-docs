# Form

[NativeBase](http://nativebase.io/) makes use of <code>List</code> to design Forms that include group of related input components. Include any combination of NativeBase components to make up your form.<br/>
Input is a NativeBase component built on top of React Native's <TextInput>. Item component is wrap around it apply the specific styles.
A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.<br />
Note: Form in native base is just a wrapper around the inputs and hence has no onSubmit function.<br />
**Contents:**
* [Fixed Label](COMPONENTS.md#Fixed_Label)
* [Inline Label](COMPONENTS.md#Inline_Label)
* [Floating Label](COMPONENTS.md#Floating_Label)
* [Stacked Label](COMPONENTS.md#Stacked_Label)
* [Regular Textbox](COMPONENTS.md#Regular_Textbox)
* [Underlined Textbox](COMPONENTS.md#Underlined_Textbox)
* [Rounded Textbox](COMPONENTS.md#Rounded_Textbox)
* [Icon Textbox](COMPONENTS.md#Icon_Textbox)
* [Success Input Textbox](COMPONENTS.md#Success_Input_Textbox)
* [Error Input Textbox](COMPONENTS.md#Error_Input_Textbox)
* [Disabled Textbox](COMPONENTS.md#Disabled_Textbox)

![Preview ios Form](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/form.png)
![Preview android Form](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/form.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Item, Label, Left, Body, Right } from 'native-base/ui';
​const PickerItem = Picker.Item;
export default class FormExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Item>
                        &lt;Label>First Name&lt;Label>
                        &lt;Input />
                    &lt;Item>
                    &lt;Item inlineLabel>
                        &lt;Label>Last Name&lt;Label>
                        &lt;Input />
                    &lt;Item>
                    &lt;Item floatingLabel>
                        &lt;Label>Floating Label&lt;Label>
                        &lt;Input />
                    &lt;Item>
                    &lt;InputGroup>
                        &lt;Icon name="ios-person" style=&#123;{ color: '#0A69FE' }} />
                        &lt;Input placeholder="EMAIL" />
                    &lt;/InputGroup>
                    &lt;InputGroup>
                        &lt;Icon name="ios-unlock" style=&#123;{ color: '#0A69FE' }} />
                        &lt;Input placeholder="PASSWORD" secureTextEntry />
                    &lt;/InputGroup>
                    &lt;InputGroup>
                        &lt;Icon name="ios-call" style=&#123;{ color: '#0A69FE' }} />
                        &lt;Input placeholder="PHONE" keyboardType="numeric" />
                    &lt;/InputGroup>
                    &lt;Item stackedLabel>
                        &lt;Label>Permanent Address&lt;Label>
                        &lt;Input placeholder="Address" />
                    &lt;Item>
                    &lt;Button style=&#123;{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        &lt;Text>Sign Up&lt;/Text>
                    &lt;/Button>
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
