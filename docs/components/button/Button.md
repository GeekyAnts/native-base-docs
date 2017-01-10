# Button

Button is a pure [NativeBase](http://nativebase.io/) component.<br />
Buttons are the integral part of an application. They are used for various purposes like, submit or reset a form, navigate, performing interactive actions such as showing or hiding something in an app on click of the button, etc.


<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/button.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/button.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

**Contents:**
* [Button Theme](/docs/components/button/ButtonTheme.md)
* [Block Button](/docs/components/button/BlockButton.md)
* [Rounded Button](/docs/components/button/RoundButton.md)
* [Icon Button](/docs/components/button/IconButton.md)
* [Outline Button](/docs/components/button/OutlineButton.md)
* [Transparent Button](/docs/components/button/TransparentButton.md)
* [Button Size](/docs/components/button/ButtonSize.md)
* [Disabled Button](/docs/components/button/DisabledButton.md)
* [Capitalize Button Size](/docs/components/button/CustomTextButton.md)


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class ButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // NativeBase default style
                    &lt;Button> Click Me! &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

* [NativeBase](http://nativebase.io/) provides <code>Button</code> component which is readily not available in [React Native](https://facebook.github.io/react-native/).
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
                <td>textStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Defines button text style</td>
            </tr>
            <tr>
                <td>block</td>
                <td> - </td>
                <td> - </td>
                <td>Block level button</td>
            </tr>
            <tr>
                <td>rounded</td>
                <td> - </td>
                <td> - </td>
                <td>Renders button with slightly round shaped edges.</td>
            </tr>
            <tr>
                <td>bordered</td>
                <td> - </td>
                <td> - </td>
                <td>Applies outline button style.</td>
            </tr>
            <tr>
                <td>transparent</td>
                <td> - </td>
                <td> - </td>
                <td>Gives you effect of Icon-buttons.<br />
                    To have button with transparent background, include this prop.
                </td>
            </tr>
            <tr>
                <td>small</td>
                <td> - </td>
                <td> - </td>
                <td>For small size button</td>
            </tr>
            <tr>
                <td>large</td>
                <td> - </td>
                <td> - </td>
                <td>For large size button</td>
            </tr>
            <tr>
                <td>iconLeft</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Used for Icon alignment.<br />
                    Aligns icon to the left in button.<br />
                    By default, icons are aligned to the left in button.
                </td>
            </tr>
            <tr>
                <td>iconRight</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Used for Icon alignment.<br />
                    Aligns icon to the right in button.
                </td>
            </tr>            
            <tr>
                <td>disabled</td>
                <td>true</td>
                <td>
                    true<br />
                    false
                </td>
                <td>
                    Disables click option for button
                </td>
            </tr>
            <tr>
                <td>capitalize</td>
                <td>true</td>
                <td>
                    true<br />
                    false
                </td>
                <td>
                    Displays Button text in uppercase.
                    <font size="1">
                    <i>(only Android)</i>
                </font>
                </td>
            </tr>
        </tbody>
    </table>
