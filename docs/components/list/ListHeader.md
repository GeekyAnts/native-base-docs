##list-header-headref
#### List Header

The List Header component creates a list header, which can be used for grouping list items. To create a header for any child element of the list, include itemHeader prop with ListItem component. The List Header of NativeBase comes with default style which is easily customisable.

![Preview ios list-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/headerList.png)
![Preview android list-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/listHeader.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
​export default class ListHeaderExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;ListItem itemHeader first>
                        &lt;Text>COMEDY&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem >
                        &lt;Text>Hangover&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem>
                        &lt;Text>Horrible Bosses&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem last>
                        &lt;Text>Conjuring&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem itemHeader>
                        &lt;Text>ACTION&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem>
                        &lt;Text>Terminator Genesis&lt;/Text>
                    &lt;/ListItem>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
