

## textarea-textbox-headref
#### Textarea

Creates a text area to input multiline text.

![Preview ios text-area-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/screenshots/ios/text-area.png)
![Preview android text-area-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/screenshots/android/text-area.png)

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
