#### Icon Textbox

Icons can be easily added to the NativeBase Textbox. To do so, include an icon within the <code>&lt;InputGroup></code>. <br />
By default the icon will be aligned to the left in the textbox.<br />
However, you can also render icon to the right. To display icon at the end of textbox, include <code>iconRight</code> prop with the <code>&lt;InputGroup></code>.

![Preview ios Icon_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/iconInput.png)
![Preview android Icon_Textbox](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/iconInput.png)

*Syntax*        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
export default class IconTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Text input box with icon aligned to the left
                    &lt;Item>
                        &lt;Icon active name='home' />
                        &lt;Input placeholder='Icon Textbox'/>
                    &lt;/Item>
                    // Text input box with icon aligned to the right
                    &lt;Item>
                        &lt;Input placeholder='Icon Alignment in Textbox'/>
                        &lt;Icon active name='swap' />
                    &lt;/Item>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
