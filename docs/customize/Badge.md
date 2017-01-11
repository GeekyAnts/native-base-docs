## Customize Badge

Steps to customize theme for Badge attributes:
<br />

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/guide/theme-badge.png')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

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


*Syntax*
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
