## rounded-textbox-headref
#### Rounded Textbox

To have a textbox with round type border, include the <b>rounded</b> prop with <code>Item</code>.

![Preview ios rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/roundedInput.png)
![Preview android rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/roundedinput.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Item, Input } from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Item rounded>
            &lt;Input placeholder='Rounded Textbox'/>
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
