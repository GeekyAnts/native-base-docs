<div class="section" id="themeBadge">

    <h3>Customize Badge</h3>

    <p style="padding-bottom: 10px; ">
        Steps to customize theme for Badge attributes:
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
                <td>badgeColor</td>
                <td>Badge text color</td>
            </tr>
            <tr>
                <td>badgeBg</td>
                <td>Badge background color</td>
            </tr>
        </tbody>
    </table>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Badge } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeBadgeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;Badge>2&lt;/Badge>
                    &lt;Badge primary>2&lt;/Badge>
                    &lt;Badge success>2&lt;/Badge>
                    &lt;Badge info>2&lt;/Badge>
                    &lt;Badge warning>2&lt;/Badge>
                    &lt;Badge danger>2&lt;/Badge>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>

    <br />


</div>
