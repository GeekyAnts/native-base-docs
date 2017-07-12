## disabled-textbox-headref
#### Disabled Textbox

To restrict inputting data into textbox, include the <code>disabled</code> prop with <code>Item</code> and <code>Input</code>.

![Preview ios disabled-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/input-disabled.png)
![Preview android disabled-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/input-disabled.png)

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon } from 'native-base';
export default class DisabledTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Item disabled>
            &lt;Input disabled placeholder='Disabled Textbox'/>
            &lt;Icon name='information-circle' />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
