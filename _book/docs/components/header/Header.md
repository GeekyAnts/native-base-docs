## header-def-headref
## Header
 
* [NativeBase](https://nativebase.io/) component that renders as Header (navbar) for your screen.
* There can be a single Header component into your Container.
* To have Header for your screen, include <code>Header</code> component within <code>Container</code>.
* Header takes input as: <code>Left</code>, <code>Body</code> and <code>Right</code>, and expects all three of them.
* The components those are defined within <code>Header</code> will be rendered in the same order that you define them.
* Header provides you with stylesheet.
* User can add custom styles while defining <code>Header</code> within their app.
* Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

![Preview ios header-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-with-title.png)
![Preview android header-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/header-with-title.png)

**Contents:**
* [Header with only title](Components.md#title-header-headref)
* [Header with Title and Subtitle](Components.md#header-title-subtitle-headref)
* [Header with Icon Buttons](Components.md#header-icon-headref)
* [Header with Text Buttons](Components.md#header-text-button-headref)
* [Header with Icon Button and Text Button](Components.md#header-icon-button-text-button-headref)
* [Header with Icon and Text Button](Components.md#header-icon-text-button-headref)
* [Header with Multiple Icon Button](Components.md#header-multiple-icon-headref)
* [Header Span](Components.md#header-span-headref)
* [Header No Shadow](Components.md#header-no-shadow-headref)
* [Header No Left](Components.md#header-no-left-headref)
* [Header Transparent](Components.md#header-transparent-headref)


*Syntax*
{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="menu" />
        </nb-button>
      </nb-right>
    </nb-header>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
<br />

**Configuration**<br />
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
                <td>Left</td>
                <td>-</td>
                <td>-</td>
                <td>Components render to the left in Header</td>
            </tr>
            <tr>
                <td>Body</td>
                <td> - </td>
                <td>-</td>
                <td>Components render at the center of Header</td>
            </tr>
            <tr>
                <td>Right</td>
                <td> - </td>
                <td>-</td>
                <td>Components render to the right in Header</td>
            </tr>
            <tr>
                <td>iosBarStyle</td>
                <td> - </td>
                <td>light-content, dark-content, default</td>
                <td>Set iOS barStyle</td>
            </tr>
            <tr>
                <td>androidStatusBarColor</td>
                <td> - </td>
                <td> - </td>
                <td>Set background color for status bar in android</td>
            </tr>
            <tr>
                <td>noShadow</td>
                <td> - </td>
                <td> boolean </td>
                <td>Removes elevation from android</td>
            </tr>
            <tr>
                <td>searchBar</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add searchbar to header or not</td>
            </tr>
            <tr>
                <td>rounded</td>
                <td> - </td>
                <td> boolean </td>
                <td>Make header searchbar rounded</td>
            </tr>
            <tr>
                <td>hasSubtitle</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add subtitle to header</td>
            </tr>
            <tr>
                <td>hasSegment</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add segments to header</td>
            </tr>
            <tr>
                <td>hasTabs</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add tabs to header</td>
            </tr>
            <tr>
                <td>hasText</td>
                <td> - </td>
                <td> boolean </td>
                <td>This is <code>button</code> prop. Adds necessary padding when Text button defined in Left / Right of Header (iOS)</td>
            </tr>
            <tr>
                <td>noLeft</td>
                <td> - </td>
                <td> boolean </td>
                <td>Eliminates Left component and moves Title towards left (Android)</td>
            </tr>
            <tr>
                <td>span</td>
                <td> - </td>
                <td> boolean </td>
                <td>Doubles the header size</td>
            </tr>
            <tr>
                <td>transparent</td>
                <td> - </td>
                <td> boolean </td>
                <td> removes border of Header,shadow from iOS Header and elevation from Android Header. </td>
            </tr>
        </tbody>
    </table>
     <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/header-with-title.png" alt="" style="display:block !important" />
    </div>
</p>
    <br />
