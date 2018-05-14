

## textarea-textbox-headref
#### Textarea

Creates a text area to input multiline text.

![Preview ios textarea-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/ios/input-textarea.png)
![Preview android textarea-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/android/input-textarea.png)

*Syntax*

```
import React, { Component } from "react";
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form } from "native-base";
export default class TextArea extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Textarea</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </Form>
        </Content>
      </Container>
    );
  }
}
```
