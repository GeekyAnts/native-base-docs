<div class="section" id="buttonTheme">

    <h4>Button Theme</h4>

    <p>
        <a href="http://nativebase.io/">NativeBase</a> provides buttons with wide range of colors, size and variuos other props.<br />
        NativeBase provides following color themes:
        <ul style="padding-bottom: 15px;">
            <li>Primary (default)</li>
            <li>Success</li>
            <li>Info</li>
            <li>Warning</li>
            <li>Danger</li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class ButtonThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button primary> Primary &lt;/Button>
                    &lt;Button success> Success &lt;/Button>
                    &lt;Button info> Info &lt;/Button>
                    &lt;Button warning> Warning &lt;/Button>
                    &lt;Button danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <!-- <b>Configuration</b><br />
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
                <td>borderType</td>
                <td>block</td>
                <td>
                    rounded<br />
                    block<br />
                    bordered<br />
                </td>
                <td>Wraps the textbox with predefined border options.</td>
            </tr>
            <tr>
                <td>borderWidth</td>
                <td>zero</td>
                <td>user-defined value</td>
                <td>
                    Defines border width for button.<br />
                    Supports for button with all borderTypes.
                </td>
            </tr>
            <tr>
                <td>borderColor</td>
                <td>button color</td>
                <td>user-defined value</td>
                <td>
                    Defines border color for button.
                </td>
            </tr>
            <tr>
                <td>size</td>
                <td> - </td>
                <td>
                    small<br />
                    large<br />
                </td>
                <td>Defines button text style</td>
            </tr>
        </tbody>
    </table>
     -->
    <br />
    
</div>
