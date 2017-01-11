# Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden; padding-right: 34px;">IOS</th>
          <th style="padding-right: 140px;">Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/footer-tabs.png')}}" alt="" /></div></th>
          <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../assets/android/components/footer-tabs.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
​
export default class FooterTabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content />

                &lt;Footer>
                    &lt;FooterTab>
                        &lt;Button badgeValue={2}>
                            &lt;Icon name='ios-apps-outline' />
                            &lt;Text>Apps&lt;/Text>
                        &lt;/Button>
                        &lt;Button>
                            &lt;Icon name='ios-camera-outline' />
                            &lt;Text>Camera&lt;/Text>
                        &lt;/Button>
                        &lt;Button active>
                            &lt;Icon name='ios-compass' />
                            &lt;Text>Navigate&lt;/Text>
                        &lt;/Button>
                        &lt;Button>
                            &lt;Icon name='ios-contact-outline' />
                            &lt;Text>Contact&lt;/Text>
                        &lt;/Button>
                    &lt;/FooterTab>
                &lt;/Footer>
            &lt;/Container>
        );
    }
}</code></pre>


**Configuration**

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
                <td>badgeValue</td>
                <td>-</td>
                <td>user-defined</td>
                <td>
                    Represents the value in badge.
                </td>
            </tr>
            <tr>
                <td>badgeColor</td>
                <td>-</td>
                <td>primary</td>
                <td>
                    Background color for badge.
                </td>
            </tr>
            <tr>
                <td>badgeValueStyle</td>
                <td>-</td>
                <td>-</td>
                <td>
                    Style for value in badge.
                </td>
            </tr>
        </tbody>
    </table>
