#### Rounded Button

Include <code>rounded</code> prop with <code>Button</code> to easily style your buttons.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/rounded-button.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/rounded-button.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class RoundedButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button rounded> Primary &lt;/Button>
                    &lt;Button rounded success> Success &lt;/Button>
                    &lt;Button rounded info> Info &lt;/Button>
                    &lt;Button rounded warning> Warning &lt;/Button>
                    &lt;Button rounded danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
