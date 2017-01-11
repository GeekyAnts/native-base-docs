# Thumbnail

Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions and shapes. By default, Thumbnail renders an image in circular shape.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;Image></code>](https://facebook.github.io/react-native/docs/image.html)*

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/thumbnail.png" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/thumbnail.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Thumbnail, Text } from 'native-base';
​
export default class ThumbnailExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Text>Square Thumbnail&lt;/Text>
                    &lt;Thumbnail square source={require('./img/one.png')} />
                    &lt;Thumbnail square size={80} source={require('./img/one.png')} />

                    &lt;Text>Circular Thumbnail&lt;/Text>
                    &lt;Thumbnail source={require('./img/two.png')} />
                    &lt;Thumbnail size={80} source={require('./img/two.png')} />
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


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
                <td>square</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Represents shape of thumbnail.<br />
                    By default thumbnail is circle in shape.
                </td>
            </tr>
            <tr>
                <td>size</td>
                <td>30</td>
                <td>user-defined</td>
                <td>Dimension of thumbnail.</td>
            </tr>
        </tbody>
    </table>
