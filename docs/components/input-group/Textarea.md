

## textarea-textbox-headref
#### Textarea

Creates a text area to input multiline text.

![Preview ios textarea-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-textarea.png)
![Preview android textarea-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-textarea.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Textarea, Form } from "native-base";
export default class TextArea extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
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
        <nb-textarea :rowSpan="5" bordered placeholder="Textarea" />
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
