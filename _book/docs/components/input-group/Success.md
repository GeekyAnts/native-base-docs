## success-textbox-headref
#### Success Input Textbox

To display textbox with valid data, include the <b>success</b> prop with <code>Item</code>.

![Preview ios success-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/input-success.png)
![Preview android success-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/input-success.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon } from 'native-base';
export default class SuccessInputTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Item success>
            &lt;Input placeholder='Textbox with Success Input'/>
            &lt;Icon name='checkmark-circle' />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
