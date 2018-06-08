## Thumbnail

Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions and shapes. By default, Thumbnail renders an image in circular shape.<br />
Replacing Component: React Native [Image](https://facebook.github.io/react-native/docs/image.html)

![Preview ios Thumbnail](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/thumbnail.png)
![Preview android Thumbnail](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/thumbnail.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Text>Square Thumbnail&lt;/Text>
          &lt;Thumbnail square source=&#123;{uri: uri}} />
          &lt;Thumbnail square small source=&#123;{uri: uri}} />
          &lt;Text>Circular Thumbnail&lt;/Text>
          &lt;Thumbnail source=&#123;{uri: uri}} />
          &lt;Thumbnail large source=&#123;{uri: uri}} />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

**Note:** To have Thumbnail of custom size, include height and width with <code>style</code>.


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
