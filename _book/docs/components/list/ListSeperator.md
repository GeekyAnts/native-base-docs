##list-seperator-headref
#### List Separator

Separator component is a separator usually used in list, which can be used for grouping list items. Though it is used with List, you can use it anywhere in your app.<br />

Replacing Component: React Native [View](http://facebook.github.io/react-native/docs/view.html)

![Preview ios list-seperator-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-separator.png)
![Preview android list-seperator-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-separator.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>
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
      <nb-list>
        <nb-separator bordered>
          <nb-text>MIDFIELD</nb-text>
        </nb-separator>
        <nb-list-item>
          <nb-text>Caroline Aaron</nb-text>
        </nb-list-item>
        <nb-list-item last>
          <nb-text>Lee Allen</nb-text>
        </nb-list-item>
        <nb-separator bordered>
          <nb-text>MIDFIELD</nb-text>
        </nb-separator>
        <nb-list-item>
          <nb-text>Caroline Aaron</nb-text>
        </nb-list-item>
        <nb-list-item last>
          <nb-text>Lee Allen</nb-text>
        </nb-list-item>    
      </nb-list>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-separator.png" alt="" style="display:block !important" />
    </div>
</p>
<br />

**Configuration**

<table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>bordered</td>
                <td> - </td>
                <td> - </td>
                <td>Adds border to top and bottom of the separator</td>
            </tr>
            </tbody>
            </table><br />
