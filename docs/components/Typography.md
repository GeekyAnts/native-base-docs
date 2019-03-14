## Typography

NativeBase provides you with the Heading Tags, namely <code>H1</code>, <code>H2</code> and <code>H3</code> components. These Heading tags helps you prioritize the content of your screen.<br />
Replacing Component for H1, H2, H3, Text: React Native [Text](http://facebook.github.io/react-native/docs/text.html) <br />

![Preview ios Typography](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/typography.png)
![Preview android Typography](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/typography.png)


*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base';
export default class TypographyExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <H1>Header One</H1>
          <H2>Header Two</H2>
          <H3>Header Three</H3>
          <Text>Default</Text>
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
      <nb-h1>Header One</nb-h1>
      <nb-h2>Header Two</nb-h2>
      <nb-h3>Header Three</nb-h3>
      <nb-text>Default</nb-text>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/typography.png" alt="" style="display:block !important" />
    </div>
</p>
<br />


**Configuration**
<table class="table table-bordered">
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
                <td>H1</td>
                <td>font-size: 27</td>
                <td>string, number</td>
                <td>Heading tag &lt;H1></td>
            </tr>
            <tr>
                <td>H2</td>
                <td>font-size: 24</td>
                <td>string, number</td>
                <td>Heading tag &lt;H2></td>
            </tr>
            <tr>
                <td>H3</td>
                <td>font-size: 21</td>
                <td>string, number</td>
                <td>Heading tag &lt;H3></td>
            </tr>
        </tbody>
    </table><br />
