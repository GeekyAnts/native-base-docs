#### Inline Label

The inlineLabel property creates a Input component, whose Label is in-line with Input, which does not hide when text is entered. It can be used with placeholder as well.

![Preview ios Inline_Label](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/inlineInput.png)
![Preview android Inline_Label](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/inlineInput.png)

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
