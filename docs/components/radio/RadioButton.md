## radio-button-headref
## Radio Button

Radio buttons let the user select any one from a set of options.<br />
Replacing Component: React Native [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html)


![Preview ios radio-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/radio.png)
![Preview android radio-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/radio.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
export default class RadioButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio selected={true} />
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
      <nb-list-item :selected="true">
        <nb-left>
          <nb-text>Lunch Break</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio :selected="true" />
        </nb-right>
      </nb-list-item>
      <nb-list-item :selected="false">
        <nb-left>
          <nb-text>Daily Stand Up</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio :selected="false"/>
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />


**Configuration**

<table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>selected</td>
                <td>false</td>
                <td>boolean</td>
                <td>Represents the state value of an item from set of choices.</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>color</td>
                <td>-</td>
                <td>user-defined color</td>
                <td>Inactive radio color</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>selectedColor</td>
                <td>-</td>
                <td>user-defined color</td>
                <td>Active radio color</td>
            </tr>
        </tbody>
    </table><br />
