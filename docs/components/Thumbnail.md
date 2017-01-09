<div class="section" id="thumbnail">

    <h2>Thumbnail</h2>

    <p style="padding-bottom: 15px;">
        Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions and shapes. By default, Thumbnail renders an image in circular shape.<br />
        <i>
            Replacing Component:
            <a href="https://facebook.github.io/react-native/">React Native</a>
            <a href="https://facebook.github.io/react-native/docs/image.html">
                <code>&lt;Image></code>
            </a>
        </i>
    </p>

    <i>Syntax</i>

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
}</code></pre><br />

    <b>Configuration</b><br />
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
    </table><br />

</div>
