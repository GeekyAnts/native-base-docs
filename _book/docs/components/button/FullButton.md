## button-full-headref
#### Full Button

Adding full to a button will make the button take 100% of its parent’s width. However, it will also remove the button’s left and right borders. This style is useful when the button should stretch across the entire width of the display.


![Preview ios button-full-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/ios/button-full.png)
![Preview android button-full-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/android/button-full.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonFullExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Button full light>
            &lt;Text>Light&lt;/Text>
          &lt;/Button>
          &lt;Button full>
            &lt;Text>Primary&lt;/Text>
          &lt;/Button>
          &lt;Button full success>
            &lt;Text>Success&lt;/Text>
          &lt;/Button>
          &lt;Button full info>
            &lt;Text>Info&lt;/Text>
          &lt;/Button>
          &lt;Button full warning>
            &lt;Text>Warning&lt;/Text>
          &lt;/Button>
          &lt;Button full danger>
            &lt;Text>Danger&lt;/Text>
          &lt;/Button>
          &lt;Button full dark>
            &lt;Text>Dark&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
