## accordion-custom-header-content-headref
#### Custom Header and Content

![Preview ios accordion-custom-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/accordion-custom-header-content.gif)
![Preview android accordion-custom-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/accordion-custom-header-content.gif)


*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Content, Accordion, View, Text } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionCustomHeaderContentExample extends Component {
     _renderHeader(title, expanded) {
    return (
      &lt;View
        style=&#123;{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#A9DAD6"
        }}
      >
        &lt;Text style=&#123;{ fontWeight: "600" }}>
          {" "}{title}
        &lt;/Text>
        {expanded
          ? &lt;Icon style={&#123; fontSize: 18 }} name="remove-circle" />
          : &lt;Icon style={&#123; fontSize: 18 }} name="add-circle" />}
      &lt;/View>
    );
  }
  _renderContent(content) {
    return (
      &lt;Text
        style=&#123;{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic"
        }}
      >
        {content}
      &lt;/Text>
    );
  }
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content padder>
          &lt;Accordion
            dataArray={dataArray}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
