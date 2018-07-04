## header-title-subtitle-headref
#### Header with Title and Subtitle

![Preview ios header-title-subtitle-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/header-with-title-and-subtitle.png)
![Preview android header-title-subtitle-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/header-with-title-and-subtitle.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
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
    <nb-header>
      <nb-left/>
      <nb-body>
        <nb-title>Title</nb-title>
        <nb-subtitle>Subtitle</nb-subtitle>
      </nb-body>
      <nb-right/>
    </nb-header>
  </nb-container>
</template>
{%- endcodetabs %}
<br />