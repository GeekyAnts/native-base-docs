<div class="section" id="listThumbnail">

    <h4>List Thumbnail</h4>

    <p style="padding-bottom: 15px;">
        List Thumbnails are medium to exhibit an image with your list item. To create a thumbnail list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component with few props and style.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';
​
export default class ListThumbnailExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Thumbnail square size={80} source={require('./img/one.png')} />
                            &lt;Text>Sankhadeep&lt;/Text>
                            &lt;Text note>Its time to build a difference . .&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />

</div>
