<div class="section" id="button">

    <h2>Button</h2>

    <p>
        Button is a pure <a href="http://nativebase.io/">NativeBase</a> component.<br />
        Buttons are the integral part of an application. They are used for various purposes like, submit or reset a form, navigate, performing interactive actions such as showing or hiding something in an app on click of the button, etc.
    </p><br />

    <p>
        <ul style="list-style-type:none">
            <li><b>Contents:</b></li>
            <li><a href="/docs/components/button/ButtonTheme.md">Button Theme</a></li>
            <li><a href="/docs/components/button/BlockButton.md">Block Button</a></li>
            <li><a href="/docs/components/button/RoundButton.md">Rounded Button</a></li>
            <li><a href="/docs/components/button/IconButton.md">Icon Button</a></li>
            <li><a href="/docs/components/button/OutlineButton.md">Outline Button</a></li>
            <li><a href="/docs/components/button/TransparentButton.md">Transparent Button</a></li>
            <li><a href="/docs/components/button/ButtonSize.md">Button Size</a></li>
            <li><a href="/docs/components/button/DisabledButton.md">Disabled Button</a></li>
            <li><a href="/docs/components/button/CustomTextButton.md">Capitalize Button Text</a></li>
        </ul>
    </p><br />

    <i>Syntax</i>

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
    <ul>
        <li>
            <a href="http://nativebase.io/">NativeBase</a> provides <code>Button</code> component which is readily not available in <a href="https://facebook.github.io/react-native/">React Native</a>.
        </li>
        <li>Supports React Native app on both iOS and Android devices.</li>
        <li>
            Button component takes input such as: Text, Icon,
            Text with Icon.
        </li>
        <li>
            NativeBase gives you privilege to customize the props of this component.<br />
            <i>Example</i>: To have custom style for button, include them in <code>style</code> prop of button.
        </li>
        <li>Intakes user-defined styles.</li>
        <li>
            NativeBase has provided its users with enormous list of <code>props</code> that can be used with Button.
        </li>
        <li>
            <i>
                Replacing Component:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">
                    <code>&lt;TouchableOpacity></code>
                </a>
            </i>
        </li>
    </ul><br />

    <b>Configuration</b><br />
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
    </table><br />

</div>
