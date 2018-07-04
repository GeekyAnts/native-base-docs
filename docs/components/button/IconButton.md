## button-icon-headref
#### Icon Button

The Icon Buttons, can take text and/or icon as child elements inside the Button.<br />
This goes as simple as this: include your choice of icon using <code>Icon</code> component within the <code>Button</code> component.<br />

![Preview ios button-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-icon.png)
![Preview android button-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-icon.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
export default class ButtonIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconRight light>
            <Text>Next</Text>
            <Icon name='arrow-forward' />
          </Button>
          <Button iconLeft>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button iconLeft transparent primary>
            <Icon name='beer' />
            <Text>Pub</Text>
          </Button>
          <Button iconLeft dark>
            <Icon name='cog' />
            <Text>Settings</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-button iconLeft light>
        <nb-icon active name="arrow-back" />
        <nb-text>Back</nb-text>
      </nb-button>
      <nb-button iconRight light>
        <nb-text>Next</nb-text>
        <nb-icon active name="arrow-forward" />
      </nb-button>
      <nb-button iconLeft>
        <nb-icon active name="home" />
        <nb-text>Home</nb-text>
      </nb-button>
      <nb-button iconLeft transparent>
        <nb-icon active name="beer" />
        <nb-text>Pub</nb-text>
      </nb-button>
      <nb-button iconLeft dark>
        <nb-icon active name="cog" />
        <nb-text>Settings</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
