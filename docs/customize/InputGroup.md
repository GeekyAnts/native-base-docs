<div class="section" id="themeInputGroup">

    <h3>Customize InputGroup</h3>

    <p style="padding-bottom: 10px;">
        Steps to customize theme for InputGroup attributes:
    </p>

    <table class = "table table-hover" style="width: 75%; ">
        <thead>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>inputFontSize</td>
                <td>Input font size for textbox</td>
            </tr>
            <tr>
                <td>textColor</td>
                <td>Input text color for textbox</td>
            </tr>
            <tr>
                <td>inputBorderColor</td>
                <td>Border color for textbox</td>
            </tr>
            <tr>
                <td>inputSuccessBorderColor</td>
                <td>Border color for textbox with valid input</td>
            </tr>
            <tr>
                <td>inputErrorBorderColor</td>
                <td>Border color for textbox with invalid input</td>
            </tr>
            <tr>
                <td>inputColorPlaceholder</td>
                <td>Placeholder color for textbox</td>
            </tr>
            <tr>
                <td>inputHeightBase</td>
                <td>Padding between textbox</td>
            </tr>
            <tr>
                <td>inputPaddingLeftIcon</td>
                <td>Padding between icon and text for textbox</td>
            </tr>
        </tbody>
    </table>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, InputGroup, Input } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeInputGroupExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;InputGroup borderType='underline' >
                        &lt;Input placeholder='Underlined Textbox' />
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
</div>
