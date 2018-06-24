## tabs-scrollable-headref
#### Scrollable Tabs

![Preview ios tabs-scrollable-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/tabs-scrollable.gif)
![Preview android tabs-scrollable-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/tabs-scrollable.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class TabsScrollableExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header hasTabs/>
        &lt;Tabs renderTabBar={()=> &lt;ScrollableTab />}>
          &lt;Tab heading="Tab1">
            &lt;Tab1 />
          &lt;/Tab>
          &lt;Tab heading="Tab2">
            &lt;Tab2 />
          &lt;/Tab>
          &lt;Tab heading="Tab3">
            &lt;Tab3 />
          &lt;/Tab>
          &lt;Tab heading="Tab4">
            &lt;Tab4 />
          &lt;/Tab>
          &lt;Tab heading="Tab5">
            &lt;Tab5 />
          &lt;/Tab>
        &lt;/Tabs>
      &lt;/Container>
    );
  }
}</code></pre><br />

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
                <td>heading</td>
                <td> - </td>
                <td> string, <TabHeading/> </td>
                <td>
                    Label String, or Component
                </td>
            </tr>
            <tr>
                <td>tabStyle</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style for tab bar
                </td>
            </tr>
            <tr>
                <td>activeTabStyle</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style for active tab bar
                </td>
            </tr>
            <tr>
                <td>textStyle</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style for text
                </td>
              </tr>
              <tr>
                <td>activeTextStyle</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style for active text
                </td>
            </tr>
        </tbody>
    </table><br />
