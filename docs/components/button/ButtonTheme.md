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
          <tr style="border-style: hidden">
            <th style="border-style: hidden">IOS</th>
            <th>Android</th>
          </tr>
        </thead>
        <thead>
          <tr style="border-style: hidden">
            <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/button-theme.png')}}" alt="" /></th>
            <th><img height="470" width="270" src="{{('../../assets/android/components/button-theme.png')}}" alt="" /></th>
          </tr>
        </thead>
      </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class ButtonThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button primary> Primary &lt;/Button>
                    &lt;Button success> Success &lt;/Button>
                    &lt;Button info> Info &lt;/Button>
                    &lt;Button warning> Warning &lt;/Button>
                    &lt;Button danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
