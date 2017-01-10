#### Outline Button

Include <code>bordered</code> prop with Button to apply outline button style.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/outline-button.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/outline-button.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class OutlineButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button bordered> Primary &lt;/Button>
                    &lt;Button bordered success> Success &lt;/Button>
                    &lt;Button bordered info> Info &lt;/Button>
                    &lt;Button bordered warning> Warning &lt;/Button>
                    &lt;Button bordered danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
