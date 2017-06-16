## regular-textbox-headref
#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the <b>regular</b> prop with <code>Item</code>.

![Preview ios regular-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/regularInput.png)
![Preview android regular-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/regular.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Item, Input } from 'native-base';
export default class RegularTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>​
          &lt;Item regular>
            &lt;Input placeholder='Regular Textbox' />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
