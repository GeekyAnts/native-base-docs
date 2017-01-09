<div class="section" id="listOnClick">

    <h4>List OnClick</h4>

    <p style="padding-bottom: 15px;">
        To navigate between screens on click of a list item, include <code>button</code> prop with the <code>&lt;ListItem></code> component.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Thumbnail } from 'native-base';
​
export default class ListOnClickExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem button onPress={function_call()}>
                            &lt;Thumbnail source={require('./img/NSP.png')} />
                            &lt;Text>Native Starter Pro&lt;/Text>
                        &lt;/ListItem>
                   &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
