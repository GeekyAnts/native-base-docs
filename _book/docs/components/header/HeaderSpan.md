## header-span-headref
#### Header Span

![Preview ios header-span-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/ios/header-span.png)
![Preview android header-span-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/android/header-span.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from "native-base";
export default class HeaderSpan extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header span>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Header Span&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Text>
            Header span example
          &lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />