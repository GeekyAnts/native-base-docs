## swipeable-multi-def-headref
## Swipeable List (removed)
We recommend [react-native-swipe-list-view](https://github.com/jemise111/react-native-swipe-list-view) instead.

Swipeable List are ListItems that swipe open and close. Handles default native behavior such as closing rows when other rows are opened.<br />

![Preview ios swipeable-multi-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/list-swipe-multiple.gif)
![Preview android swipeable-multi-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/list-swipe-multiple.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];
export default class SwipeableListExample extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header />
        <Content>
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
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
      <nb-list
        :leftOpenValue="75"
        :rightOpenValue="-75"
        :dataSource="getListArr()"
        :renderRow="getListItemRow"
        :renderLeftHiddenRow="getLeftHiddenRowComponet"
        :renderRightHiddenRow="getRighttHiddenRowComponet"
      >
      </nb-list>
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
import { ListView } from "react-native";
import { Button, Icon, Text, ListItem } from "native-base";
export default {
  data: function() {
    return {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      basic: true,
      listViewData: [
        "Simon Mignolet",
        "Nathaniel Clyne",
        "Dejan Lovren",
        "Mama Sakho",
        "Alberto Moreno",
        "Emre Can",
        "Joe Allen",
        "Phil Coutinho"
      ]
    };
  },
  methods: {
    deleteRow: function(secId, rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.listViewData];
      newData.splice(rowId, 1);
      this.listViewData = newData;
    },
    getLeftHiddenRowComponet: function(data) {
      return (
        <Button full onPress={() => alert(data)}>
          <Icon active name="information-circle" />
        </Button>
      );
    },
    getRighttHiddenRowComponet: function(data, secId, rowId, rowMap) {
      return (
        <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
          <Icon active name="trash" />
        </Button>
      );
    },
    getListArr: function() {
      return this.ds.cloneWithRows(this.listViewData);
    },
    getListItemRow: function(data) {
      return (
        <ListItem>
          <Text>{data}</Text>
        </ListItem>
      );
    }
  }
};
</script>
{%- endcodetabs %}
  <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/list-swipe-multiple.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />

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
                <td>dataSource</td>
                <td> - </td>
                <td> user defined object </td>
                <td>
                    data chunks to render iteratively
                </td>
            </tr>
            <tr>
                <td>renderRow</td>
                <td> - </td>
                <td> Function </td>
                <td>
                    Callback which takes a chunk of data from dataSource and returns as a body component, which is visible. 
                </td>
            </tr>
            <tr>
                <td>renderLeftHiddenRow</td>
                <td> - </td>
                <td> Function </td>
                <td>
                    Callback which takes a chunk of data from dataSource and returns as a left component, which is hidden.
                </td>
            </tr>
            <tr>
                <td>renderRightHiddenRow</td>
                <td> - </td>
                <td> Function </td>
                <td>
                    Callback which takes a chunk of data from dataSource and returns as a right component, which is hidden.
                </td>
            </tr>
            <tr>
                <td>leftOpenValue</td>
                <td> - </td>
                <td> number </td>
                <td>
                    TranslateX value for opening the row to the left (<i>Positive Value</i>)
                </td>
            </tr>
            <tr>
                <td>rightOpenValue</td>
                <td> - </td>
                <td> number </td>
                <td>
                    TranslateX value for opening the row to the right (<i>Negative Value</i>)
                </td>
            </tr>
            <tr>
                <td>closeOnRowBeginSwipe</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Open row be closed as soon as a row begin to swipe open
                </td>
            </tr>
            <tr>
                <td>swipeToOpenPercent</td>
                <td> 50% </td>
                <td> % </td>
                <td>
                    Swipe percent of left/right component's width to trigger the row opening
                </td>
            </tr>
            <tr>
                <td>disableLeftSwipe</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Disable ability to swipe the row left
                </td>
            </tr>
            <tr>
                <td>disableRightSwipe</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Disable ability to swipe the row right
                </td>
            </tr>
            <tr>
                <td>onRowOpen, onRowClose</td>
                <td> - </td>
                <td> Function </td>
                <td>
                    Callback function which triggers when a swipe row is animating open/close
                </td>
            </tr>
            <tr>
                <td>onRowDidOpen, onRowDidClose</td>
                <td> - </td>
                <td> Function </td>
                <td>
                    Callback function which triggers when a swipe row has animated open/close
                </td>
            </tr>
        </tbody>
    </table><br />
<br />
**Known Issues :** Native behavior of closing row when List is scrolled doesn't work. <br />