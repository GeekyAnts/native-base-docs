## accordion-header-content-headref
#### Header and Content Style

![Preview ios accordion-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion-header-content-style.gif)
![Preview android accordion-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/accordion-header-content-style.gif)


*General Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionHeaderContentStyleExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            {% raw %}headerStyle={{ backgroundColor: "#b7daf8" }}{% endraw %}
            {% raw %}contentStyle={{ backgroundColor: "#ddecf8" }}{% endraw %}
          />
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
      <nb-accordion
        :dataArray="dataArray"
        :headerStyle="{ backgroundColor: '#b7daf8' }"
        :contentStyle="{ backgroundColor: '#ddecf8' }"
      />
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
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion-header-content-style.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />