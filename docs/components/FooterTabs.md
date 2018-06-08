## footer-tabs-def-headref
## Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

**Contents**
* [Footer with only icons](Components.md#footer-tabs-icon-headref)
* [Footer with icons and text](Components.md#footer-tabs-icon-text-headref)
* [Footer Badge](Components.md#footer-tabs-badge-headref)

![Preview ios footer-tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/footer-text.png)
![Preview android footer-tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/footer-text.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content />
        &lt;Footer>
          &lt;FooterTab>
            &lt;Button>
              &lt;Text>Apps&lt;/Text>
            &lt;/Button>
            &lt;Button>
              &lt;Text>Camera&lt;/Text>
            &lt;/Button>
            &lt;Button active>
              &lt;Text>Navigate&lt;/Text>
            &lt;/Button>
            &lt;Button>
              &lt;Text>Contact&lt;/Text>
            &lt;/Button>
          &lt;/FooterTab>
        &lt;/Footer>
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
                <td>active</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                This is <code>button</code> prop <i>(applicable with FooterTab only)</i>. Sets a Footer Button active.
                </td>
            </tr>
            <tr>
                <td>badge</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                This is <code>button</code> prop <i>(applicable with FooterTab only)</i>. Set to <code>true</code> if using Badges.
                </td>
            </tr>
            <tr>
                <td>vertical</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                This is <code>button</code> prop <i>(applicable with FooterTab only)</i>. Use this prop to vertically align footer elements like icons and text. Necessary when using Badge in Footer Tabs.
                </td>
            </tr>
        </tbody>
    </table><br />

## footer-tabs-icon-headref
#### Icon Footer
![Preview ios footer-tabs-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/footer-icon.png)
![Preview android footer-tabs-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/footer-icon.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content />
        &lt;Footer>
          &lt;FooterTab>
            &lt;Button>
              &lt;Icon name="apps" />
            &lt;/Button>
            &lt;Button>
              &lt;Icon name="camera" />
            &lt;/Button>
            &lt;Button active>
              &lt;Icon active name="navigate" />
            &lt;/Button>
            &lt;Button>
              &lt;Icon name="person" />
            &lt;/Button>
          &lt;/FooterTab>
        &lt;/Footer>
      &lt;/Container>
    );
  }
}</code></pre><br />

## footer-tabs-icon-text-headref
#### Icon Footer with Text
![Preview ios footer-tabs-icon-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/footer-icon-text.png)
![Preview android footer-tabs-icon-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/footer-icon-text.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content />
        &lt;Footer>
          &lt;FooterTab>
            &lt;Button vertical>
              &lt;Icon name="apps" />
              &lt;Text>Apps&lt;/Text>
            &lt;/Button>
            &lt;Button vertical>
              &lt;Icon name="camera" />
              &lt;Text>Camera&lt;/Text>
            &lt;/Button>
            &lt;Button vertical active>
              &lt;Icon active name="navigate" />
              &lt;Text>Navigate&lt;/Text>
            &lt;/Button>
            &lt;Button vertical>
              &lt;Icon name="person" />
              &lt;Text>Contact&lt;/Text>
            &lt;/Button>
          &lt;/FooterTab>
        &lt;/Footer>
      &lt;/Container>
    );
  }
}</code></pre><br />

## footer-tabs-badge-headref
#### Footer with badge
![Preview ios footer-tabs-badge-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/footer-badge.png)
![Preview android footer-tabs-badge-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/footer-badge.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content />
        &lt;Footer>
          &lt;FooterTab>
            &lt;Button badge vertical>
              &lt;Badge>&lt;Text>2&lt;/Text>&lt;/Badge>
              &lt;Icon name="apps" />
              &lt;Text>Apps&lt;/Text>
            &lt;/Button>
            &lt;Button vertical>
              &lt;Icon name="camera" />
              &lt;Text>Camera&lt;/Text>
            &lt;/Button>
            &lt;Button active badge vertical>
              &lt;Badge >&lt;Text>51&lt;/Text>&lt;/Badge>
              &lt;Icon active name="navigate" />
              &lt;Text>Navigate&lt;/Text>
            &lt;/Button>
            &lt;Button vertical>
              &lt;Icon name="person" />
              &lt;Text>Contact&lt;/Text>
            &lt;/Button>
          &lt;/FooterTab>
        &lt;/Footer>
      &lt;/Container>
    );
  }
}</code></pre><br />
