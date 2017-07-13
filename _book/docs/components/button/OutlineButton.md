## button-outline-headref
#### Outline Button

Include <code>bordered</code> prop with Button to apply outline button style.<br />

![Preview ios button-outline-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/button-outline.png)
![Preview android button-outline-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/button-outline.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
export default class ButtonOutlineExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Button bordered light>
            &lt;Text>Light&lt;/Text>
          &lt;/Button>
          &lt;Button bordered>
            &lt;Text>Primary&lt;/Text>
          &lt;/Button>
          &lt;Button bordered success>
            &lt;Text>Success&lt;/Text>
          &lt;/Button>
          &lt;Button bordered info>
            &lt;Text>Info&lt;/Text>
          &lt;/Button>
          &lt;Button bordered warning>
            &lt;Text>Warning&lt;/Text>
          &lt;/Button>
          &lt;Button bordered danger>
            &lt;Text>Danger&lt;/Text>
          &lt;/Button>
          &lt;Button bordered dark>
            &lt;Text>Dark&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
