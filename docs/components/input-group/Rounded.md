##rounded-textbox-headref
#### Rounded Textbox

To have a textbox with round type border, include the <code>borderType</code> property and assign it with value as **rounded**.

![Preview ios rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/roundedInput.png)
![Preview android rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/roundedinput.png)

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
export default class RoundedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Rounded text input box
                    &lt;Item rounded>
                        &lt;Input placeholder='Rounded Textbox'/>
                    &lt;/Item>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
