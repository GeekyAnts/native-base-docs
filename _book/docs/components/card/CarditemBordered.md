## carditem-bordered-headref
#### CardItem Bordered

Include <code>bordered</code> prop with &lt;CardItem> to have borderBottom for card item.

![Preview ios carditem-bordered-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-bordered.png)
![Preview android carditem-bordered-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-bordered.png)


*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
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
        <nb-card-item header bordered>
          <nb-text>NativeBase</nb-text>
        </nb-card-item>
        <nb-card-item bordered>
          <nb-body>
            <nb-text>
              NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
            </nb-text>
          </nb-body>            
        </nb-card-item>
        <nb-card-item footer bordered>
          <nb-text>GeekyAnts</nb-text>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-bordered.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
