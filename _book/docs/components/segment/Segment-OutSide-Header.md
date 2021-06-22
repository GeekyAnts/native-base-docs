## segment-outside-header-headref

![Preview ios segment-outside-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/segment-outside-header.gif)
![Preview android segment-outside-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/segment-outside-header.gif)

*Syntax (Outside Header)*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
export default class SegmentOutsideHeaderExample extends Component {
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
            <Title>Segments</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button first>
            <Text>Puppies</Text>
          </Button>
          <Button>
            <Text>Kittens</Text>
          </Button>
          <Button last active>
            <Text>Cubs</Text>
          </Button>
        </Segment>
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
        <nb-title>Segments</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="search" />
        </nb-button>
      </nb-right>
    </nb-header>
    <nb-segment>
      <nb-button first>
        <nb-text>Puppies</nb-text>
      </nb-button>
      <nb-button>
        <nb-text>Kittens</nb-text>
      </nb-button>
      <nb-button last :active="true">
        <nb-text>Cubs</nb-text>
      </nb-button>
    </nb-segment>
    <nb-content padder>
      <nb-text>Awesome segment</nb-text>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/segment-outside-header.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
