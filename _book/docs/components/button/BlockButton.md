## button-block-headref
#### Block Button

A block level button spans the entire width of the parent element.
Create block level buttons by adding <code>block</code> prop with the <code>Button</code><br />

![Preview ios button-block-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-block.png)
![Preview android button-block-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-block.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonBlockExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button block light>
            <Text>Light</Text>
          </Button>
          <Button block>
            <Text>Primary</Text>
          </Button>
          <Button block success>
            <Text>Success</Text>
          </Button>
          <Button block info>
            <Text>Info</Text>
          </Button>
          <Button block warning>
            <Text>Warning</Text>
          </Button>
          <Button block danger>
            <Text>Danger</Text>
          </Button>
          <Button block dark>
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
      <nb-button block light>
        <nb-text>Light</nb-text>
      </nb-button>
      <nb-button block info>
        <nb-text>Info</nb-text>
      </nb-button>
      <nb-button block primary>
        <nb-text>Primary</nb-text>
      </nb-button>
      <nb-button block success>
        <nb-text>Success</nb-text>
      </nb-button>
      <nb-button block warning>
        <nb-text>Warning</nb-text>
      </nb-button>
      <nb-button block danger>
        <nb-text>Danger</nb-text>
      </nb-button>
      <nb-button block dark>
        <nb-text>Dark</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p> 
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-block.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
