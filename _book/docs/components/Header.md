## header-def-headref
## Header
 
* [NativeBase](https://nativebase.io/) component that renders as Header (navbar) for your screen.
* There can be a single Header component into your Container.
* To have Header for your screen, include <code>Header</code> component within <code>Container</code>.
* Header takes input as: <code>Left</code>, <code>Body</code> and <code>Right</code>.
* The components those are defined within <code>Header</code> will be rendered in the same order that you define them.
* Header provides you with stylesheet.
* User can add custom styles while defining <code>Header</code> within their app.
* Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

![Preview ios header-def-headref](https://docs.nativebase.io/docs/assets/ios/components/header.png)
![Preview android header-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/iconTextBtnsHeader.png)

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name='arrow-back' />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Header&lt;/Title>
          &lt;/Body>
          &lt;Right>
            &lt;Button transparent>
              &lt;Icon name='menu' />
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />
<br />

**Configuration**<br />
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
                <td>Left</td>
                <td>-</td>
                <td>-</td>
                <td>Components render to the left in Header</td>
            </tr>
            <tr>
                <td>Body</td>
                <td> - </td>
                <td>-</td>
                <td>Components render at the center of Header</td>
            </tr>
            <tr>
                <td>Right</td>
                <td> - </td>
                <td>-</td>
                <td>Components render to the right in Header</td>
            </tr>
            <tr>
                <td>iosBarStyle</td>
                <td> - </td>
                <td>'light-content', 'dark-content' or 'default'</td>
                <td>Set iOS barStyle</td>
            </tr>
            <tr>
                <td>androidStatusBarColor</td>
                <td> - </td>
                <td> - </td>
                <td>Set bakground color for status bar in android</td>
            </tr>
            <tr>
            <tr>
                <td>backgroundColor</td>
                <td> - </td>
                <td>string</td>
                <td>Set background color</td>
            </tr>
                <td>span</td>
                <td> - </td>
                <td> boolean </td>
                <td>Doubles the header size</td>
            </tr>
            <tr>
                <td>noShadow</td>
                <td> - </td>
                <td> boolean </td>
                <td>Removes shadow from iOS and elevation from android</td>
            </tr>
            <tr>
                <td>searchBar</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add searchBar to header or not</td>
            </tr>
            <tr>
                <td>rounded</td>
                <td> - </td>
                <td> boolean </td>
                <td>Make Header searchBar Rounded</td>
            </tr>
            <tr>
                <td>hasSubtitle</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add subtitle to the Header Component</td>
            </tr>
            <tr>
                <td>hasSegment</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add Segments to Header Component</td>
            </tr>
            <tr>
                <td>hasTabs</td>
                <td> - </td>
                <td> boolean </td>
                <td>Add Tabs to Header Component</td>
            </tr>
        </tbody>
    </table><br />

#### Header with only title
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
            &lt;Left/>
            &lt;Body>
                &lt;Title>Header&lt;/Title>
            &lt;/Body>
            &lt;Right />
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />


#### Header with Icon and Text Buttons
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class HeaderIconTextExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name='arrow-back' />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Header&lt;/Title>
          &lt;/Body>
          &lt;Right>
            &lt;Button transparent>
              &lt;Text>Cancel&lt;/Text>
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />


#### Header with Title and Subtitle
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name='arrow-back' />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Title&lt;/Title>
            &lt;Subtitle>Subtitle&lt;/Subtitle>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />
