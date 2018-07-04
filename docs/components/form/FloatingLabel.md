## floating-label-headref
#### Floating Label

The <code>floatingLabel</code> property creates an Input component, whose Label animates upward when input is selected and animates downward when input is erased.

![Preview ios floating-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-floating.gif)
![Preview android floating-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-floating.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
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
        <nb-item floatingLabel>
          <nb-label>Username</nb-label>
          <nb-input />
        </nb-item>
        <nb-item floatingLabel last>
          <nb-label>Password</nb-label>
          <nb-input />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

When using floatingLabel, use `getRef` to get the reference of `<Input/>` component. Always wrap floatingLabel component with `<Form/>`.
