##list-thumbnail-headref
#### List Thumbnail

List Thumbnails are medium to exhibit an image with your list item. To create a thumbnail list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component with few props and style.

![Preview ios list-thumbnail-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-thumbnail.png)
![Preview android list-thumbnail-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/avatarList.png)


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ListThumbnailExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Thumbnail square size={80} source={require('./img/one.png')} />
                            &lt;Body>
                                &lt;Text>Sankhadeep&lt;/Text>
                                &lt;Text note>Its time to build a difference . .&lt;/Text>
                            &lt;/Body>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />
