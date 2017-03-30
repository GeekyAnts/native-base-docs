#### Success Input Textbox

To display textbox with valid data, include the <code>success</code> prop with <code>&lt;InputGroup></code>.

![Preview ios Success_Input_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/successInput.png)
![Preview android Success_Input_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/successInput.png)

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base/ui';
​
export default class SuccessInputTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup success>
                        &lt;Input placeholder='Textbox with Success Input'/>
                        &lt;Icon name='ios-checkmark-circle' style=&#123;{color:'#00C497'}}/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
