## tabs-advanced-headref
#### Advanced Tabs

![Preview ios tabs-advanced-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/tabs-advanced.gif)
![Preview android tabs-advanced-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/tabs-advanced.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
​export default class TabsAdvancedExample extends Component {
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
