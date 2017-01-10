# Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../assets/ios/components/footer-tabs.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../assets/android/components/footer-tabs.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
​
export default class FooterTabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content />

                &lt;Footer >
                    &lt;FooterTab>
                        &lt;Button>
                            &lt;Badge>2&lt;/Badge>
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
