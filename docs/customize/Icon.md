<div class="section" id="themeIcon">

    <h3>Customize Icons</h3>

    <p style="padding-bottom: 10px;">
        Steps to customize theme for Icon attributes:
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
                <td>iconFamily</td>
                <td>Name of Icon family</td>
            </tr>
            <tr>
                <td>iconFontSize</td>
                <td>Icon size</td>
            </tr>
            <tr>
                <td>textColor</td>
                <td>Icon text color</td>
            </tr>
        </tbody>
    </table>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeIconExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;Icon name='ios-star' />
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
</div>
