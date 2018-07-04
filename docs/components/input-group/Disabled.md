## disabled-textbox-headref
#### Disabled Textbox

To restrict inputting data into textbox, include the <code>disabled</code> prop with <code>Item</code> and <code>Input</code>.

![Preview ios disabled-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-disabled.png)
![Preview android disabled-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-disabled.png)

*Syntax*
{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
export default class DisabledTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item disabled>
            <Input disabled placeholder='Disabled Textbox'/>
            <Icon name='information-circle' />
          </Item>
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
      <nb-form>
        <nb-item disabled>
          <nb-input disabled placeholder='Disabled Textbox' />
          <nb-icon name="information-circle" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
