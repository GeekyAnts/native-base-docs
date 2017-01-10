#### Disabled Textbox

To restrict inputting data into textbox, include the <code>disabled</code> prop with <code>&lt;InputGroup></code>.

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/disabled-textbox.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/disabled-textbox.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class DisabledTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup iconRight disabled>
                        &lt;Icon name='ios-information-circle' style=&#123;{color: '#384850'}}/>
                        &lt;Input placeholder='Disabled Textbox'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
