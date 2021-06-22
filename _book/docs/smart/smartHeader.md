# Smart Header

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
          <div style="background: url(https://docs-v2.nativebase.io/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('https://docs-v2.nativebase.io/docs/assets/ios/components/header.png')}}" alt="" /></div></th>
        <th>
          <div style="background: url(https://docs-v2.nativebase.io/docs/assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img src="{{('https://docs-v2.nativebase.io/docs/assets/android/components/header.png')}}" alt="" width="266px" height="490px" /></div></th>
      </tr>
    </thead>
  </table>

*Syntax*

<pre><code class="language-jsx">import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'native-base';
export default class HeaderExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Header leftButton={<Icon name="menu" />} title="Smart Header" rightButton={<Icon name="apps" />} />
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
                <td>leftButton</td>
                <td>-</td>
                <td>user-defined</td>
                <td>Can take <code>Text</code> or <code>Icon</code> or any custom <code>View</code> which aligns to the left of Header</td>
            </tr>
            <tr>
                <td>title</td>
                <td>-</td>
                <td>user-defined</td>
                <td>Title Text of the Header aligned at the center</td>
            </tr>
            <tr>
                <td>rightButton</td>
                <td>-</td>
                <td>user-defined</td>
                <td>Can take <code>Text</code> or <code>Icon</code> or any custom <code>View</code> which aligns to the right of Header</td>
            </tr>
            <tr>
                <td>
                  leftButtonPress<br />
                  rightButtonPress
                </td>
                <td>-</td>
                <td>user-defined</td>
                <td>functions on onPress of respective Button</td>
            </tr>
            <tr>
                <td>
                  leftButtonStyle<br />
                  titleStyle<br />
                  rightButtonStyle
                </td>
                <td>-</td>
                <td>user-defined</td>
                <td>Styles for respective components</td>
            </tr>
        </tbody>
    </table><br />
