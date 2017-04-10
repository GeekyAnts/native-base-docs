#### Button Size

Want to have buttons of fancy size?<br />
Include the following props with your <code>Button</code>.
* <code>small</code>: for small size button.
* <code>large</code>: for large size button.<br />

![Preview ios Button_Size](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/sizeButtons.png)
![Preview android Button_Size](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/sizeButtons.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
​
export default class ButtonSizeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    //Small size button
                    &lt;Button small primary>
                        &lt;Text>Default Small&lt;/Text>
                    &lt;/Button>
                    //Regular size button
                    &lt;Button success>
                        &lt;Text>Success Default&lt;/Text>
                    &lt;/Button>
                    //Large size button
                    &lt;Button large info>
                        &lt;Text>Dark Large&lt;/Text>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
