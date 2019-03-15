## card-headfoot-headref
#### Card Header and Footer

To add an optional header and/or footer within a card, include <code>header</code> / <code>footer</code> prop with the <code>CardItem</code>.<br />
* **Card Header**: Include <code>header</code> prop with first instance of CardItem within Card.
* **Card Footer**: Include <code>footer</code> prop with last instance of CardItem within Card.

![Preview ios card-headfoot-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-header-and-footer.png)
![Preview android card-headfoot-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-header-and-footer.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
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
      <nb-card>
        <nb-card-item header>
          <nb-text>NativeBase</nb-text>
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <nb-text>
              //Your text here
            </nb-text>
          </nb-body>            
        </nb-card-item>
        <nb-card-item footer>
          <nb-text>GeekyAnts</nb-text>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-header-and-footer.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
