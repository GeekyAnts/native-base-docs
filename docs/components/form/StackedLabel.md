## stacked-label-headref
#### Stacked Label

The <code>stackedLabel</code> property creates an Input component that places the label on top of input element which appears like a stack. This can also be used along with placeholder.

![Preview ios stacked-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/input-stacked.png)
![Preview android stacked-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/input-stacked.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
export default class StackedLabelExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Form>
            &lt;Item stackedLabel>
              &lt;Label>Username&lt;/Label>
              &lt;Input />
            &lt;/Item>
            &lt;Item stackedLabel last>
              &lt;Label>Password&lt;/Label>
              &lt;Input />
            &lt;/Item>
          &lt;/Form>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
