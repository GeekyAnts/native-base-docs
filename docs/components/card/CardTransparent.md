
## card-transparent-headref
#### Transparent Card

A transparent card can be created using `transparent` props with &lt;CardItem>.

![Preview ios card-transparent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/ios/card-transparent.png)
![Preview android card-transparent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/android/card-transparent.png)

*Syntax*

```
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right } from "native-base";

export default class CardTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Transparent Card</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
```
