<div class="section" id="themeCheckbox">

    <h3>Customize Check Box</h3>

    <p style="padding-bottom: 10px;">
        Steps to customize theme for Check Box attributes:
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
                <td>checkboxBgColor</td>
                <td>Checkbox background color</td>
            </tr>
            <tr>
                <td>checkboxTickColor</td>
                <td>Checkbox tick color</td>
            </tr>
            <tr>
                <td>checkboxSize</td>
                <td>Checkbox size</td>
            </tr>
        </tbody>
    </table>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, CheckBox, Text } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeCheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;List>
                        &lt;ListItem>
                            &lt;CheckBox checked={true} />
                            &lt;Text>Daily Stand Up&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;CheckBox checked={false} />
                            &lt;Text>Discussion with Client&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
