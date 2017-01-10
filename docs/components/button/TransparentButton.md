#### Transparent Button

Include <code>transparent</code> prop with Button. This will render button without border and background color.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/transparent-button.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/transparent-button.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class TransparentButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button transparent> Primary &lt;/Button>
                    &lt;Button transparent>
                        &lt;Icon name='ios-home' style=&#123;{fontSize: 20, color: '#00c497'}} />
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
