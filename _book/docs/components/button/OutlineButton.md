## button-outline-headref
#### Outline Button

Include <code>bordered</code> prop with Button to apply outline button style.<br />

![Preview ios button-outline-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-outline.png)
![Preview android button-outline-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-outline.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonOutlineExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button bordered light>
            <Text>Light</Text>
          </Button>
          <Button bordered>
            <Text>Primary</Text>
          </Button>
          <Button bordered success>
            <Text>Success</Text>
          </Button>
          <Button bordered info>
            <Text>Info</Text>
          </Button>
          <Button bordered warning>
            <Text>Warning</Text>
          </Button>
          <Button bordered danger>
            <Text>Danger</Text>
          </Button>
          <Button bordered dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header/>
    <nb-content padder>
      <nb-button bordered light>
        <nb-text>Light</nb-text>
      </nb-button>
      <nb-button bordered info>
        <nb-text>Info</nb-text>
      </nb-button>
      <nb-button bordered primary>
        <nb-text>Primary</nb-text>
      </nb-button>
      <nb-button bordered success>
        <nb-text>Success</nb-text>
      </nb-button>
      <nb-button bordered warning>
        <nb-text>Warning</nb-text>
      </nb-button>
      <nb-button bordered danger>
        <nb-text>Danger</nb-text>
      </nb-button>
      <nb-button bordered dark>
        <nb-text>Dark</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
