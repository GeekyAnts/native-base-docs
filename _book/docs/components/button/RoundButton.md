##button-rounded-headref
#### Rounded Button

Include <code>rounded</code> prop with <code>Button</code> to easily style your buttons.<br/>

![Preview ios button-rounded-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/roundedButtons.png)
![Preview android button-rounded-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/roundedButtons.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
export default class RoundedButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button light rounded>
                        &lt;Text>Light&lt;/Text>
                    &lt;/Button>
                    &lt;Button rounded>
                        &lt;Text>Primary&lt;/Text>
                    &lt;/Button>
                    &lt;Button rounded success>
                        &lt;Text>Success&lt;/Text>
                    &lt;/Button>
                    &lt;Button rounded info>
                        &lt;Text>Info&lt;/Text>
                    &lt;/Button>
                    &lt;Button rounded warning>
                        &lt;Text>Warning&lt;/Text>
                    &lt;/Button>
                    &lt;Button rounded danger>
                        &lt;Text>Danger&lt;/Text>
                    &lt;/Button>
                    &lt;Button dark rounded>
                        &lt;Text>Dark&lt;/Text>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
