## rounded-textbox-headref
#### Rounded Textbox

To have a textbox with round type border, include the <code>rounded</code> prop with <code>Item</code>.

![Preview ios rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/input-rounded.png)
![Preview android rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/input-rounded.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Item rounded>
            &lt;Input placeholder='Rounded Textbox'/>
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
