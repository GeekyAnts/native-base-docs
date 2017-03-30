# List Default

This component is completely built by [NativeBase](http://nativebase.io/).<br />
A base component for specifying lists of information. List must contain one or more list elements. Props provide configurability for several features. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.<br />

![Preview ios List_Default](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-basic.png)
![Preview android List_Default](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/list-basic.png)

**Contents:**
* [List Divider](COMPONENTS.md#List_Divider)
* [List Icon](COMPONENTS.md#List_Icon)
* [List Avatar](COMPONENTS.md#List_Avatar)
* [List Thumbnail](COMPONENTS.md#List_Thumbnail)
* [Dynamic List](COMPONENTS.md#Dynamic_List)
* [List OnClick](COMPONENTS.md#List_OnClick)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base/ui';
​
export default class ListExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem >
                            &lt;Text>Simon Mignolet&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Text>Nathaniel Clyne&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Text>Dejan Lovren&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre><br />

* <code>List</code>: This component defines a section to include your list items.
* <code>ListItem</code>:
  * This is the child component of <code>List</code>.
  * Defines a list item.
  * Adds border at bottom of each ListItem.
  * List takes any number of ListItem.
* ListItem component takes input such as: Text, Badge, Thumbnail, Icon.
* *Replacing Component for List: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*
* *Replacing Component for ListItem: [React Native](https://facebook.github.io/react-native/) [<code>&lt;TouchableOpacity></code>](https://facebook.github.io/react-native/docs/touchableopacity.html)*


**Configuration**

<table class="table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>button</td>
                <td> - </td>
                <td> - </td>
                <td>
                    To navigate on click of a list item.
                </td>
            </tr>
            <tr>
                <td>dataArray</td>
                <td> Array </td>
                <td> user-defined array </td>
                <td>Array of data chunks to render iteratively.</td>
            </tr>
            <tr>
                <td>itemDivider</td>
                <td> - </td>
                <td> - </td>
                <td>Helps to organize and group the list items.</td>
            </tr>
            <tr>
                <td>itemHeader</td>
                <td> - </td>
                <td> - </td>
                <td>Style the item as the header for the ListItems.</td>
            </tr>
            <tr>
                <td>first</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Render as the first Item in the List.
                </td>
            </tr>
            <tr>
                <td>icon</td>
                <td> - </td>
                <td> - </td>
                <td>
                    To have list styling of icons .
                </td>
            </tr>
            <tr>
                <td>Avatar</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Style the list to have Avatars.
                </td>
            </tr>
            <tr>
                <td>thumnail</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Style the list to have Thumbnails.
                </td>
            </tr>
            <tr>
                <td>renderRow</td>
                <td> Function </td>
                <td> - </td>
                <td>
                    Callback which takes a chunk of data from dataArray and returns as a component.
                </td>
            </tr>
        </tbody>
    </table><br />
