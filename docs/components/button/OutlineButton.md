#### Outline Button

Include <code>bordered</code> prop with Button to apply outline button style.

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
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/outline-button.png')}}" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490px" width="266px" src="{{('../../assets/android/components/outline-button.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base/ui';
​
export default class OutlineButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button bordered>
                      &lt;Text> Primary &lt;/Text>
                    &lt;/Button>
                    &lt;Button bordered success>
                      &lt;Text> Success &lt;/Text>
                    &lt;/Button>
                    &lt;Button bordered info>
                      &lt;Text> Info &lt;/Text>
                    &lt;/Button>
                    &lt;Button bordered warning>
                      &lt;Text> Warning &lt;/Text>
                    &lt;/Button>
                    &lt;Button bordered danger>
                      &lt;Text> Danger &lt;/Text>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
