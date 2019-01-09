## list-icon-headref
#### List Icon

Lists can have icons assigned either to the left and/or right side of each list item.
Along with icons, list item can also have badges assigned.
To have note kind of text for list item, include <code>note</code> prop with <code>Text</code> component of <code>ListItem</code>.

![Preview ios list-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-icon.png)
![Preview android list-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-icon.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class ListIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem icon>
            <Left>
              {% raw %}<Button style={{ backgroundColor: "#FF9501" }}>{% endraw %}
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              {% raw %}<Button style={{ backgroundColor: "#007AFF" }}>{% endraw %}
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              {% raw %}<Button style={{ backgroundColor: "#007AFF" }}>{% endraw %}
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
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
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#FF9501' }">
            <nb-icon active name="plane" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Airplane Mode</nb-Text>
        </nb-body>
        <nb-right>
          <nb-switch :value="false" />
      </nb-right>
    </nb-list-item>
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#007AFF' }">
            <nb-icon active name="wifi" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Wi-Fi</nb-text>
        </nb-body>
        <nb-right>
          <nb-text>GeekyAnts</nb-text>
          <nb-icon active name="arrow-forward" />
        </nb-right>
      </nb-list-item>
      <nb-list-item icon>
        <nb-left>
          <nb-button :style="{ backgroundColor: '#007AFF' }">
            <nb-icon active name="bluetooth" />
          </nb-button>
        </nb-left>
        <nb-body>
          <nb-text>Bluetooth</nb-text>
        </nb-body>
        <nb-right>
          <nb-text>On</nb-text>
          <nb-icon active name="arrow-forward" />
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />



**Note:** [Switch](http://facebook.github.io/react-native/docs/switch.html) included in above example is from React Native.
