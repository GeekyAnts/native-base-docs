#### Success Input Textbox

To display textbox with valid data, include the <code>success</code> prop with <code>&lt;InputGroup></code>.

<table>
<thead>
  <tr style="border-style: hidden;">
    <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
    <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
  </tr>
</thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/success-input-textbox.png')}}" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../../assets/android/components/success-input-textbox.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base/ui';
​
export default class SuccessInputTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup success>
                        &lt;Input placeholder='Textbox with Success Input'/>
                        &lt;Icon name='ios-checkmark-circle' style=&#123;{color:'#00C497'}}/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
