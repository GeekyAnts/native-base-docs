## list-header-headref
#### List Header

The List Header component creates a list header, which can be used for grouping list items. To create a header for any child element of the list, include <code>itemHeader</code> prop with <code>ListItem</code> component. The List Header of NativeBase comes with default style which is easily customisable.

![Preview ios list-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-header.png)
![Preview android list-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-header.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListHeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>COMEDY</Text>
            </ListItem>
            <ListItem >
              <Text>Hangover</Text>
            </ListItem>
            <ListItem last>
              <Text>Cop Out</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>ACTION</Text>
            </ListItem>
            <ListItem>
              <Text>Terminator Genesis</Text>
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
      <nb-list>
        <nb-list-item itemHeader first>
          <nb-text>COMEDY</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Hangover</nb-text>
        </nb-list-item>
        <nb-list-item last>
          <nb-text>Cop Out</nb-text>
        </nb-list-item>
        <nb-list-item itemHeader>
          <nb-text>ACTION</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Terminator Genesis</nb-text>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-header.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
