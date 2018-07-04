## segment-icon-headref
## Segment Icon

![Preview ios segment-icon-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/segment-icon.png)
![Preview android segment-icon-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/segment-icon.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
​export default class SegmentIconExample extends Component {
  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button first active><Icon name="arrow-back" /></Button>
              <Button last><Icon name="arrow-forward" /></Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Text>Segment One</Text>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header hasSegment>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-segment>
          <nb-button first active><nb-icon name="arrow-back" /></nb-button>
          <nb-button last><nb-icon name="arrow-forward" />
        </nb-segment>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="search" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content padder>
      <nb-text>Segment One</nb-text>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />