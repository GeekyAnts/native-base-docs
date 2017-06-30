##underlined-textbox-headref
#### Underlined Textbox

To use the underlined textbox, include the <b>underline</b> prop with <code>Item</code>.

![Preview ios underlined-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/underlineInput.png)
![Preview android underlined-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/underlineInput.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Item, Input } from 'native-base';
export default class UnderlinedTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Item>
            &lt;Input placeholder="Underline Textbox" />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
