## icon-textbox-headref
#### Icon Textbox

Icons can be easily added to the NativeBase Textbox. To do so, include an icon within the <code>&lt;Item></code>. <br />
The icons render in the order of its definition within <code>Item</code>.<br />


![Preview ios icon-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-icon.png)
![Preview android icon-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-icon.png)

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
export default class IconTextboxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          // Text input box with icon aligned to the left
          &lt;Item>
            &lt;Icon active name='home' />
            &lt;Input placeholder='Icon Textbox'/>
          &lt;/Item>
          // Text input box with icon aligned to the right
          &lt;Item>
            &lt;Input placeholder='Icon Alignment in Textbox'/>
            &lt;Icon active name='swap' />
          &lt;/Item>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
