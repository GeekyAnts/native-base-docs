## Thumbnail

Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions and shapes. By default, Thumbnail renders an image in circular shape.<br />
Replacing Component: React Native [Image](https://facebook.github.io/react-native/docs/image.html)

![Preview ios Thumbnail](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/thumbnail.png)
![Preview android Thumbnail](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/thumbnail.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header />
        <Content>
          <Text>Square Thumbnail</Text>
          {% raw %}<Thumbnail square small source={{uri: uri}} />{% endraw %}
          {% raw %}<Thumbnail square source={{uri: uri}} />{% endraw %}
          {% raw %}<Thumbnail square large source={{uri: uri}} />{% endraw %}
          <Text>Circular Thumbnail</Text>
          {% raw %}<Thumbnail small source={{uri: uri}} />{% endraw %}
          {% raw %}<Thumbnail source={{uri: uri}} />{% endraw %}
          {% raw %}<Thumbnail large source={{uri: uri}} />{% endraw %}
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
      <nb-text>Square Thumbnail</nb-text>
      <nb-thumbnail square small :source="logo" />
      <nb-thumbnail square :source="logo" />
      <nb-thumbnail square large :source="logo" />
      <nb-text>Circular Thumbnail</nb-text>
      <nb-thumbnail small :source="logo" />
      <nb-thumbnail :source="logo" />
      <nb-thumbnail large :source="logo" />
    </nb-content>
  </nb-container>
</template>
<script>
import logo from "favicon.png";
export default {
  data: function() {
    return {
      logo: logo,
    };
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/thumbnail.png" alt="" style="display:block !important" />
    </div>
</p>
<br />

**Note:** To have Thumbnail of custom size, specify <code>height</code>, <code>width</code> and <code>borderRadius</code> within <code>style</code>.


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
                <td>source</td>
                <td> - </td>
                <td> - </td>
                <td>Image path for thumbnail.</td>
            </tr>
            <tr>
                <td>circle</td>
                <td>true</td>
                <td> - </td>
                <td>
                    Represents shape of thumbnail.<br />
                    By default thumbnail is circle in shape.
                </td>
            </tr>
            <tr>
                <td>square</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Represents shape of thumbnail
                </td>
            </tr>
            <tr>
                <td>small</td>
                <td> - </td>
                <td> - </td>
                <td>Small thumbnail with width and height of 36px</td>
            </tr>
            <tr>
                <td>large</td>
                <td> - </td>
                <td> - </td>
                <td>Large thumbnail with width and height of 80px</td>
            </tr>
        </tbody>
    </table><br />
