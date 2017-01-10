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
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../assets/ios/components/content.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../assets/android/components/content.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content } from 'native-base';
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
