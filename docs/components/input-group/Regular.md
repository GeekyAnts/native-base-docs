#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the <code>borderType</code> property and assign it with value as **regular**.

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/regular-textbox.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/regular-textbox.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base';
​
export default class RegularTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Simple rectangular text input box
                    &lt;InputGroup borderType='regular' >
                        &lt;Input placeholder='Type your text here'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
