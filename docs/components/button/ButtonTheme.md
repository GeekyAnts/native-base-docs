#### Button Theme

[NativeBase](http://nativebase.io/) provides buttons with wide range of colors, size and variuos other props.<br />
NativeBase provides following color themes:
  * Primary (default)
  * Success
  * Info
  * Warning
  * Danger

<br />
      <table>
        <thead>
          <tr style="border-style: hidden;">
            <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
            <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
          </tr>
        </thead>
        <thead>
          <tr style="border-style: hidden">
            <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/button-theme.png')}}" alt="" /></div></th>
            <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490px" width="266px" src="{{('../../assets/android/components/button-theme.png')}}" alt="" /></div></th>
          </tr>
        </thead>
      </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base/ui';
​
export default class ButtonThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button primary>
                      &lt;Text> Primary &lt;/Text>
                    &lt;/Button>
                    &lt;Button success>
                      &lt;Text> Success &lt;/Text>
                    &lt;/Button>
                    &lt;Button info>
                      &lt;Text> Info &lt;/Text>
                    &lt;/Button>
                    &lt;Button warning>
                      &lt;Text> Warning &lt;/Text>
                    &lt;/Button>
                    &lt;Button danger>
                      &lt;Text> Danger &lt;/Text>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
