## dynamic-list-headref
#### Dynamic List

A center aspect designed for efficient representation of vertically scrolling lists of changing data. The simplest way is to create a <code>List dataArray</code>, populate it with an array of data chunks, and instantiate a <code>ListItem</code> component with that chunk of data and a <code>renderRow</code> callback which takes a chunk from the whole data array and returns a renderable component.

![Preview ios dynamic-list-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-dynamic.png)
![Preview android dynamic-list-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-dynamic.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class DynamicListExample extends Component {
  render() {
    var items = [
      'Simon Mignolet',
      'Nathaniel Clyne',
      'Dejan Lovren',
      'Mama Sakho',
      'Emre Can'
    ];
    return (
      <Container>
        <Header />
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
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
        <nb-list-item v-for="item in items" :key="item">
          {% raw %}<nb-text>{{item}}</nb-text>{% endraw %}
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>
<script>
export default {
  data: function() {
    return {
      items: [
        "Simon Mignolet",
        "Nathaniel Clyne",
        "Dejan Lovren",
        "Mama Sakho",
        "Emre Can",
      ]
    };
  }
};
</script>
{%- endcodetabs %}
<br />

For more advanced implementation of rendering list dynamically, take a look at [nativebase-tutorial](https://github.com/GeekyAnts/nativebase-tutorial).
