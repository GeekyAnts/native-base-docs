## listitem-selected-headref
#### ListItem Selected

The ListItem's Selected component highlights the current listitem which is selected. Include <code>selected</code> prop with <code>ListItem</code> component. This prop comes with default style which is easily customisable.

![Preview ios listitem-selected-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-selected.png)
![Preview android listitem-selected-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-selected.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class ListItemSelectedExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text>Simon Mignolet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Nathaniel Clyne</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
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
      <nb-list>
        <nb-list-item selected>
          <nb-left>
            <nb-text>Simon Mignolet</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item>
          <nb-left>
            <nb-text>Nathaniel Clyne</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item>
          <nb-left>
            <nb-text>Dejan Lovren</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-selected.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
