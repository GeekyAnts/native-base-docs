## header-icon-text-button-headref
#### Header with Icon and Text Button

![Preview ios header-icon-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/header-with-icon-button-and-text.png)
![Preview android header-icon-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/header-with-icon-button-and-text.png)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconTextButtonExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name='arrow-back' />
              &lt;Text>Back&lt;/Text>
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