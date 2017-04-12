#### List Avatar

List Avatars are medium to showcase an image with your list item whose dimension lays between icon and dimension. To create a avatar list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component.

![Preview ios List_Avatar](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-avatar.png)
![Preview android List_Avatar](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/thumbList.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ListAvatarExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;ListItem avatar>
                        &lt;Left>
                            &lt;Thumbnail source={require('./img/one.png')} />
                        &lt;/Left>
                        &lt;Body>
                            &lt;Text>Kumar Pratik&lt;/Text>
                            &lt;Text note>Doing what you like will always keep you happy . .&lt;/Text>
                        &lt;/Body>
                        &lt;Right>
                            &lt;Text note>3:43 pm&lt;/Text>
                        &lt;/Right>
                    &lt;/ListItem>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />
