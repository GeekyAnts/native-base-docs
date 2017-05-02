##underlined-textbox-headref
#### Underlined Textbox

To use the underlined textbox, include the <code>borderType</code> property and assign it with value as **underline**.

![Preview ios underlined-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/underlineInput.png)
![Preview android underlined-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/underlineInput.png)

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
export default class UnderlinedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Underlined text input box with placeholder text
                    &lt;Item underline>
                        &lt;Input placeholder='Underlined Textbox' />
                    &lt;/Item>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
