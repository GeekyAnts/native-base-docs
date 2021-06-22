## icon-def-headref
## Icon

Perfect, crisp, high definition icons and pixel ideal fonts powered by <a href="https://nativebase.io/">NativeBase</a> to preserve matters very high first-rate. You will continually have pixel perfect icons on your initiatives.<br />
Here is a repo that lists down icons of available `react-native-vector-icons` icon families. [Repo](https://github.com/GeekyAnts/NativeBase-VectorIconApp)<br />

*Uses Ionicons from [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)*

![Preview ios icon-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/icons.png)
![Preview android icon-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/icons.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
export default class IconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Icon name='home' />
          {% raw %}<Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>{% endraw %}
          <Icon type="FontAwesome" name="home" />
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-icon name='home' />
      <nb-icon ios="ios-menu" android="md-menu" :style="{ fontSize: 20, color: 'red' }" />
      <nb-icon type="FontAwesome" name="home"/>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />


* <code>Icon</code> can take any two of the following attributes: name, ios, android.
* In case if you want to include icon with custom color, size etc then that should go into <code>style</code>.
* All the icons in the icon libraries of NativeBase, are scalable vector icons that can be customized in terms of size, color, etc.

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
                <td>ios</td>
                <td> - </td>
                <td> - </td>
                <td>Name of the icon for iOS devices.</td>
            </tr>
            <tr>
                <td>android</td>
                <td> - </td>
                <td> - </td>
                <td>Name of the icon for Android devices.</td>
            </tr>
            <tr>
                <td>active</td>
                <td>true</td>
                <td>boolean</td>
                <td>Renders filled icons</td>
            </tr>
            <tr>
                <td>color</td>
                <td>black</td>
                <td>user-defined</td>
                <td>
                    Renders icon with defined color.<br />
                    Include this prop within <code>style</code>
                </td>
            </tr>
            <tr>
                <td>fontSize</td>
                <td>27</td>
                <td>user-defined</td>
                <td>
                    Renders icon with defined icon-size.<br />
                    Include this prop within <code>style</code>
                </td>
            </tr>
            <tr>
                <td>type</td>
                <td>Ionicons</td>
                <td>AntDesign, Ionicons, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Foundation, MaterialIcons, MaterialCommunityIcons, Octicons, Roboto, rubicon-icon-font, SimpleLineIcons, Zocial</td>
                <td>Specifies icon family from IonIcons</td>
            </tr>
        </tbody>
    </table>
     <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/icons.png" alt="" style="display:block !important" />
    </div>
</p>
    <br />