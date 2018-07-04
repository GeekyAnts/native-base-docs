## button-rounded-headref
#### Rounded Button

Include <code>rounded</code> prop with <code>Button</code> to easily style your buttons with slightly rounded edges.<br/>

![Preview ios button-rounded-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-rounded.png)
![Preview android button-rounded-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-rounded.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonRoundedExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button rounded light>
            <Text>Light</Text>
          </Button>
          <Button rounded>
            <Text>Primary</Text>
          </Button>
          <Button rounded success>
            <Text>Success</Text>
          </Button>
          <Button rounded info>
            <Text>Info</Text>
          </Button>
          <Button rounded warning>
            <Text>Warning</Text>
          </Button>
          <Button rounded danger>
            <Text>Danger</Text>
          </Button>
          <Button rounded dark>
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
    <nb-header />
    <nb-content padder>
      <nb-button rounded light>
        <nb-text>Light</nb-text>
      </nb-button>
      <nb-button rounded info>
        <nb-text>Info</nb-text>
      </nb-button>
      <nb-button rounded primary>
        <nb-text>Primary</nb-text>
      </nb-button>
      <nb-button rounded success>
        <nb-text>Success</nb-text>
      </nb-button>
      <nb-button rounded warning>
        <nb-text>Warning</nb-text>
      </nb-button>
      <nb-button rounded danger>
        <nb-text>Danger</nb-text>
      </nb-button>
      <nb-button rounded dark>
        <nb-text>Dark</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
