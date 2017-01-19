#### Essential cross-platform UI components for React Native
[NativeBase](http://nativebase.io/) is a free and open source UI component library for [React Native](https://facebook.github.io/react-native/) to build native mobile apps for iOS and Android platforms.


<img src='/docs/assets/web-cover1.jpg' width=100% >


One of our main goals with [NativeBase](http://nativebase.io/) **2.0** is to make it easy to theme the components with as little changes as possible to the components themselves.

*General Syntax of NativeBase Component*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
​
export default class IconExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Button>
                    &lt;Text>
                        Button
                    &lt;/Text>
                &lt;/Button>
            &lt;/Container>
        );
    }
}</code></pre>
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
      <th style="border-style: hidden;">
        <div style="background: url(/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('/docs/assets/ios/components/button.png')}}" alt="" /></div></th>
      <th>
        <div style="background: url(/docs/assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img src="{{('/docs/assets/android/components/button.png')}}" alt="" width="266px" height="490px" /></div></th>
    </tr>
  </thead>
</table>

**[How to get started?](/docs/GetStarted.md)**

**[How to migrate from v0.x to v2.x?](/docs/Migration.md)**
