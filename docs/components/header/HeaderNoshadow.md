## header-no-shadow-headref
#### Header NoShadow

The <code>noShadow</code> prop of Header removes shadow from iOS Header and elevation from Android Header.

![Preview ios header-no-shadow-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-noshadow.png)
![Preview android header-no-shadow-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/header-noshadow.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";
export default class HeaderNoShadow extends Component {
  render() {
    return (
      <Container>
        <Header noShadow>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header No Shadow</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header noShadow>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header No Shadow</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="menu" />
        </nb-button>
      </nb-right>
    </nb-header>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-noshadow.png" alt="" style="display:block !important" />
    </div>
</p>
<br />