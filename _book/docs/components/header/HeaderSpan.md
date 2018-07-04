## header-span-headref
#### Header Span

![Preview ios header-span-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-span.png)
![Preview android header-span-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/header-span.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
export default class HeaderSpan extends Component {
  render() {
    return (
      <Container>
        <Header span>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header Span</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header span>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header Span</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
  </nb-container>
</template>
{%- endcodetabs %}
<br />