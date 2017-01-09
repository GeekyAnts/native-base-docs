<div class="section" id="listDivider">

    <h4>List Divider</h4>

    <p style="padding-bottom: 15px;">
        The List Divider component creates a list separator, which can be used for grouping list items. To create a divider for any child element of the list, include <code>itemDivider</code> prop with <code>ListItem</code> component.
        The List Divider of NativeBase comes with default style which is easily customisable.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
​
export default class ListDividerExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem itemDivider>
                            &lt;Text>A&lt;/Text>
                        &lt;/ListItem>                    
                        &lt;ListItem >
                            &lt;Text>Aaron Bennet&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Text>Ali Connors&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem itemDivider>
                            &lt;Text>B&lt;/Text>
                        &lt;/ListItem>  
                        &lt;ListItem>
                            &lt;Text>Bradley Horowitz&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />

</div>
