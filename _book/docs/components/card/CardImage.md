## card-image-headref
#### Card Image

Want to have something more with Card Lists? <br />
Include image with <code>CardItem</code> within <code>Card</code> along with some text before and after image to create a card with lists. <br />
Here is your Card Image ready !

![Preview ios card-image-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-image.png)
![Preview android card-image-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-image.png)


*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                {% raw %}<Thumbnail source={{uri: 'Image URL'}} />{% endraw %}
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {% raw %}<Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>{% endraw %}
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
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
        <nb-card-item>
          <nb-left>
            <nb-thumbnail :source="logo"></nb-thumbnail>
            <nb-body>
              <nb-text>NativeBase</nb-text>
              <nb-text note>GeekyAnts</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item> 
        <nb-card-item cardBody>
            <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/>
        </nb-card-item>
        <nb-card-item>
          <nb-left>
            <nb-button transparent>
              <nb-icon name="thumbs-up" active></nb-icon>
              <nb-text>4923 Likes</nb-text>
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-button transparent>
              <nb-icon name="chatbubbles" active></nb-icon>
              <nb-text>89 Comments</nb-text>
            </nb-button>
          </nb-body>
          <nb-right>
            <nb-text>11h ago</nb-text>
          </nb-right>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
<script>
  import logo from "logo.png";
  import cardImage from "drawer-cover.png";
  export default {
    data: function() {
      return {
        logo,
        cardImage,
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover"
          }
        }
      };
    }
  };
</script>
<style>
  .card-item-image {
    flex: 1;
    height: 200;
  }
</style>
{%- endcodetabs %}

<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-image.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
