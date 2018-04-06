## header-span-headref
#### Header Span

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