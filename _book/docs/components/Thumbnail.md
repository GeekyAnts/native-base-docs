# Thumbnail

Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions and shapes. By default, Thumbnail renders an image in circular shape.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;Image></code>](https://facebook.github.io/react-native/docs/image.html)*

![Preview ios Thumbnail](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/thumbnail.png)
![Preview android Thumbnail](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/thumbnail.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Text>Square Thumbnail&lt;/Text>
                    &lt;Thumbnail square source={require('./img/one.png')} />
                    &lt;Thumbnail square source={require('./img/one.png')} />
                    &lt;Text>Circular Thumbnail&lt;/Text>
                    &lt;Thumbnail source={require('./img/two.png')} />
                    &lt;Thumbnail source={require('./img/two.png')} />
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


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
                <td>small</td>
                <td> - </td>
                <td> - </td>
                <td>Small thumbnail with width and height of 40px.</td>
            </tr>
            <tr>
                <td>large</td>
                <td> - </td>
                <td> - </td>
                <td>Large thumbnail with width and height of 80px.</td>
            </tr>
        </tbody>
    </table><br />
