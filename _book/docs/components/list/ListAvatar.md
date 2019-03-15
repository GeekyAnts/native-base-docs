## list-avatar-headref
#### List Avatar

List Avatars are medium to showcase an image with your list item whose dimension lays between icon and thumbnail. To create a avatar list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component with <code>avatar</code> prop.

![Preview ios list-avatar-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-avatar.png)
![Preview android list-avatar-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-avatar.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                {% raw %}<Thumbnail source={{ uri: 'Image URL' }} />{% endraw %}
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
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
      <nb-list-item avatar>
        <nb-left>
          <nb-thumbnail small :source="img.png" />
        </nb-left>
        <nb-body>
          <nb-text>Kumar Pratik</nb-Text>
          <nb-text note :numberOfLines="1">Doing what you like will always keep you happy . .</nb-Text>
        </nb-body>
        <nb-right>
          <nb-text note>3:43 pm</nb-text>
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-avatar.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
