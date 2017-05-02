## Customize Footer Tabs

Steps to customize theme for Footer Tabs attributes:
<br />

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../docs/assets/ios/guide/theme-footer-tabs.png')}}" alt="" /></div></th>
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
                <td>tabBarTextColor</td>
                <td>Text color when inactive</td>
            </tr>
            <tr>
                <td>tabBarActiveTextColor</td>
                <td>Text color when active</td>
            </tr>
            <tr>
                <td>tabActiveBgColor</td>
                <td>Tab background color when active</td>
            </tr>
        </tbody>
    </table>


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeFooterTabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Conent theme={myTheme} />
                &lt;Footer >
                    &lt;FooterTab>
                        &lt;Button>
                            Apps
                            &lt;Icon name='ios-apps-outline' />
                        &lt;/Button>
                        &lt;Button>
                            Camera
                            &lt;Icon name='ios-camera-outline' />
                        &lt;/Button>
                        &lt;Button active>
                            Navigate
                            &lt;Icon name='ios-compass' />
                        &lt;/Button>
                        &lt;Button>
                            Contact
                            &lt;Icon name='ios-contact-outline' />
                        &lt;/Button>
                    &lt;/FooterTab>
                &lt;/Footer>
            &lt;/Container>
        );
    }
}</code></pre>
