#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the <code>borderType</code> property and assign it with value as **regular**.

<table>
<thead>
  <tr style="border-style: hidden;">
    <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
    <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
  </tr>
</thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/regular-textbox.png')}}" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../../assets/android/components/regular-textbox.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base/ui';
​
export default class RegularTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Simple rectangular text input box
                    &lt;InputGroup regular>
                        &lt;Input placeholder='Type your text here'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
