## carditem-bordered-headref
#### CardItem Bordered

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Card Item Bordered&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Card>
            &lt;CardItem header bordered>
              &lt;Text>NativeBase&lt;/Text>
            &lt;/CardItem>
            &lt;CardItem bordered>
              &lt;Body>
                &lt;Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
            &lt;CardItem bordered>
              &lt;Body>
                &lt;Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with
                  basic set of components for mobile application development.
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
            &lt;CardItem bordered>
              &lt;Body>
                &lt;Text>
                  Get on the mobile fast track with NativeBase, the
                  fastest-growing platform
                  and tool set for iOS and Android development.
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
            &lt;CardItem footer bordered>
              &lt;Text>GeekyAnts&lt;/Text>
            &lt;/CardItem>
          &lt;/Card>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
