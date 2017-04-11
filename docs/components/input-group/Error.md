#### Error Input Textbox

To display textbox with invalid data, include the <code>error</code> prop with <code>&lt;InputGroup></code>.

![Preview ios Error_Input_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/errorInput.png)
![Preview android Error_Input_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/errorInput.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
export default class ErrorInputTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Item error>
                        &lt;Input placeholder='Textbox with Error Input'/>
                        &lt;Icon name='close-circle' />
                    &lt;/Item>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
