## tabs-advanced-headref
#### Advanced Tabs

![Preview ios tabs-advanced-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/tabs-advanced.gif)
![Preview android tabs-advanced-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/tabs-advanced.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
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
      <nb-tab :heading="getHeadingCompForTab1()">
        <tab-one />
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab2()">
        <tab-two />
      </nb-tab>
      <nb-tab :heading="getHeadingCompForTab3()">
        <tab-three />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>
<script>
import React from "react";
import { TabHeading, Icon, Text } from "native-base";
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";
export default {
  components: { TabOne, TabTwo, TabThree },
  methods: {
    getHeadingCompForTab1: function() {
      return (
        <TabHeading>
          <Icon name="camera" />
          <Text>Camera</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab2: function() {
      return (
        <TabHeading>
          <Text>No Icon</Text>
        </TabHeading>
      );
    },
    getHeadingCompForTab3: function() {
      return (
        <TabHeading>
          <Icon name="apps" />
        </TabHeading>
      );
    }
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/tabs-advanced.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
