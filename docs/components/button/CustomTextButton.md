#### Capitalize Button Text

To have Button text rendered with uppercase, include <code>capitalize</code> prop.<br />
**Note:** This prop is applicable only for Android.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/capitalize-button-text.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/capitalize-button-text.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class CapitalizeButtonTextExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // NativeBase default style
                    &lt;Button> Click Me! &lt;/Button>

                    // Using capitalize prop
                    &lt;Button capitalize> Click Me! &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
