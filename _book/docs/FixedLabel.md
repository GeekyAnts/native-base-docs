#### Fixed Label

The fixedLabel property creates a Input component, whose Label is fixed at the left of the Input, which does not hide when text is entered. The input aligns on the same position, regardless of the length of the label. It can be used with placeholder as well.

![Preview ios Fixed_Label](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/fixedInput.png)
![Preview android Fixed_Label](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/fixedInput.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label} from 'native-base/ui';
​
export default class FormExample extends Component {
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
