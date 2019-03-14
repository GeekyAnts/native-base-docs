## accordion-custom-header-content-headref
#### Custom Header and Content

![Preview ios accordion-custom-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion-custom-header-content.gif)
![Preview android accordion-custom-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/accordion-custom-header-content.gif)


*General Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
    return (
      {% raw %}<View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>{% endraw %}
      {% raw %}<Text style={{ fontWeight: "600" }}>{% endraw %}
          {" "}{item.title}
        </Text>
        {expanded
          ? {% raw %}<Icon style={{ fontSize: 18 }} name="remove-circle" />{% endraw %}
          : {% raw %}<Icon style={{ fontSize: 18 }} name="add-circle" />}{% endraw %}
      </View>
    );
  }
  _renderContent(item) {
    return (
      {% raw %}<Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >{% endraw %}
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header />
        {% raw %}<Content padder style={{ backgroundColor: "white" }}>{% endraw %}
          {% raw %}<Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />{% endraw %}
        </Content>
      </Container>
    );
  }
}
<br/>
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-accordion
        :dataArray="dataArray"
        :renderHeader="_renderHeader"
        :renderContent="_renderContent"
      />
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
import { View, Text, Icon } from "native-base";
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
  methods: {
    _renderContent: function(content) {
      return (
        {% raw %}<Text style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}>{% endraw %}
          {content}
        </Text>
      );
    },
    _renderHeader: function(title, expanded) {
      return (
        <View
          {% raw %}style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6"}}{% endraw %}
        >
          {% raw %}<Text style={{ fontWeight: "600" }}>{% endraw %}
            {" "}{title}
          </Text>
          {expanded
            {% raw %}? <Icon style={{ fontSize: 18 }} name="remove-circle" />{% endraw %}
            {% raw %}: <Icon style={{ fontSize: 18 }} name="add-circle" />{% endraw %}
          }
        </View>
      );
    }
  }
};
</script>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion-custom-header-content.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />