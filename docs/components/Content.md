# Content

* This is a [NativeBase](http://nativebase.io/) component which renders as <b>body</b> element of your screen.
* Each screen can have only one <code>&lt;Content></code> component and can be defined anywhere within the Container.
* Content takes in the whole collection of [React Native](https://facebook.github.io/react-native/) and NativeBase components.
* Content provides you with stylesheet.
* User can add custom styles while defining <code>&lt;Content></code> within their app.
* *Replacing Component:
  [React Native Keyboard Aware Scroll View's <code>&lt;KeyboardAwareScrollView></code>](https://github.com/APSL/react-native-keyboard-aware-scroll-view)*

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
            <div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/content.png')}}" alt="" /></div>
          </th>
          <th>
            <div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;">
            <img height="490px" width="266px" src="{{('../assets/android/components/content.png')}}" alt="" />
            </div>
          </th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content } from 'native-base/ui';
​
export default class ContentExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Your main content goes here
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
