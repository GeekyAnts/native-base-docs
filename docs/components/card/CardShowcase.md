##card-showcase-headref
#### Card Showcase

Card Showcase is further customization of Card Image. It uses several different items.
* Begins with the Card List component, which is similar to our List Avatar.
* Make use of Left, Body and Right components to align the content of your Card header.
* To mixup Image with other NativeBase components in a single CardItem, include the content within Body component.

![Preview ios card-showcase-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-showcase.png)
![Preview android card-showcase-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-showcase.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {% raw %}<Card style={{flex: 0}}>{% endraw %}
            <CardItem>
              <Left>
                {% raw %}<Thumbnail source={{uri: 'Image URL'}} />{% endraw %}
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {% raw %}<Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>{% endraw %}
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                {% raw %}<Button transparent textStyle={{color: '#87838B'}}>{% endraw %}
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
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
    <nb-content padder>
      <nb-card>
        <nb-card-item bordered>
          <nb-left>
            <nb-thumbnail :source="logo"></nb-thumbnail>
            <nb-body>
              <nb-text>NativeBase</nb-text>
              <nb-text note>April 20, 2018</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item> 
        <nb-card-item>
          <nb-body>
            <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/>
            <nb-text>//Your text here</nb-text>
          </nb-body>
        </nb-card-item>
        <nb-card-item :style="{ paddingVertical: 0 }">
          <nb-left>
            <nb-button transparent>
              <nb-icon name="logo-github"></nb-icon>
              <nb-text>8000 stars</nb-text>
            </nb-button>
          </nb-left>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
<script>
  import { Dimensions } from "react-native";
  import logo from "logo.png";
  import cardImage from "drawer-cover.png";
  const deviceWidth = Dimensions.get("window").width;
  export default {
    data: function() {
      return {
        logo,
        cardImage,
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: deviceWidth / 1.18
          }
        }
      };
    }
  };
</script>
<style>
  .card-item-image {
    align-self: center;
    height: 150;
    margin-vertical: 5;
  }
</style>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-showcase.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
