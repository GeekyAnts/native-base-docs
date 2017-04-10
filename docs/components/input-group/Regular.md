#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the <code>borderType</code> property and assign it with value as **regular**.

![Preview ios Regular_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/regularInput.png)
![Preview android Regular_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/regular.png)

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base';
export default class RegularTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Simple rectangular text input box
                    &lt;InputGroup regular>
                        &lt;Input placeholder='Type your text here'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
