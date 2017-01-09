<div class="section" id="icon">

    <h2>Icon</h2>

    <p>
        <b><i>Choose from 700+ Icons . . .</i></b><br />
        Perfect, crisp, high definition icons and pixel ideal fonts powered by <a href="http://nativebase.io/">NativeBase</a> to preserve matters very high first-rate. You will continually have pixel perfect icons on your initiatives.<br />
        <b>
            Features of <a href="https://github.com/oblador/react-native-vector-icons">React Native Vector Icons</a>:
        </b>
        <ul style="padding-bottom: 15px;">
            <li>
                Can use your own custom icon sets. Supports SVG via Fontello or regular icon fonts.        
            </li>
            <li>
                Can use native TabBarIOS.
            </li>
            <li>
                Can use icons inline with Text components as emojis or to create buttons.
            </li>
            <li>
                Can use the icon as an image if a native component requires it (such as NavigatorIOS).
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
​
export default class IconExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Icon name='ios-home' />
                    &lt;Icon name='ios-menu' style=&#123;{fontSize: 20, color: 'red'}}/>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <ul>
        <li>
            <code>Icon</code> takes two attributes: name, style.
        </li>
        <li>
            In case if you want to include icon with custom color, size etc then that should go into <code>style</code>.
        </li>
        <li>
            All the icons in the icon libraries of NativeBase, are scalable vector icons that can be customized size, color, etc.
        </li>
        <li>
            <i>
                Replacing Component:
                <a href="https://github.com/oblador/react-native-vector-icons">
                    React Native Vector Icons
                </a>
                <a href="https://github.com/oblador/react-native-vector-icons#icon-component">
                    <code>&lt;Icon></code>
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
                <th width="50%">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>name</td>
                <td> - </td>
                <td> - </td>
                <td>Name of the icon.</td>
            </tr>
            <tr>
                <td>color</td>
                <td>black</td>
                <td>user-defined</td>
                <td>
                    Renders icon with defined color.<br />
                    <font size="1">
                        <i>Note: Include this prop within <code style="background-color: #FFF">style</code></i>
                    </font>
                </td>
            </tr>
            <tr>
                <td>fontSize</td>
                <td>27</td>
                <td>user-defined</td>
                <td>
                    Renders icon with defined icon-size.<br />
                    <font size="1">
                        <i>Note: Include this prop within <code>style</code></i>
                    </font>
                </td>
            </tr>
        </tbody>
    </table><br />

</div>
