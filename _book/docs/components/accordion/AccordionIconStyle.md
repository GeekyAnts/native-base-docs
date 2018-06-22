## accordion-icon-style-headref
#### Icon and Expanded Icon Style

![Preview ios accordion-icon-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/accordion-icon-style.gif)
![Preview android accordion-icon-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/accordion-icon-style.gif)


*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionIconStyleExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content padder>
          &lt;Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle=&#123;{ color: "green" }}
            expandedIconStyle=&#123;{ color: "red" }}
          />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />