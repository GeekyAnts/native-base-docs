## search-bar-headref
## Search Bar

It’s kind of common on the Internet where – if we fail to get what we are looking for on a website, we resort to searching. Search box has always been an essential part of any application.

![Preview ios search-bar-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/searchbar.png)
![Preview android search-bar-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/searchbar.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header searchBar rounded>
      <nb-item>
        <nb-icon active name="search" />
        <nb-input placeholder="Search" />
        <nb-icon active name="people" />
      </nb-item>
      <nb-button transparent>
        <nb-text>Search</nb-text>
      </nb-button>
    </nb-header>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

* <code>searchBar</code>: Prop to be used with <code>&lt;Header></code> component to have Search bar onto the Header section of your screen.
* Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)



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
                <td>rounded</td>
                <td>regular</td>
                <td> - </td>
                <td>
                    Wraps the search bar with predefined border options.
                </td>
            </tr>
        </tbody>
    </table><br />
