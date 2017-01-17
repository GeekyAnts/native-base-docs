# Footer
* [NativeBase](http://nativebase.io/) component that renders as Footer for your screen.
* There can be a single Footer component into your Container.
* To have Footer for your screen, include <code>&lt;Footer></code> component within <code>&lt;Container></code>.
* Footer takes input as: Button, Text, Icon, InputGroup or any other custom View.
* The components those are defined within <code>&lt;Footer></code> will be rendered in the same order that you define them.
* Footer is provided with default platform specific styles.
* User can add custom styles while defining <code>&lt;Footer></code> within their app.
* *Replacing Component:
  [React Native](https://facebook.github.io/react-native/)
  [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

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
          <div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/footer.png')}}" alt="" /></div></th>
        <th>
          <div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img src="{{('../assets/android/components/footer.png')}}" alt="" width="266px" height="490px" /></div></th>
      </tr>
    </thead>
  </table>

*Syntax*

<pre><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Text, Button, Icon, Left, Body, Right } from 'native-base/ui';
​
export default class HeaderExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Footer>
                    &lt;Left>
                        &lt;Button transparent>
                            &lt;Icon name='call' />
                        &lt;/Button>
                    &lt;/Left>

                    &lt;Body>
                        &lt;Text>Footer&lt;/Text>
                    &lt;/Body>

                    &lt;Right>
                        &lt;Button transparent>
                            &lt;Icon name='message' />
                        &lt;/Button>
                    &lt;/Right>
                &lt;/Footer>
            &lt;/Container>
        );
    }
}</code></pre>


**Configuration**<br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>backgroundColor</td>
                <td>
                    iOS: #F8F8F8<br />
                    Android: #039BE5
                </td>
                <td>user-defined</td>
                <td>Background color for header</td>
            </tr>
            <tr>
                <td>height</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Height for header</td>
            </tr>
        </tbody>
    </table><br />
