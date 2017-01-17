# Smart Button

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
            <div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/button.png')}}" alt="" /></div></th>
          <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490px" width="266px" src="{{('../assets/android/components/button.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
import { Button } from 'native-base/ui';
​
export default class ButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // NativeBase default style
                    &lt;Button buttonText="Click Me" />
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

**Configuration**

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
                <td>IconLeft</td>
                <td> - </td>
                <td> - </td>
                <td>Defines Icon aligned left in the Button</td>
            </tr>
            <tr>
                <td>IconRight</td>
                <td> - </td>
                <td> - </td>
                <td>Defines Icon aligned right in the Button</td>
            </tr>
            <tr>
                <td>buttonText</td>
                <td> - </td>
                <td> - </td>
                <td>Defines Text for the Button</td>
            </tr>
            <tr>
                <td>style</td>
                <td> - </td>
                <td> - </td>
                <td>Defines button style</td>
            </tr>
            <tr>
                <td>buttonTextStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Defines button text style</td>
            </tr>
        </tbody>
    </table>

    *Note: Accepts all other props of Button components too.*
