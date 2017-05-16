## button-def-headref
## Button

Button is a pure [NativeBase](https://nativebase.io/) component.<br />
Buttons are the integral part of an application. They are used for various purposes like, submit or reset a form, navigate, performing interactive actions such as showing or hiding something in an app on click of the button, etc.<br />


![Preview ios button-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/screenshots/ios/buttons.png)
![Preview android button-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/screenshots/android/buttons.png)

**Contents:**
* [Button Theme](Components.md#button-theme-headref)
* [Block Button](Components.md#button-block-headref)
* [Full Button](Components.md#button-full-headref)
* [Rounded Button](Components.md#button-rounded-headref)
* [Icon Button](Components.md#button-icon-headref)
* [Outline Button](Components.md#button-outline-headref)
* [Transparent Button](Components.md#button-transparent-headref)
* [Button Size](Components.md#button-size-headref)
* [Disabled Button](Components.md#button-disabled-headref)


*Syntax*
{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
export default class ButtonExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    // NativeBase default style
                    <Button>
                        <Text>Click Me! </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
{%- language name="Advanced", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
export default class ButtonExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    // NativeBase default style
                    <Button>
                      <Text> Click Me! </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
{%- endcodetabs %}<br />
* [NativeBase](https://nativebase.io/) provides <code>Button</code> component which is readily not available in [React Native](https://facebook.github.io/react-native/).
* Supports React Native app on both iOS and Android devices.
* Button component takes input such as: Text, Icon, Text with Icon.
* NativeBase gives you privilege to customize the props of this component.<br />
  *Example*: To have custom style for button, include them in <code>style</code> prop of button.
* Intakes user-defined styles.
* NativeBase has provided its users with enormous list of <code>props</code> that can be used with Button.
* *Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;TouchableOpacity></code>](https://facebook.github.io/react-native/docs/touchableopacity.html)*

<br />
**Configuration**

<table class = "table table-bordered">
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
                <td>style</td>
                <td> - </td>
                <td> - </td>
                <td>Defines button style</td>
            </tr>
            <tr>
                <td>active</td>
                <td> - </td>
                <td> true </td>
                <td>Boolean value to describe state of Button</td>
            </tr>
            <tr>
                <td>block</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Block level button
                </td>
            </tr>
            <tr>
                <td>bordered</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Applies outline button style.
                </td>
            </tr>
            <tr>
                <td>disabled</td>
                <td> true </td>
                <td> true false </td>
                <td>
                    Disables click option for button
                </td>
            </tr>
            <tr>
                <td>large</td>
                <td> - </td>
                <td> - </td>
                <td>
                    For large size button
                </td>
            </tr>
            <tr>
                <td>rounded</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Renders button with slightly round shaped edges.
                </td>
            </tr>
            <tr>
                <td>small</td>
                <td> - </td>
                <td> - </td>
                <td>
                    For small size button
                </td>
            </tr>
            <tr>
                <td>full</td>
                <td> - </td>
                <td> - </td>
                <td>
                    full width button
                </td>
            </tr>
            <tr>
                <td>iconRight</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Right Padding for the icon
                </td>
            </tr>
            <tr>
                <td>iconLeft</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Left Padding for the icon.
                </td>
            </tr>
            <tr>
                <td>primary</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a blue background color to your component
                </td>
            </tr>
            <tr>
                <td>success</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a green background color to your component
                </td>
            </tr>
            <tr>
                <td>light</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a light white background color to your component.
                </td>
            </tr>
            <tr>
                <td>info</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a light blue background color to your component as shown
                </td>
            </tr>
            <tr>
                <td>warning</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a yellow warning background color to your component
                </td>
            </tr>
            <tr>
                <td>danger</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a red background color to your component
                </td>
            </tr>
            <tr>
                <td>dark</td>
                <td> - </td>
                <td> true,false </td>
                <td>
                    Add a black background color to your component
                </td>
            </tr>
        </tbody>
    </table><br />
