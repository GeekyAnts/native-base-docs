## tabs-def-headref
## Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [react-native-scrollable-tab-view <code>&lt;ScrollableTabView></code>](https://github.com/brentvatne/react-native-scrollable-tab-view)*


![Preview ios tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/tabs-basic.gif)
![Preview android tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/tabs-basic.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class TabsExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header hasTabs />
        &lt;Tabs initialPage={1}>
          &lt;Tab heading="Tab1">
            &lt;Tab1 />
          &lt;/Tab>
          &lt;Tab heading="Tab2">
            &lt;Tab2 />
          &lt;/Tab>
          &lt;Tab heading="Tab3">
            &lt;Tab3 />
          &lt;/Tab>
        &lt;/Tabs>
      &lt;/Container>
    );
  }
}</code></pre><br />

**Configuration**

<table class="table table-bordered">
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
                <td>locked</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Disable swipe
                </td>
            </tr>
            <tr>
                <td>initialPage</td>
                <td> - </td>
                <td> integer </td>
                <td>
                    Set default active tab
                </td>
            </tr>
            <tr>
                <td>tabBarPosition</td>
                <td> top </td>
                <td> top, bottom, overlayTop, overlayBottom </td>
                <td>
                    Set position of Tabs
                </td>
            </tr>
            <tr>
                <td>tabBarUnderlineStyle</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Style of the default tab bar's underline.
                </td>
            </tr>
            <tr>
                <td>page</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Set selected tab
                </td>
            </tr>
        </tbody>
    </table><br />

**Known Issues :** Custom tabHeading is not yet supported for <code>ScrollableTab</code> heading only accepts a string. <br />
**Pro-Tip :** It is advisable to use <code>hasTabs</code> prop with Header while using Tabs. <br />
