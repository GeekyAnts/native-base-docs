#### Icon Textbox

Icons can be easily added to the NativeBase Textbox. To do so, include an icon within the <code>&lt;InputGroup></code>. <br />
By default the icon will be aligned to the left in the textbox.<br />
However, you can also render icon to the right. To display icon at the end of textbox, include <code>iconRight</code> prop with the <code>&lt;InputGroup></code>.

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden; padding-right: 34px;">IOS</th>
          <th style="padding-right: 140px;">Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/icon-textbox.png')}}" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../../assets/android/components/icon-textbox.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class IconTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Text input box with icon aligned by default to the left
                    &lt;InputGroup>
                        &lt;Icon name='ios-home' style=&#123;{color:'#00C497'}}/>
                        &lt;Input placeholder='Icon Textbox'/>
                    &lt;/InputGroup>

                    // Text input box with icon aligned to the right
                    &lt;InputGroup>
                        &lt;Input placeholder='Icon Alignment in Textbox'/>
                        &lt;Icon name='ios-swap' style=&#123;{color:'#00C497'}}/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
