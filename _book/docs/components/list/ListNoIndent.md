## listitem-noIndent-headref
#### ListItem NoIndent

![Preview ios listitem-noIndent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-noIndent.png)
![Preview android listitem-noIndent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-noIndent.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class ListItemNoIndentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {% raw %}<ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>{% endraw %}
              <Left>
                <Text>Simon Mignolet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
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
        <nb-list-item noIndent class="bg-style">
          <nb-left>
            <nb-text>Simon Mignolet</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
        <nb-list-item >
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
<style>
  .bg-style {
    background-color: #cde1f9;
  }
</style>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-noIndent.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
