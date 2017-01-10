#### Underlined Textbox

To use the underlined textbox, include the <code>borderType</code> property and assign it with value as **underline**.

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/underlined-textbox.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/underlined-textbox.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class UnderlinedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Underlined text input box with placeholder text and an icon
                    &lt;InputGroup borderType='underline' >
                        &lt;Icon name='ios-home' style=&#123;{color:'#384850'}}/>
                        &lt;Input placeholder='Type your text here' />
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
