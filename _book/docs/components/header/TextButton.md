## header-text-button-headref

#### Header with Text Buttons

![Preview ios header-text-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/ios/header-with-text-button.png)
![Preview android header-text-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/android/header-with-text-button.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderTextExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button hasText transparent>
              &lt;Text>Back&lt;/Text>
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Header&lt;/Title>
          &lt;/Body>
          &lt;Right>
            &lt;Button hasText transparent>
              &lt;Text>Cancel&lt;/Text>
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />