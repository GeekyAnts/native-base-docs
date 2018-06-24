## header-transparent-headref
#### Header Transparent

The <code>transparent</code> prop of Header removes border, shadow from iOS Header and elevation from Android Header.

![Preview ios header-transparent-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-transparent.png)
![Preview android header-transparent-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/header-transparent.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text } from "native-base";
export default class HeaderTransparent extends Component {
  render() {
    return (
      &lt;Container style={&#123;backgroundColor: "#87cefa"}}>
        &lt;Header transparent>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Transparent&lt;/Title>
          &lt;/Body>
        &lt;/Header>
        &lt;Content padder>
          &lt;Text>
            Header with transparent prop
          &lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />