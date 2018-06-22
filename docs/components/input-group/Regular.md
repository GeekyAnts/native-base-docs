## regular-textbox-headref
#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the <code>regular</code> prop with <code>Item</code>.

![Preview ios regular-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/input-regular.png)
![Preview android regular-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/input-regular.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Input, Item } from 'native-base';
export default class RegularTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Item regular>
            &lt;Input placeholder='Regular Textbox' />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
