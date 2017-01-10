#### Disabled Button

A disabled button is unusable and un-clickable.<br />
The disabled prop of NativeBase Button is of type boolean. When present, it specifies that the button should be disabled. The disabled prop can be set to keep a user from clicking on the button until some other condition has been met (like selecting a checkbox, etc.). Then, a conditional code could remove the disabled value, and make the button usable.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/disabled-button.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/disabled-button.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class DisabledButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button disabled> Disabled &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
