## list-def-headref
## List

A base component for specifying lists of information. List must contain one or more list elements. Props provide configurability for several features. Provides a number of attributes that follow styling and interaction guidelines for each platform, so that they are intuitive for users to interact with.<br />

![Preview ios list-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-basic.png)
![Preview android list-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/list-basic.png)

**Contents:**
* [List Divider](Components.md#list-divider-headref)
* [List Header](Components.md#list-header-headref)
* [ListItem Selected](Components.md#listitem-selected-headref)
* [ListItem NoIndent](Components.md#listitem-noIndent-headref)
* [List Icon](Components.md#list-icon-headref)
* [List Avatar](Components.md#list-avatar-headref)
* [List Thumbnail](Components.md#list-thumbnail-headref)
* [Dynamic List](Components.md#dynamic-list-headref)
* [List Separator](Components.md#list-seperator-headref)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-list>
        <nb-list-item>
          <nb-text>Simon Mignolet</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Nathaniel Clyne</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Dejan Lovren</nb-text>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

* <code>List</code>: This component defines a section to include your list items.
* <code>ListItem</code>:
  * This is the child component of <code>List</code>.
  * Defines a list item.
  * Adds border at bottom of each ListItem.
  * List takes any number of ListItem.
  * Takes input such as: Text, Badge, Thumbnail, Icon.

Replacing Component
* List: React Native [View](https://facebook.github.io/react-native/docs/view.html)
* ListItem:
  -   React Native [TouchableHighlight](https://facebook.github.io/react-native/docs/touchablehighlight.html) for iOS
  -   React Native [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html) for Android


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
                <td>boolean</td>
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
                <td>selected</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                    Highlights the selected item
                </td>
            </tr>
            <tr>
                <td>noIndent</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                    Removes margin from left<br />
                    Useful incase of setting backgroundColor for ListItem.
                </td>
            </tr>
            <tr>
                <td>itemDivider</td>
                <td> - </td>
                <td>boolean</td>
                <td>Helps to organize and group the list items.</td>
            </tr>
            <tr>
                <td>itemHeader</td>
                <td> - </td>
                <td> - </td>
                <td>Style the item as header for ListItems</td>
            </tr>
            <tr>
                <td>first</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Adds style of first ListItem
                </td>
            </tr>
            <tr>
                <td>last</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Adds style of last ListItem
                </td>
            </tr>
            <tr>
                <td>icon</td>
                <td> - </td>
                <td> - </td>
                <td>
                    To have list styling of icons
                </td>
            </tr>
            <tr>
                <td>avatar</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Style the list to have Avatars
                </td>
            </tr>
            <tr>
                <td>thumbnail</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Style the list to have Thumbnails
                </td>
            </tr>
            <tr>
                <td>renderRow</td>
                <td> Function </td>
                <td> - </td>
                <td>
                    Callback which takes a chunk of data from dataArray and return as a component
                </td>
            </tr>
            <tr>
                <td>enableEmptySections</td>
                <td>-</td>
                <td>boolean</td>
                <td>
                    Flag indicating whether empty section headers should be rendered
                </td>
            </tr>
        </tbody>
    </table>
     <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/list-basic.png" alt="" style="display:block !important" />
    </div>
</p>
    <br />

**Note:** List is deprecated. Use of List for dynamic list generation is discouraged.For more advanced implementation of rendering list dynamically, take a look at [nativebase-tutorial](https://github.com/GeekyAnts/nativebase-tutorial). Use [Flatlist](https://facebook.github.io/react-native/docs/flatlist.html) instead.
