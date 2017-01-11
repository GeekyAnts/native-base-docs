# Badge

All of us must have seen notification badges somewhere, such as on smart phones or facebook. [NativeBase](http://nativebase.io/) is here to include this into your collection of readymade components. Badges are numerical indicators of how many items are associated with an element. Badges can notify you that there are new or unread messages or notifications. These can be very effective in alerting the user to new things on your app.

<br />
  <table>
    <thead>
      <tr style="border-style: hidden">
        <th style="border-style: hidden; padding-right: 34px;">IOS</th>
        <th style="padding-right: 140px;">Android</th>
      </tr>
    </thead>
    <thead>
      <tr style="border-style: hidden">
        <th style="border-style: hidden">
          <div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/badge.png" alt="" /></div></th>
        <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490px" width="266px" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/badge.png" alt="" /></div></th>
      </tr>
    </thead>
  </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Badge } from 'native-base';
​
export default class BadgeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Badge>2&lt;/Badge>
                    &lt;Badge primary>2&lt;/Badge>
                    &lt;Badge success>2&lt;/Badge>
                    &lt;Badge info>2&lt;/Badge>
                    &lt;Badge warning>2&lt;/Badge>
                    &lt;Badge danger>2&lt;/Badge>
                    &lt;Badge
                      style=&#123;{ backgroundColor: 'black' }}
                      textStyle=&#123;{ color: 'white' }}>
                        1866
                    &lt;/Badge>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

* [NativeBase](http://nativebase.io/) spectrum of colors are compatible with Badge.
* Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)


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
                <td>backgroundColor</td>
                <td>red</td>
                <td>user-defined</td>
                <td>Background color for badge.</td>
            </tr>
            <tr>
                <td>width</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Width of badge.</td>
            </tr>
            <tr>
                <td>color</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Text color for badge.</td>
            </tr>
            <tr>
                <td>fontSize</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Text font size of badge.</td>
            </tr>
            <tr>
                <td>lineHeight</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Padding on top of Text</td>
            </tr>
        </tbody>
    </table>
    <br />
