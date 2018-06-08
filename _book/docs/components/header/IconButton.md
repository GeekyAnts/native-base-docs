## header-icon-headref
#### Header with Icon Buttons

![Preview ios header-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/header-with-icons.png)
![Preview android header-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/header-with-icons.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderIconExample extends Component {
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
              &lt;Icon name='menu' />
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />