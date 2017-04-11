#### List Separator

Seperator component is a separator usually used in list, which can be used for grouping list items. To create a seperator between list of items. Though it is used with List, You can use it anywhere in your app.

![Preview ios List_Separator](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/separatorList.png)
![Preview android List_Separator](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/separatorList.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Separator } from 'native-base';
export default class SeperatorExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Separator bordered>
                        &lt;Text>FORWARD&lt;/Text>
                    &lt;/Separator>
                    &lt;ListItem >
                        &lt;Text>Aaron Bennet&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem>
                        &lt;Text>Claire Barclay&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem last>
                        &lt;Text>Kelso Brittany&lt;/Text>
                    &lt;/ListItem>
                    &lt;Separator bordered>
                        &lt;Text>MIDFIELD&lt;/Text>
                    &lt;/Separator>
                    &lt;ListItem>
                        &lt;Text>Caroline Aaron&lt;/Text>
                    &lt;/ListItem>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
