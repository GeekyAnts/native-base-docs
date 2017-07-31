##underlined-textbox-headref
#### Underlined Textbox

To use the underlined textbox, include the <b>underline</b> prop with <code>Item</code>.

![Preview ios underlined-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/input-underline.png)
![Preview android underlined-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/input-underline.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class UnderlinedTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Item underline>
            &lt;Input placeholder="Underline Textbox" />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
