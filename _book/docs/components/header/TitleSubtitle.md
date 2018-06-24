## header-title-subtitle-headref
#### Header with Title and Subtitle

![Preview ios header-title-subtitle-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/header-with-title-and-subtitle.png)
![Preview android header-title-subtitle-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/header-with-title-and-subtitle.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left />
          &lt;Body>
            &lt;Title>Title&lt;/Title>
            &lt;Subtitle>Subtitle&lt;/Subtitle>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />