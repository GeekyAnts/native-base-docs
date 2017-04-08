#### Dynamic List

A center aspect designed for efficient representation of vertically scrolling lists of changing data. The simplest way is to create a <code>List dataArray</code>, populate it with an easy array of data chunks, and instantiate a <code>ListItem</code> component with that chunk of data and a <code>renderRow</code> callback which takes a chunk from the whole data array and returns a renderable component.

![Preview ios Dynamic_List](../docs/assets/ios/components/dynamic-list.png)
![Preview android Dynamic_List](../docs/assets/android/components/dynamicList.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
export default class DynamicListExample extends Component {
    render() {
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List dataArray={items}
                        renderRow={(item) =>
                            &lt;ListItem>
                                &lt;Text>{item}&lt;/Text>
                            &lt;/ListItem>
                        }>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />

For more advanced implementation of rendering list dynamically, take a look at [nativebase-tutorial](https://github.com/GeekyAnts/nativebase-tutorial).
