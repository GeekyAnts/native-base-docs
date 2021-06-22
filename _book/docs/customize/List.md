## Customize List

Steps to customize theme for List attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(https://docs-v2.nativebase.io/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('https://docs-v2.nativebase.io/docs/assets/ios/guide/theme-list.png')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

<table class = "table table-hover" style="width: 75%; ">
        <thead>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>listBorderColor</td>
                <td>List border color</td>
            </tr>
            <tr>
                <td>listDividerBg</td>
                <td>List divider background color</td>
            </tr>
            <tr>
                <td>listItemPadding</td>
                <td>Padding between list items</td>
            </tr>
            <tr>
                <td>listNoteColor</td>
                <td>List note color</td>
            </tr>
            <tr>
                <td>listNoteSize</td>
                <td>Font size for Note in list items</td>
            </tr>
            <tr>
                <td>listItemHeight</td>
                <td>Height of list item</td>
            </tr>
        </tbody>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon } from 'native-base';
import myTheme from './Themes/myTheme';
export default class ThemeListExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;List>
                        &lt;ListItem itemDivider>
                            &lt;Text>Goalkeeper&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem >
                            &lt;Text>Simon Mignolet&lt;/Text>
                        &lt;/ListItem>

                        &lt;ListItem itemDivider>
                            &lt;Text>Defenders&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Text>Nathaniel Clyne&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem iconLeft>
                            &lt;Icon name='ios-notifications' />
                            &lt;Text>Dejan Lovren&lt;/Text>
                            &lt;Text note>Note here&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem iconLeft iconRight>
                            &lt;Icon name='ios-mic' />
                            &lt;Text>Mama Sakho&lt;/Text>
                            &lt;Icon name='ios-mic-outline' />
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
