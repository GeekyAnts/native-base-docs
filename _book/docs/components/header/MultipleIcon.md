## header-multiple-icon-headref
#### Header with Multiple Icon Buttons

![Preview ios header-multiple-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/ios/header-with-multiple-icon-button.png)
![Preview android header-multiple-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/android/header-with-multiple-icon-button.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderMultipleIconExample extends Component {
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
              &lt;Icon name='search' />
            &lt;/Button>
            &lt;Button transparent>
              &lt;Icon name='heart' />
            &lt;/Button>
            &lt;Button transparent>
              &lt;Icon name='more' />
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />