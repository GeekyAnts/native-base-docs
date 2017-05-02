##floating-label-headref
#### Floating Label

The inlineLabel property creates a Input component, whose Label is in-line with Input, which does not hide when text is entered. It can be used with placeholder as well.

![Preview ios floating-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/floatingInput.gif)
![Preview android floating-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/floating-label.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label} from 'native-base';
​
export default class FormExample extends Component {
    render() {
        return (
            &lt;Container>
                    &lt;Content>
                        &lt;Form>
                            &lt;Item floatingLabel>
                                &lt;Label>Username&lt;/Label>
                                &lt;Input />
                            &lt;/Item>
                            &lt;Item floatingLabel last>
                                &lt;Label>Password&lt;/Label>
                                &lt;Input />
                            &lt;/Item>
                        &lt;/Form>
                    &lt;/Content>
                &lt;/Container>
        );
    }
}</code></pre><br />
