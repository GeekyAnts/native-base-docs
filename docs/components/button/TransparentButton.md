## button-transparent-headref
#### Transparent Button

Include <code>transparent</code> prop with Button. This will render button with no border and no background color.<br />

![Preview ios button-transparent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-transparent.png)
![Preview android button-transparent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-transparent.png)
*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button transparent light>
            <Text>Light</Text>
          </Button>
          <Button transparent>
            <Text>Primary</Text>
          </Button>
          <Button transparent success>
            <Text>Success</Text>
          </Button>
          <Button transparent info>
            <Text>Info</Text>
          </Button>
          <Button transparent warning>
            <Text>Warning</Text>
          </Button>
          <Button transparent danger>
            <Text>Danger</Text>
          </Button>
          <Button transparent dark>
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
      <nb-button transparent light>
        <nb-text>Light</nb-text>
      </nb-button>
      <nb-button transparent info>
        <nb-text>Info</nb-text>
      </nb-button>
      <nb-button transparent primary>
        <nb-text>Primary</nb-text>
      </nb-button>
      <nb-button transparent success>
        <nb-text>Success</nb-text>
      </nb-button>
      <nb-button transparent warning>
        <nb-text>Warning</nb-text>
      </nb-button>
      <nb-button transparent danger>
        <nb-text>Danger</nb-text>
      </nb-button>
      <nb-button transparent dark>
        <nb-text>Dark</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p> 
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-transparent.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
