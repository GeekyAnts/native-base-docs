## checkbox-headref
## Check Box

Check Box allows the user to select a number of items from a set of choices.<br />
Replacing Component: React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html)

![Preview ios checkbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/checkbox.png)
![Preview android checkbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/checkbox.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
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
      <nb-list-item>
        <nb-checkbox :checked="true" />
        <nb-body>
          <nb-text>Daily Stand Up</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item>
        <nb-checkbox :checked="false" />
        <nb-body>
          <nb-text>Discussion with Client</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item>
        <nb-checkbox :checked="false" color="green"/>
        <nb-body>
          <nb-text>Finish list Screen</nb-text>
        </nb-body>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
br />

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
                <td>checked</td>
                <td>false</td>
                <td>boolean</td>
                <td>State value of an item from set of choices</td>
            </tr>
            <tr>
                <td>color</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Background color of checkbox</td>
            </tr>
            <tr>
                <td>onPress</td>
                <td> - </td>
                <td> - </td>
                <td>Handler to be called when the user selects / unselects the checkbox</td>
            </tr>
        </tbody>
    </table><br/>
