## header-no-left-headref
#### Header NoLeft

The <code>noLeft</code> prop of Header removes `<Left>` from Android Header.

![Preview ios header-no-left-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/ios/header-with-title.png)
![Preview android header-no-left-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/android/header-noleft.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from "native-base";
export default class HeaderNoLeft extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header noLeft>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
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
        &lt;Content padder>
          &lt;Text>
            Header with noLeft prop, eliminates Left component for Android
          &lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />