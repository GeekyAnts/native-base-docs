## button-icon-headref
#### Icon Button

The Icon Buttons, can take text and/or icon as child elements inside the Button.<br />
This goes as simple as this: include your choice of icon using <code>Icon</code> component within the <code>Button</code> component.<br />

![Preview ios button-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/button-icon.png)
![Preview android button-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/button-icon.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
export default class ButtonIconExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Button iconLeft light>
            &lt;Icon name='arrow-back' />
            &lt;Text>Back&lt;/Text>
          &lt;/Button>
          &lt;Button iconRight light>
            &lt;Text>Next&lt;/Text>
            &lt;Icon name='arrow-forward' />
          &lt;/Button>
          &lt;Button iconLeft>
            &lt;Icon name='home' />
            &lt;Text>Home&lt;/Text>
          &lt;/Button>
          &lt;Button iconLeft transparent primary>
            &lt;Icon name='beer' />
            &lt;Text>Pub&lt;/Text>
          &lt;/Button>
          &lt;Button iconLeft dark>
            &lt;Icon name='cog' />
            &lt;Text>Settings&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
