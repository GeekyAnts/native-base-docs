#### Icon Button

The Icon Buttons, can take text and/or icon as child elements inside the Button.<br />
This goes as simple as this: include your choice of icon using <code>Icon</code> component within the <code>Button</code> component.

<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden; padding-right: 34px;">IOS</th>
          <th style="padding-right: 140px;">Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/icon-button.png')}}" alt="" /></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490px" width="266px" src="{{('../../assets/android/components/icon-button.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
​
export default class IconButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button primary>
                        &lt;Icon name='ios-home' />
                        &lt;Text> Home &lt;/Text>
                    &lt;/Button>

                    &lt;Button success iconRight>
                        &lt;Text> Next &lt;/Text>
                        &lt;Icon name='ios-arrow-forward' />
                    &lt;/Button>

                    &lt;Button info>
                        &lt;Text> Previous &lt;/Text>
                        &lt;Icon name='ios-arrow-back' />
                    &lt;/Button>

                    &lt;Button warning>
                        &lt;Icon name='ios-star' />
                    &lt;/Button>

                    &lt;Button danger>
                        &lt;Icon name='ios-close-circle' />
                    &lt;/Button>

                    &lt;Button style=&#123;{backgroundColor: '#384850'}} >
                        &lt;Icon name='ios-search' style=&#123;{color: '#00c497'}}/>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
