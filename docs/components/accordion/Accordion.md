## accordion-def-headref
## Accordion

Toggle the visibility of content across items of your screen. Accordion toggle through a number of text blocks with a single click.<br />
NativeBase Accordion renders with pre-defined icons on toggle of text block, header and content style.

![Preview ios accordion-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion.gif)
![Preview android accordion-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/accordion.gif)


**Contents:**
* [Icon and Expanded Icon](Components.md#accordion-icon-headref)
* [Icon and Expanded Icon style](Components.md#accordion-icon-style-headref)
* [Header and Content style](Components.md#accordion-header-content-headref)
* [Custom Header and Content](Components.md#accordion-custom-header-content-headref)

*General Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-accordion :dataArray="dataArray" expanded={0}/>
    </nb-content>
  </nb-container>
</template>
<script>
export default {
  data: function() {
    return {
      dataArray: [
        { title: "First Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
        { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
      ],
    };
  },
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />

**Configuration**<br />
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
            <td>dataArray</td>
            <td>Array</td>
            <td> - </td>
            <td>Array of data chunks to render iteratively</td>
        </tr>
        <tr>
            <td>expanded</td>
            <td> - </td>
            <td> - </td>
            <td>Index of accordion set open</td>
        </tr>
        <tr>
            <td>headerStyle</td>
            <td> - </td>
            <td> - </td>
            <td>Style accordion header</td>
        </tr>
        <tr>
            <td>contentStyle</td>
            <td> - </td>
            <td> - </td>
            <td>Style accordion content</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>arrow-down</td>
            <td>user-defined</td>
            <td>Icon when accordion is closed</td>
        </tr>
        <tr>
            <td>expandedIcon</td>
            <td>arrow-up</td>
            <td>user-defined</td>
            <td>Icon when accordion is open</td>
        </tr>
        <tr>
            <td>iconStyle</td>
            <td> - </td>
            <td>user-defined</td>
            <td>Icon style when accordion is closed</td>
        </tr>
        <tr>
            <td>expandedIconStyle</td>
            <td> - </td>
            <td>user-defined</td>
            <td>Icon style when accordion is open</td>
        </tr>
        <tr>
            <td>renderHeader</td>
            <td> - </td>
            <td> - </td>
            <td>Custom design of Accordion header</td>
        </tr>
        <tr>
            <td>renderContent</td>
            <td> - </td>
            <td> - </td>
            <td>Custom design of Accordion content</td>
        </tr>
        </tbody>
    </table><br />
