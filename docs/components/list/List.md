# List

This component is completely built by [NativeBase](http://nativebase.io/).<br />
A base component for specifying lists of information. List must contain one or more list elements. Props provide configurability for several features. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.<br />

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-basic.png" alt="" /></div></th>
      <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/list-basic.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

**Contents:**
* [List Divider](/docs/components/list/ListDivider.md)
* [List Icon](/docs/components/list/ListIcon.md)
* [List Avatar](/docs/components/list/ListAvatar.md)
* [List Thumbnail](/docs/components/list/ListThumbnail.md)
* [Dynamic List](/docs/components/list/DynamicList.md)
* [List OnClick](/docs/components/list/ListOnClick.md)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
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
</code></pre>

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
                <td>itemDivider</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Helps to organize and group the list items.
                </td>
            </tr>
            <tr>
                <td>note</td>
                <td> - </td>
                <td> - </td>
                <td>Sub caption for List Item.</td>
            </tr>
            <tr>
                <td>iconLeft</td>
                <td>true</td>
                <td>
                    true<br />
                    false<br />
                </td>
                <td>Aligns icon to the left of ListeItem.</td>
            </tr>
            <tr>
                <td>iconRight</td>
                <td>true</td>
                <td>
                    true<br />
                    false<br />
                </td>
                <td>Aligns icon to the right of ListeItem.</td>
            </tr>
            <tr>
                <td>dataArray</td>
                <td>Array</td>
                <td>user-defined array</td>
                <td>Array of data chunks to render iteratively.</td>
            </tr>
            <tr>
                <td>renderRow</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback which takes a chunk of data from <code>dataArray</code> and returns as a component.</td>
            </tr>
            <tr>
                <td>button</td>
                <td> - </td>
                <td> - </td>
                <td>
                    To navigate on click of a list item.
                </td>
            </tr>
        </tbody>
    </table>
