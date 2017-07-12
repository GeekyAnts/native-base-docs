## Badge

All of us must have seen notification badges somewhere, such as on smart phones or facebook. NativeBase is here to include this into your collection of readymade components. Badges are numerical indicators of how many items are associated with an element. Badges can notify you that there are new or unread messages or notifications. These can be very effective in alerting the user to new things on your app.

![Preview ios Badge](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/badge.png)
![Preview android Badge](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/badge.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Badge, Text, Icon } from 'native-base';
export default class BadgeExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Badge>
            &lt;Text>2&lt;/Text>
          &lt;/Badge>
          &lt;Badge primary>
            &lt;Text>2&lt;/Text>
          &lt;/Badge>
          &lt;Badge success>
            &lt;Text>2&lt;/Text>
          &lt;/Badge>
          &lt;Badge info>
            &lt;Text>2&lt;/Text>
          &lt;/Badge>
          &lt;Badge warning>
            &lt;Text>2&lt;/Text>
          &lt;/Badge>
          &lt;Badge danger>
            &lt;Text>2&lt;/Text>
          &lt;/Badge>
          &lt;Badge primary>
            &lt;Icon name="star" style=&#123;{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
          &lt;/Badge>
          &lt;Badge style=&#123;{ backgroundColor: 'black' }}>
            &lt;Text style=&#123;{ color: 'white' }}>1866&lt;/Text>
          &lt;/Badge>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

  * [NativeBase](https://nativebase.io/) spectrum of colors are compatible with Badge.
  * Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html) <br />

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
        <td>primary</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a blue background color to your component</td>
    </tr>
    <tr>
        <td>success</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a green background color to your component</td>
    </tr>
    <tr>
        <td>info</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a light blue background color to your component as shown</td>
    </tr>
    <tr>
        <td>warning</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a yellow warning background color to your component</td>
    </tr>
    <tr>
        <td>danger</td>
        <td> - </td>
        <td>boolean</td>
        <td>Add a red background color to your component</td>
    </tr>
  </tbody>
</table>
