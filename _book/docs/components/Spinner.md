## Spinner

If you have certain screens of your app that take some time to load, you may want to consider a page loader. A page loader is any kind of animation that visually communicates to a visitor that the page is loading and to just sit tight for a few seconds. Without a page loader, user might think that the app is being unresponsive and just click away in frustration. A page loader also provides a small distraction which can actually makes the wait seem much shorter.<br />
Replacing Component: React Native [ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator.html)

![Preview ios Spinner](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/spinner.gif)
![Preview android Spinner](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/spinner.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
export default class SpinnerExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner />
          <Spinner color='red' />
          <Spinner color='green' />
          <Spinner color='blue' />
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header/>
    <nb-content>
        <nb-spinner />
        <nb-spinner color="red" />
        <nb-spinner color="green" />
        <nb-spinner color="blue" />
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
  <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/spinner.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />


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
                <td>color</td>
                <td>#45D56E</td>
                <td>user-defined</td>
                <td>Color of Spinner</td>
            </tr>
        </tbody>
    </table><br />
