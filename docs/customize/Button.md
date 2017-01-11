## Customize Button

Steps to customize theme for Button attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/guide/theme-button.png')}}" alt="" /></div></th>
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
                <td>btnTextSizeSmall</td>
                <td>Text font size for button of type <i>small</i></td>
            </tr>
            <tr>
                <td>btnTextSize</td>
                <td>Text font size for button of type <i>default</i></td>
            </tr>
            <tr>
                <td>btnTextSizeLarge</td>
                <td>Text font size for button of type <i>large</i></td>
            </tr>
            <tr>
                <td>btnDisabledBg</td>
                <td>Background color of disabled button</td>
            </tr>
            <tr>
                <td>btnFontFamily</td>
                <td>Font style for button text</td>
            </tr>
        </tbody>
    </table>


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;Button primary> Primary &lt;/Button>
                    &lt;Button success> Success &lt;/Button>
                    &lt;Button info> Info &lt;/Button>
                    &lt;Button warning> Warning &lt;/Button>
                    &lt;Button danger> Danger &lt;/Button>

                    &lt;Button small>Small&lt;/Button>
                    &lt;Button>Default&lt;/Button>
                    &lt;Button large>Large&lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


***Note:** To customise button theme, refer [Theme Color](#themeColor)*
