<div class="section" id="list">

    <h2>List</h2>

    <p>
        This component is completely built by <a href="http://nativebase.io/">NativeBase</a>.<br />

        A base component for specifying lists of information. List must contain one or more list elements. Props provide configurability for several features. Provides a number of attributes that follows styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.
    </p><br />

    <p>
        <ul style="list-style-type:none">
            <li><b>Contents:</b></li>
            <li><a href="/docs/components/list/ListDivider.md">List Divider</a></li>
            <li><a href="/docs/components/list/ListIcon.md">List Icon</a></li>
            <li><a href="/docs/components/list/ListAvatar.md">List Avatar</a></li>
            <li><a href="/docs/components/list/ListThumbnail.md">List Thumbnail</a></li>
            <li><a href="/docs/components/list/DynamicList.md">Dynamic List</a></li>
            <li><a href="/docs/components/list/ListOnClick.md">List OnClick</a></li>
        </ul>
    </p><br />

    <i>Syntax</i>

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
</code></pre><br />

    <ul>
        <li>
            <code>List</code>: This component defines a section to include your list items.
        </li>
        <li>
            <code>ListItem</code>:
            <ul>
                <li>
                    This is the child component of <code>List</code>.
                </li>
                <li>
                    Defines a list item.
                </li>
                <li>
                    Adds border at bottom of each ListItem.
                </li>
                <li>
                    List takes any number of ListItem.
                </li>
            </ul>
        </li>
        <li>
            ListItem component takes input such as: Text, Badge, Thumbnail, Icon.
        </li>
        <li>
            <i>
                Replacing Component for List:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/view.html">
                    <code>&lt;View></code>
                </a>
            </i>
        </li>
        <li>
            <i>
                Replacing Component for ListItem:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="http://facebook.github.io/react-native/docs/touchableopacity.html">
                    <code>&lt;TouchableOpacity></code>
                </a>
            </i>
        </li>
    </ul><br />

    <b>Configuration</b><br />
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
    </table><br />

</div>
