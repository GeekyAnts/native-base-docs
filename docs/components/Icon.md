# Icon

***Choose from 700+ Icons . . .***<br />
Perfect, crisp, high definition icons and pixel ideal fonts powered by <a href="http://nativebase.io/">NativeBase</a> to preserve matters very high first-rate. You will continually have pixel perfect icons on your initiatives.<br />

*Features of [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons):*
* Can use your own custom icon sets. Supports SVG via Fontello or regular icon fonts.        
* Can use native TabBarIOS.
* Can use icons inline with Text components as emojis or to create buttons.
* Can use the icon as an image if a native component requires it (such as NavigatorIOS).

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/icon.png" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/icon.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
​
export default class IconExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Icon name='ios-home' />
                    &lt;Icon name='ios-menu' style=&#123;{fontSize: 20, color: 'red'}}/>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


* <code>Icon</code> takes two attributes: name, style.
* In case if you want to include icon with custom color, size etc then that should go into <code>style</code>.
* All the icons in the icon libraries of NativeBase, are scalable vector icons that can be customized size, color, etc.
* *Replacing Component: [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)  [<code>&lt;Icon></code>](https://github.com/oblador/react-native-vector-icons#icon-component)*

**Configuration**

<table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>name</td>
                <td> - </td>
                <td> - </td>
                <td>Name of the icon.</td>
            </tr>
            <tr>
                <td>color</td>
                <td>black</td>
                <td>user-defined</td>
                <td>
                    Renders icon with defined color.<br />
                    <font size="1">
                        <i>Note: Include this prop within <code style="background-color: #FFF">style</code></i>
                    </font>
                </td>
            </tr>
            <tr>
                <td>fontSize</td>
                <td>27</td>
                <td>user-defined</td>
                <td>
                    Renders icon with defined icon-size.<br />
                    <font size="1">
                        <i>Note: Include this prop within <code>style</code></i>
                    </font>
                </td>
            </tr>
        </tbody>
    </table>
