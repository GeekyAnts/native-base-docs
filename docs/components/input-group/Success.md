#### Success Input Textbox

To display textbox with valid data, include the <code>success</code> prop with <code>&lt;InputGroup></code>.

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/success-input-textbox.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/success-input-textbox.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class SuccessInputTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup iconRight success>
                        &lt;Icon name='ios-checkmark-circle' style=&#123;{color:'#00C497'}}/>
                        &lt;Input placeholder='Textbox with Success Input'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
