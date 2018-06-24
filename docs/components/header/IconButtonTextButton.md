## header-icon-button-text-button-headref
#### Header with Icon Button and Text Button

![Preview ios header-icon-button-text-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/header-with-icon-button-text-button.png)
![Preview android header-icon-button-text-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/header-with-icon-button-text-button.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconButtonTextButtonExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name='arrow-back' />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Header&lt;/Title>
          &lt;/Body>
          &lt;Right>
            &lt;Button transparent>
              &lt;Text>Cancel&lt;/Text>
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />