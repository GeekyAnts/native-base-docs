##card-list-headref
#### Card List

Include <code>CardItem</code> subsequently within <code>Card</code> to create a card with lists.


![Preview ios card-list-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-list.png)
![Preview android card-list-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-list.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content padder>
      <nb-card>
        <nb-card-item>
          <nb-left>
            <nb-icon name="logo-googleplus"></nb-icon>
            <nb-text>Google Plus</nb-text>
          </nb-left>            
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>            
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-list.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
