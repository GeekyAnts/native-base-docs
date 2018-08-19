## accordion-custom-header-content-headref
#### Custom Header and Content

![Preview ios accordion-custom-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion-custom-header-content.gif)
![Preview android accordion-custom-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/accordion-custom-header-content.gif)


*General Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Accordion, View, Text } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionCustomHeaderContentExample extends Component {
  _renderHeader({title}, expanded) {
    return (
      <View
        {% raw %}style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}{% endraw %}
      >
        {% raw %}<Text style={{ fontWeight: "600" }}>{% endraw %}
          {" "}{title}
        </Text>
        {expanded
          {% raw %}? <Icon style={{ fontSize: 18 }} name="remove-circle" />{% endraw %}
          {% raw %}: <Icon style={{ fontSize: 18 }} name="add-circle" />}{% endraw %}
      </View>
    );
  }
  _renderContent({content}) {
    return (
      <Text
        {% raw %}style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}{% endraw %}
      >
        {content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
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
<br />