# Tabs_Default

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [react-native-scrollable-tab-view <code>&lt;ScrollableTabView></code>](https://github.com/brentvatne/react-native-scrollable-tab-view)*


![Preview ios Tabs_Default](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/tabs.png)
![Preview android Tabs_Default](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/tabs.png)
![Preview ios Advanced_Tabs](../docs/assets/ios/components/tabs2.png)
![Preview android Advanced_Tabs](../docs/assets/android/components/tabs2.png)

*Syntax(simple)*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
            &lt;Header hasTabs />
            &lt;Tabs>
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
                <td> true false </td>
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
        </tbody>
    </table><br />

# Advanced Tabs

*Syntax(advanced)*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
            &lt;Header hasTabs/>
            &lt;Tabs>
                &lt;Tab heading={ &lt;TabHeading>&lt;Icon name="camera" />&lt;Text>Camera&lt;/Text>&lt;/TabHeading>}>
                    &lt;Tab1 />
                &lt;/Tab>
                &lt;Tab heading={ &lt;TabHeading>&lt;Text>No Icon&lt;/Text>&lt;/TabHeading>}>
                    &lt;Tab2 />
                &lt;/Tab>
                &lt;Tab heading={ &lt;TabHeading>&lt;Icon name="apps" />&lt;/TabHeading>}>
                    &lt;Tab3 />
                &lt;/Tab>
            &lt;/Tabs>
            &lt;/Container>
        );
    }
}</code></pre><br />

*Syntax(scrollable)*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
        &lt;Header hasTabs/>
        &lt;Tabs renderTabBar={()=> &lt;ScrollableTab />}
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
                    Style for tabbar
                </td>
            </tr>
            <tr>
                <td>activeTabStyle</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style for active tabbar
                </td>
            </tr>
            <tr>
                <td>textStyle</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style for text
                </td>
                <tr>
                    <td>activeTextStyle</td>
                    <td> - </td>
                    <td> style object </td>
                    <td>
                        Style for active text
                    </td>
                </tr>
            </tr>
        </tbody>
    </table><br />

    Pro tip: It is advisable to use hasTabs prop with Header while using Tabs.
