## Layout

The layout system is an essential concept that needs to be mastered in order to create great layouts and UIs. <a href="https://facebook.github.io/react-native/">React Native</a> uses Flexbox to create the layouts, which is great when we need to accommodate our components and views in different screen sizes or even different devices. Flexbox is awesome but it could be tiresome for newbies.<br /><br />
*Not being very good at Flexbox?<br />
Here comes the <a href="https://github.com/GeekyAnts/react-native-easy-grid">Easy Grid</a> of <a href="https://nativebase.io/">NativeBase</a>, a wrapper of Flexbox.*<br /><br />
The layout system in [NativeBase](https://nativebase.io/) is very powerful and flexible. No more worries about props of Flexbox such as <i>alignItems</i>, <i>flexDirection</i>, <i>justifyContent</i>, <i>margin</i>, <i>padding</i>, <i>position</i>, <i>width</i> etc.  You can create any layout with all the available options that we have. In order to build custom layouts and components, understanding how layout works in NativeBase is not as hard as Flexbox.<br />
Flexbox makes it look like percentages, however what actually is happening is just ratios. On the easier part, ratios are easier to represent than percentage / decimals. For this reason, the Easy Grid takes in ratios in place of percentage. <br />
Performance wise, Easy Grid is noteworthy and works as fine as Flexbox, not much of calculation.

![Preview ios Layout](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/ios/layout.png)
![Preview android Layout](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/android/layout.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Grid>
            &lt;Col style=&#123;{ backgroundColor: '#635DB7', height: 200 }}>&lt;/Col>
            &lt;Col style=&#123;{ backgroundColor: '#00CE9F', height: 200 }}>&lt;/Col>
          &lt;/Grid>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />



**Note:** If you're using `<Row />` inside a `<ScrollView />`, the height of the component would be flexible according to the content, though you can always apply the height styling.

NativeBase <code>&lt;Content></code> component uses <code>&lt;ScrollView></code>. This is required by <code>&lt;Col></code> and <code>&lt;Row></code> elements of Easy-Grid to have a defined height.<br />
Replacing Component for Grid, Col, Row: React Native [View](https://facebook.github.io/react-native/docs/view.html)
