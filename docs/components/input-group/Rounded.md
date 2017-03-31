#### Rounded Textbox

To have a textbox with round type border, include the <code>borderType</code> property and assign it with value as **rounded**.

![Preview ios Rounded_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/roundedInput.png)
![Preview android Rounded_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/roundedinput.png)

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base/ui';
export default class RoundedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Rounded text input box with icon
                    &lt;InputGroup rounded>
                        &lt;Icon name='ios-home' style=&#123;{color:'#384850'}}/>
                        &lt;Input placeholder='Type your text here'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
