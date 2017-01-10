#### Button Size

Want to have buttons of fancy size?<br />
Include the following props with your <code>Button</code>.
* <code>small</code>: for small size button.
* <code>large</code>: for large size button.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/button-size.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/button-size.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class ButtonSizeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    //Small size button
                    &lt;Button small primary> Primary &lt;/Button>

                    //Regular size button
                    &lt;Button success> Success &lt;/Button>

                    //Large size button
                    &lt;Button large info> Info &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
