## button-theme-headref
#### Button Theme

[NativeBase](https://nativebase.io/) provides button with wide range of colors.<br />
NativeBase provides following color themes:
  * Primary (default)
  * Success
  * Info
  * Warning
  * Danger
  * Light
  * Dark<br />

![Preview ios button-theme-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.2.0/screenshots/ios/buttons.png)
![Preview android button-theme-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.2.0/screenshots/android/buttons.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Button light>&lt;Text> Light &lt;/Text>&lt;/Button>
          &lt;Button primary>&lt;Text> Primary &lt;/Text>&lt;/Button>
          &lt;Button success>&lt;Text> Success &lt;/Text>&lt;/Button>
          &lt;Button info>&lt;Text> Info &lt;/Text>&lt;/Button>
          &lt;Button warning>&lt;Text> Warning &lt;/Text>&lt;/Button>
          &lt;Button danger>&lt;Text> Danger &lt;/Text>&lt;/Button>
          &lt;Button dark>&lt;Text> Dark &lt;/Text>&lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
