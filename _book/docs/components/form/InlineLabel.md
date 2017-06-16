## inline-label-headref
#### Inline Label

The <code>inlineLabel</code> property creates an Input component, whose Label is in-line with Input, which does not hide when text is entered. It can be used with placeholder as well.


![Preview ios inline-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/inlineInput.png)
![Preview android inline-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/inlineInput.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
export default class InlineLabelExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Form>
            &lt;Item inlineLabel>
              &lt;Label>Username&lt;/Label>
              &lt;Input />
            &lt;/Item>
            &lt;Item inlineLabel last>
              &lt;Label>Password&lt;/Label>
              &lt;Input />
            &lt;/Item>
          &lt;/Form>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
