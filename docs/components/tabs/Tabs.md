## tabs-def-headref
## Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [react-native-scrollable-tab-view <code>&lt;ScrollableTabView></code>](https://github.com/brentvatne/react-native-scrollable-tab-view)*


![Preview ios tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/tabs-basic.gif)
![Preview android tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/tabs-basic.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
​export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header hasTabs/>
    <nb-tabs>
      <nb-tab heading="Tab1">
        <tab-one />
      </nb-tab>
      <nb-tab heading="Tab2">
        <tab-two />
      </nb-tab>
       <nb-tab heading="Tab3">
        <tab-three />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>
<script>
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";
export default {
  components: { TabOne, TabTwo, TabThree }
};
</script>
{%- endcodetabs %}
<br />

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
                <td>scrollWithoutAnimation</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Disable Tab Change Animation
                </td>
            </tr>
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
                <td>page</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Set selected tab
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
                    Style of the default tab bar's underline
                </td>
            </tr>
            <tr>
                <td>onChangeTab</td>
                <td>Function</td>
                <td> - </td>
                <td>
                    Function to call when tab changes
                </td>
            </tr>
            <tr>
                <td>onScroll</td>
                <td>Function</td>
                <td> - </td>
                <td>
                    Function to call when pages are sliding
                </td>
            </tr>
        </tbody>
    </table><br />

**Known Issues :** Custom tabHeading is not yet supported for <code>ScrollableTab</code> heading only accepts a string. <br />
**Pro-Tip :** It is advisable to use <code>hasTabs</code> prop with Header while using Tabs. <br />
