#### Transparent Button

Include <code>transparent</code> prop with Button. This will render button without border and background color.<br />

![Preview ios Transparent_Button](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/transparentButtons.png)
![Preview android Transparent_Button](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/transparentButtons.png)
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base/ui';
​
export default class TransparentButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                &lt;Button light transparent>
                    &lt;Text>Light&lt;/Text>
                &lt;/Button>
                &lt;Button transparent>
                    &lt;Text>Primary&lt;/Text>
                &lt;/Button>
                &lt;Button transparent success>
                    &lt;Text>Success&lt;/Text>
                &lt;/Button>
                &lt;Button transparent info>
                    &lt;Text>Info&lt;/Text>
                &lt;/Button>
                &lt;Button transparent warning>
                    &lt;Text>Warning&lt;/Text>
                &lt;/Button>
                &lt;Button transparent danger>
                    &lt;Text>Danger&lt;/Text>
                &lt;/Button>
                &lt;Button dark transparent>
                    &lt;Text>Dark&lt;/Text>
                &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
