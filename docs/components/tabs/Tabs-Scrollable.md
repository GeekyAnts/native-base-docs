## tabs-scrollable-headref
#### Scrollable Tabs

![Preview ios tabs-scrollable-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/tabs-scrollable.gif)
![Preview android tabs-scrollable-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/tabs-scrollable.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabOne';
. . .
import Tab5 from './tabFive';
​export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
          <Tab heading="Tab4">
            <Tab4 />
          </Tab>
          <Tab heading="Tab5">
            <Tab5 />
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
    <nb-tabs :renderTabBar="getScollableTabComp">
      <nb-tab heading="Tab1">
        <tab-one />
      </nb-tab>
      <nb-tab heading="Tab2">
        <tab-two />
      </nb-tab>
      <nb-tab heading="Tab3">
        <tab-three />
      </nb-tab>
      <nb-tab heading="Tab4">
        <tab-four />
      </nb-tab>
      <nb-tab heading="Tab5">
        <tab-five />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>
<script>
import React from "react";
import { ScrollableTab } from "native-base";
import TabOne from "./components/tabOne";
. . .
import TabFive from "./components/tabFive";
export default {
  components: { TabOne, TabTwo, TabThree, TabFour, TabFive },
  methods: {
    getScollableTabComp: function() {
      return <ScrollableTab />;
    }
  }
};
</script>
{%- endcodetabs %}
<br />

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
