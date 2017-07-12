## error-textbox-headref
#### Error Input Textbox

To display textbox with invalid data, include the <b>error</b> prop with <code>Item</code>.

![Preview ios error-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/input-error.png)
![Preview android error-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/input-error.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Item, Input, Icon } from 'native-base';
export default class ErrorInputTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
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
