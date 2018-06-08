## carditem-button-headref
#### CardItem Button

Include <code>button</code> prop with &lt;CardItem> to achieve onClick function with card items.

![Preview ios carditem-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/card-button.gif)
![Preview android carditem-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/card-button.gif)


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";
export default class CardItemButton extends Component {
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
            &lt;Title>Card Item Button&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Card>
            &lt;CardItem header button onPress={() => alert("This is Card Header")}>
              &lt;Text>NativeBase&lt;/Text>
            &lt;/CardItem>
            &lt;CardItem button onPress={() => alert("This is Card Body")}>
              &lt;Body>
                &lt;Text>
                  Click on any carditem
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
            &lt;CardItem footer button onPress={() => alert("This is Card Footer")}>
              &lt;Text>GeekyAnts&lt;/Text>
            &lt;/CardItem>
          &lt;/Card>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
