## fixed-label-headref
#### Fixed Label

The <code>fixedLabel</code> property creates an Input component, whose Label is fixed at the left of the Input, which does not hide when text is entered. The input aligns on the same position, regardless of the length of the label. It can be used with placeholder as well.

![Preview ios fixed-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/input-fixed.png)
![Preview android fixed-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/input-fixed.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
export default class FixedLabelExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Form>
            &lt;Item fixedLabel>
              &lt;Label>Username&lt;/Label>
              &lt;Input />
            &lt;/Item>
            &lt;Item fixedLabel last>
              &lt;Label>Password&lt;/Label>
              &lt;Input />
            &lt;/Item>
          &lt;/Form>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
