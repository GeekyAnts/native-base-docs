## button-full-headref
#### Full Button

Adding full to a button will make the button take 100% of its parent’s width. However, it will also remove the button’s left and right borders. This style is useful when the button should stretch across the entire width of the display.


![Preview ios button-full-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-full.png)
![Preview android button-full-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-full.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonFullExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button full light>
            <Text>Light</Text>
          </Button>
          <Button full>
            <Text>Primary</Text>
          </Button>
          <Button full success>
            <Text>Success</Text>
          </Button>
          <Button full info>
            <Text>Info</Text>
          </Button>
          <Button full warning>
            <Text>Warning</Text>
          </Button>
          <Button full danger>
            <Text>Danger</Text>
          </Button>
          <Button full dark>
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
    <nb-content>
      <nb-button full light>
        <nb-text>Light</nb-text>
      </nb-button>
      <nb-button full info>
        <nb-text>Info</nb-text>
      </nb-button>
      <nb-button full primary>
        <nb-text>Primary</nb-text>
      </nb-button>
      <nb-button full success>
        <nb-text>Success</nb-text>
      </nb-button>
      <nb-button full warning>
        <nb-text>Warning</nb-text>
      </nb-button>
      <nb-button full danger>
        <nb-text>Danger</nb-text>
      </nb-button>
      <nb-button full dark>
        <nb-text>Dark</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p> 
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-full.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
