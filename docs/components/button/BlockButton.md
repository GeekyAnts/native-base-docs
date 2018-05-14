## button-block-headref
#### Block Button

A block level button spans the entire width of the parent element.
Create block level buttons by adding <code>block</code> prop with the <code>Button</code><br />

![Preview ios button-block-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/ios/button-block.png)
![Preview android button-block-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/android/button-block.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonBlockExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Button block light>
            &lt;Text>Light&lt;/Text>
          &lt;/Button>
          &lt;Button block>
            &lt;Text>Primary&lt;/Text>
          &lt;/Button>
          &lt;Button block success>
            &lt;Text>Success&lt;/Text>
          &lt;/Button>
          &lt;Button block info>
            &lt;Text>Info&lt;/Text>
          &lt;/Button>
          &lt;Button block warning>
            &lt;Text>Warning&lt;/Text>
          &lt;/Button>
          &lt;Button block danger>
            &lt;Text>Danger&lt;/Text>
          &lt;/Button>
          &lt;Button block dark>
            &lt;Text>Dark&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
