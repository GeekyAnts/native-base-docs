## Badge

All of us must have seen notification badges somewhere, such as on smart phones or facebook. NativeBase is here to include this into your collection of readymade components. Badges are numerical indicators of how many items are associated with an element. Badges can notify you that there are new or unread messages or notifications. These can be very effective in alerting the user to new things on your app.

![Preview ios Badge](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/badge.png)
![Preview android Badge](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/badge.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';
export default class BadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          <Badge danger>
            <Text>2</Text>
          </Badge>
          <Badge primary>
          {% raw %}<Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>{% endraw %}
          </Badge>
          {% raw %}<Badge style={{ backgroundColor: 'black' }}>{% endraw %}
            {% raw %}<Text style={{ color: 'white' }}>1866</Text>{% endraw %}
          </Badge>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header/>
    <nb-content padder>
      <nb-badge>
          <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge primary>
          <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge success>
          <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge info>
          <nb-text>5</nb-text>
      </nb-badge>
      <nb-badge warning>
          <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge danger>
          <nb-text>2</nb-text>
      </nb-badge>
      <nb-badge primary>
          <nb-icon name="star" class="icon-star" />
      </nb-badge>
      <nb-badge class="badge-custom-bg">
          <nb-text>1866</nb-text>
      </nb-badge>
    </nb-content>
  </nb-container>
</template>
<style>
.icon-star {
  font-size: 15;
  color: #fff;
  line-height: 20;
}
.badge-custom-bg {
  background-color: black;
}
</style>
{%- endcodetabs %}
<br />

  * [NativeBase](https://nativebase.io/) spectrum of colors are compatible with Badge.
  * Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html) <br />

  **Configuration**

  <table class = "table table-bordered">
  <thead>
      <tr>
          <th>Property</th>
          <th>Default</th>
          <th>Option</th>
          <th width="50%">
              Description
          </th>
      </tr>
  </thead>
  <tbody>
    <tr>
        <td>primary</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a blue background color to your component</td>
    </tr>
    <tr>
        <td>success</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a green background color to your component</td>
    </tr>
    <tr>
        <td>info</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a light blue background color to your component as shown</td>
    </tr>
    <tr>
        <td>warning</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a yellow warning background color to your component</td>
    </tr>
    <tr>
        <td>danger</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a red background color to your component</td>
    </tr>
  </tbody>
</table>
