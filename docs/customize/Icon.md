## Customize Icons

Steps to customize theme for Icon attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(https://docs.nativebase.io/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('https://docs.nativebase.io/docs/assets/ios/guide/theme-icon.png')}}" alt="" /></div></th>
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


*Syntax*

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
}</code></pre>
