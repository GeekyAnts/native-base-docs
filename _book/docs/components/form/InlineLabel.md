## inline-label-headref
#### Inline Label

The <code>inlineLabel</code> property creates an Input component, whose Label is in-line with Input and does not hide when text is entered. It can be used with placeholder as well.


![Preview ios inline-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-inline.png)
![Preview android inline-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-inline.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class InlineLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
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
        <nb-item inlineLabel>
          <nb-label>Username</nb-label>
          <nb-input />
        </nb-item>
        <nb-item inlineLabel last>
          <nb-label>Password</nb-label>
          <nb-input />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
