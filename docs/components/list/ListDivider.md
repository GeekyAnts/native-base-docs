## list-divider-headref
#### List Divider

The List Divider component creates a list separator, which can be used for grouping list items. To create a divider for any child element of the list, include <code>itemDivider</code> prop with <code>ListItem</code> component.<br />
The List Divider of NativeBase comes with default style which is easily customisable.

![Preview ios list-divider-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-divider.png)
![Preview android list-divider-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-divider.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListDividerExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
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
        <nb-list-item itemDivider>
          <nb-text>A</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Aaron Bennet</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Ali Connors</nb-text>
        </nb-list-item>
        <nb-list-item itemDivider>
          <nb-text>B</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Bradley Horowitz</nb-text>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-divider.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
