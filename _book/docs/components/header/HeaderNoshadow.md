## header-no-shadow-headref
#### Header NoShadow

The <code>noShadow</code> prop of Header removes shadow from iOS Header and elevation from Android Header.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from "native-base";
export default class HeaderNoShadow extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header noShadow>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Header No Shadow&lt;/Title>
          &lt;/Body>
          &lt;Right>
            &lt;Button transparent>
              &lt;Icon name="menu" />
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
        &lt;Content padder>
          &lt;Text>
            Header with noShadow prop
          &lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />