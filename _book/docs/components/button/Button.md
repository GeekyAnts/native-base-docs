## button-def-headref
## Button

Button is a pure [NativeBase](https://nativebase.io/) component.<br />
Buttons are the integral part of an application. They are used for various purposes like, submit or reset a form, navigate, performing interactive actions such as showing or hiding something in an app on click of the button, etc.<br />

**Note:** Always import and use Text from NativeBase with Buttons. 

![Preview ios button-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.4.7/screenshots/ios/buttons.png)
![Preview android button-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.4.7/screenshots/android/buttons.png)

**Contents:**
* [Button Theme](Components.md#button-theme-headref)
* [Transparent Button](Components.md#button-transparent-headref)
* [Outline Button](Components.md#button-outline-headref)
* [Rounded Button](Components.md#button-rounded-headref)
* [Block Button](Components.md#button-block-headref)
* [Full Button](Components.md#button-full-headref)
* [Icon Button](Components.md#button-icon-headref)
* [Button Size](Components.md#button-size-headref)
* [Disabled Button](Components.md#button-disabled-headref)


*Syntax*
{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
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
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
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

* Supports React Native app on both iOS and Android devices.
* Button component takes input such as: Text, Icon, Text with Icon.
* NativeBase gives you privilege to customize the props of this component.<br />
  *Example*: To have custom style for button, include them in <code>style</code> prop of button.
* Intakes user-defined styles.
* You can change the default button text case(in Android) from variables file after [ejecting](http://docs.nativebase.io/Customize.html#theaming-nb-headref).
* NativeBase has provided its users with enormous list of <code>props</code> that can be used with Button.
* Replacing Component:
    -   React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html) for iOS
    -   React Native [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html) for Android

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
            <td>active</td>
            <td> - </td>
            <td> boolean </td>
            <td>State of button</td>
        </tr>
        <tr>
            <td>transparent</td>
            <td> true </td>
            <td> boolean </td>
            <td>Renders child element of button</td>
        </tr>
        <tr>
            <td>bordered</td>
            <td> - </td>
            <td> - </td>
            <td>Applies outline button style</td>
        </tr>
        <tr>
            <td>rounded</td>
            <td> - </td>
            <td> - </td>
            <td>Renders button with slightly round shaped edges</td>
        </tr>
        <tr>
            <td>block</td>
            <td> - </td>
            <td> - </td>
            <td>Block level button</td>
        </tr>
        <tr>
            <td>full</td>
            <td> - </td>
            <td> - </td>
            <td>Full width button</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td> true </td>
            <td> boolean </td>
            <td>Disables click option for button</td>
        </tr>
        <tr>
            <td>small</td>
            <td> - </td>
            <td> - </td>
            <td>Small size button</td>
        </tr>
        <tr>
            <td>large</td>
            <td> - </td>
            <td> - </td>
            <td>Large size button</td>
        </tr>
        <tr>
            <td>iconRight</td>
            <td> - </td>
            <td> - </td>
            <td>Right padding for the icon</td>
        </tr>
        <tr>
            <td>iconLeft</td>
            <td> - </td>
            <td> - </td>
            <td>Left padding for the icon</td>
        </tr>
        <tr>
            <td>light</td>
            <td> - </td>
            <td> boolean </td>
            <td>Light white background color for button</td>
        </tr>
        <tr>
            <td>primary</td>
            <td> - </td>
            <td> boolean </td>
            <td>Blue background color for button</td>
        </tr>
        <tr>
            <td>success</td>
            <td> - </td>
            <td> boolean </td>
            <td>Green background color for button</td>
        </tr>
        <tr>
            <td>info</td>
            <td> - </td>
            <td> boolean </td>
            <td>Light blue background color for button</td>
        </tr>
        <tr>
            <td>warning</td>
            <td> - </td>
            <td> boolean </td>
            <td>Yellow background color for button</td>
        </tr>
        <tr>
            <td>danger</td>
            <td> - </td>
            <td> boolean </td>
            <td>Red background color for button</td>
        </tr>
        <tr>
            <td>dark</td>
            <td> - </td>
            <td> boolean </td>
            <td>Black background color for button</td>
        </tr>
    </tbody>
</table><br />
