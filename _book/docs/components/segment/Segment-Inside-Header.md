## segment-inside-header-headref
## Segment

Segments are best used as an alternative for tabs. Mainly used in iOS.

![Preview ios segment-inside-header-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/segment-inside-header.gif)
![Preview android segment-inside-header-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/segment-inside-header.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
​export default class SegmentExample extends Component {
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
              <Button first><Text>Puppies</Text></Button>
              <Button last active><Text>Cubs</Text></Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Text>Awesome segment</Text>
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
          <nb-button first><nb-text>Puppies</nb-text></nb-button>
          <nb-button last :active="true"><nb-text>Cubs</nb-text></nb-button>
        </nb-segment>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="search" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-content padder>
      <nb-text>Awesome segment</nb-text>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

Segment takes Button as children. The active Button shoud be given an active prop (implementation is totally up to you).
Also the **first** and **last** buttons should be given props **first** and **last** respectively.<br />
**Pro tip:** It is advisable to use <code>hasSegment</code> prop with Header if you're using Segment below the header.