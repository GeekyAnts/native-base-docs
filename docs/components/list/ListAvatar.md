#### List Avatar

List Avatars are medium to showcase an image with your list item whose dimension lays between icon and dimension. To create a avatar list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component.

<table>
<thead>
  <tr style="border-style: hidden;">
    <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
    <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
  </tr>
</thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-avatar.png" alt="" /></div></th>
      <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/list-avatar.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base/ui';
​
export default class ListAvatarExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Thumbnail source={require('./img/one.png')} />
                            &lt;Body>
                                &lt;Text>Kumar Pratik&lt;/Text>
                                &lt;Text note>Doing what you like will always keep you happy . .&lt;/Text>
                            &lt;/Body>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Thumbnail source={require('./img/two.png')} />
                            &lt;Body>
                                &lt;Text>Kumar Sanket&lt;/Text>
                                &lt;Text note>Life is one time offer! Use it well&lt;/Text>
                            &lt;/Body>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre>
