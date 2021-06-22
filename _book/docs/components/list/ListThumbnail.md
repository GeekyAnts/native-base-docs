## list-thumbnail-headref
#### List Thumbnail

List Thumbnails are the medium to exhibit an image with your list item. To create a thumbnail list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component with few props and style.

![Preview ios list-thumbnail-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-thumbnail.png)
![Preview android list-thumbnail-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-thumbnail.png)


*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                {% raw %}<Thumbnail square source={{ uri: 'Image URL' }} />{% endraw %}
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
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
      <nb-list-item thumbnail>
        <nb-left>
          <nb-thumbnail square :source="img.png" />
        </nb-left>
        <nb-body>
          <nb-text>Sankhadeep</nb-Text>
          <nb-text note :numberOfLines="1">Its time to build a difference . .</nb-Text>
        </nb-body>
        <nb-right>
          <nb-button transparent>
            <nb-text>View</nb-text>
          </nb-button>
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-thumbnail.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
