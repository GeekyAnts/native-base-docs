#### Capitalize Button Text

To have Button text rendered with uppercase, include <code>capitalize</code> prop.<br />
**Note:** This prop is applicable only for Android.<br />

![Preview ios Capitalize_Button_Text](../docs/assets/ios/components/capitalize-button-text.png)
![Preview android Capitalize_Button_Text](../docs/assets/android/components/capitalize-button-text.png)
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
​
export default class CapitalizeButtonTextExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // NativeBase default style
                    &lt;Button>
                      &lt;Text> Click Me! &lt;/Text>
                    &lt;/Button>
                    // Using capitalize prop
                    &lt;Button capitalize>
                      &lt;Text> Click Me! &lt;/Text>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
