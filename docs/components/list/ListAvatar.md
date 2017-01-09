<div class="section" id="listAvatar">

    <h4>List Avatar</h4>

    <p style="padding-bottom: 15px;">
        List Avatars are medium to showcase an image with your list item whose dimension lays between icon and dimension. To create a avatar list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';
​
export default class ListAvatarExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Thumbnail source={require('./img/one.png')} />
                            &lt;Text>Kumar Pratik&lt;/Text>
                            &lt;Text note>Doing what you like will always keep you happy . .&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Thumbnail source={require('./img/two.png')} />
                            &lt;Text>Kumar Sanket&lt;/Text>
                            &lt;Text note>Life is one time offer! Use it well&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />

</div>
