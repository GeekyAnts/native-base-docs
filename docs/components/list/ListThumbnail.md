#### List Thumbnail

List Thumbnails are medium to exhibit an image with your list item. To create a thumbnail list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component with few props and style.

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-thumbnail.png" alt="" /></div></th>
      <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/list-thumbnail.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';
​
export default class ListThumbnailExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Thumbnail square size={80} source={require('./img/one.png')} />
                            &lt;Text>Sankhadeep&lt;/Text>
                            &lt;Text note>Its time to build a difference . .&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre>
