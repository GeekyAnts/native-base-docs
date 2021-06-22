## button-theme-headref
#### Button Theme

[NativeBase](https://nativebase.io/) provides button with wide range of colors.<br />
NativeBase provides following color themes:
  * Primary (default)
  * Success
  * Info
  * Warning
  * Danger
  * Light
  * Dark<br />

![Preview ios button-theme-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/buttons.png)
![Preview android button-theme-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/buttons.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button light><Text> Light </Text></Button>
          <Button primary><Text> Primary </Text></Button>
          <Button success><Text> Success </Text></Button>
          <Button info><Text> Info </Text></Button>
          <Button warning><Text> Warning </Text></Button>
          <Button danger><Text> Danger </Text></Button>
          <Button dark><Text> Dark </Text></Button>
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
      <nb-button light><nb-text>Light</nb-text></nb-button>
      <nb-button info><nb-text>Info</nb-text></nb-button>
      <nb-button primary><nb-text>Primary</nb-text></nb-button>
      <nb-button success><nb-text>Success</nb-text></nb-button>
      <nb-button warning><nb-text>Warning</nb-text></nb-button>
      <nb-button danger><nb-text>Danger</nb-text></nb-button>
      <nb-button dark><nb-text>Dark</nb-text></nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p> 
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/buttons.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
