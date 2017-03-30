#### Underlined Textbox

To use the underlined textbox, include the <code>borderType</code> property and assign it with value as **underline**.

![Preview ios Underlined_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/underlineInput.png)
![Preview android Underlined_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/underlineInput.png)

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base/ui';
export default class UnderlinedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Underlined text input box with placeholder text and an icon
                    &lt;InputGroup underline>
                        &lt;Icon name='ios-home' style=&#123;{color:'#384850'}}/>
                        &lt;Input placeholder='Type your text here' />
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
