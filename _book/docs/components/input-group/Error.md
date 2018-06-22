## error-textbox-headref
#### Error Input Textbox

To display textbox with invalid data, include the <code>error</code> prop with <code>Item</code>.

![Preview ios error-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/input-error.png)
![Preview android error-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/input-error.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
export default class ErrorInputTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Item error>
            &lt;Input placeholder='Textbox with Error Input'/>
            &lt;Icon name='close-circle' />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
