# Layout

The layout system is an essential concept that needs to be mastered in order to create great layouts and UIs. <a href="https://facebook.github.io/react-native/">React Native</a> uses Flexbox to create the layouts, which is great when we need to accommodate our components and views in different screen sizes or even different devices. Flexbox is awesome but it could be tiresome for newbies.<br /><br />
*Not being very good at Flexbox?<br />
Here comes the <a href="https://github.com/GeekyAnts/react-native-easy-grid">Easy Grid</a> of <a href="http://nativebase.io/">NativeBase</a>, a wrapper of Flexbox.*<br /><br />
The layout system in [NativeBase](http://nativebase.io/) is very powerful and flexible. No more worries about props of Flexbox such as alignItems, flexDirection, justifyContent, margin, padding, position, width etc.  You can create any layout with all the available options that we have. In order to build custom layouts and components, understanding how layout works in NativeBase is not as hard as Flexbox. Flexbox makes it look like percentages, however what actually is happening is just ratios. On the easier part, ratios are easier to represent than percentage/decimals. For this reason, the Easy Grid takes in ratios in place of percentage. <br />
Performance wise, Easy Grid is noteworthy and works as fine as Flexbox, not much of calculation.

![Preview ios Layout](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/layout.png)
![Preview android Layout](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/layout.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content } from 'native-base/ui';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Grid>
                        &lt;Col style=&#123;{ backgroundColor: '#D954D7', height: 200 }}>&lt;/Col>
                        &lt;Col style=&#123;{ backgroundColor: '#D93735', height: 200  }}>&lt;/Col>
                    &lt;/Grid>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />



*NOTE: <code>&lt;Content></code> component uses <code>&lt;ScrollView></code>. This is required by <code>&lt;Col></code> and <code>&lt;Row></code> elements of Easy-Grid to have a defined height.*
* Replacing Component for Grid: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)
* Replacing Component for Col: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)
* Replacing Component for Row: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)
