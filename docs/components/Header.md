# Header
* [NativeBase](http://nativebase.io/) component that renders as Header (navbar) for your screen.
* There can be a single Header component into your Container.
* To have Header for your screen, include <code>&lt;Header></code> component within <code>&lt;Container></code>.
* Header takes input as: Button and Title (Text)
* The components those are defined within <code>&lt;Header></code> will be rendered in the same order that you define them.
* Header provides you with stylesheet.
* User can add custom styles while defining <code>&lt;Header></code> within their app.
* *Replacing Component:
  [React Native](https://facebook.github.io/react-native/)
  [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

<br />
  <table>
    <thead>
      <tr style="border-style: hidden">
        <th style="border-style: hidden; padding-right: 34px;">IOS</th>
        <th style="padding-right: 140px;">Android</th>
      </tr>
    </thead>
    <thead>
      <tr style="border-style: hidden">
        <th style="border-style: hidden;">
          <div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/header.png')}}" alt="" /></div></th>
        <th>
          <div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img src="{{('../assets/android/components/header.png')}}" alt="" width="266px" height="490px" /></div></th>
      </tr>
    </thead>
  </table>

*Syntax*
{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Icon } from 'native-base/ui';
import { Header } from 'native-base';
​
export default class HeaderExample extends Component {
    render() {
        return (
            <Container>
                <Header leftButton={<Icon name="arrow-back" />} title="Header" rightButton={<Icon name="apps" />} />
            </Container>
        );
    }
}
{%- language name="Advanced", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Title, Button, Icon, Left, Body, Right } from 'native-base/ui';
​
export default class HeaderExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="arow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button>
                            <Icon name="menu" />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}
{%- endcodetabs %}

**Configuration**<br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th></th>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="5">Basic</th>
                <td>leftButton</td>
                <td>-</td>
                <td>user-defined</td>
                <td>Can take <code>Text</code> or <code>Icon</code> or any custom <code>View</code> which aligns to the left of Header</td>
            </tr>
            <tr>
                <td>title</td>
                <td>-</td>
                <td>user-defined</td>
                <td>Title Text of the Header aligned at the center</td>
            </tr>
            <tr>
                <td>rightButton</td>
                <td>-</td>
                <td>user-defined</td>
                <td>Can take <code>Text</code> or <code>Icon</code> or any custom <code>View</code> which aligns to the right of Header</td>
            </tr>
            <tr>
                <td>
                  leftButtonPress<br />
                  rightButtonPress
                </td>
                <td>-</td>
                <td>user-defined</td>
                <td>functions on onPress of respective Button</td>
            </tr>
            <tr>
                <td>
                  leftButtonStyle<br />
                  titleStyle<br />
                  rightButtonStyle
                </td>
                <td>-</td>
                <td>user-defined</td>
                <td>Styles for respective components</td>
            </tr>
            <tr>
                <th rowspan="2">Advanced</th>
                <td>backgroundColor</td>
                <td>
                    iOS: #F8F8F8<br />
                    Android: #039BE5
                </td>
                <td>user-defined</td>
                <td>Background color for header</td>
            </tr>
            <tr>
                <td>height</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Height for header</td>
            </tr>
        </tbody>
    </table><br />
