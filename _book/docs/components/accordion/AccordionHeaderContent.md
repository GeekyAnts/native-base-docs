## accordion-header-content-headref
#### Header and Content Style

![Preview ios accordion-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/accordion-header-content-style.gif)
![Preview android accordion-header-content-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/accordion-header-content-style.gif)


*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionHeaderContentStyleExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content padder>
          &lt;Accordion
            dataArray={dataArray}
            headerStyle=&#123;{ backgroundColor: "#b7daf8" }}
            contentStyle=&#123;{ backgroundColor: "#ddecf8" }}
          />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />