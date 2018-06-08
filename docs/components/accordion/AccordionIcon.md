## accordion-icon-headref
#### Icon and Expanded Icon

![Preview ios accordion-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/accordion-icon.gif)
![Preview android accordion-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/accordion-icon.gif)


*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionIconExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content padder>
          &lt;Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />