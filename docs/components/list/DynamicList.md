#### Dynamic List

A center aspect designed for efficient representation of vertically scrolling lists of changing data. The simplest way is to create a <code>List dataArray</code>, populate it with an easy array of data chunks, and instantiate a <code>ListItem</code> component with that chunk of data and a <code>renderRow</code> callback which takes a chunk from the whole data array and returns a renderable component.

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/dynamic-list.png')}}" alt="" /></div></th>
      <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../../assets/android/components/dynamic-list.png')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
​
export default class DynamicListExample extends Component {
    render() {

        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

        return (
            &lt;Container>
                &lt;Content>
                    &lt;List dataArray={items}
                        renderRow={(item) =>
                            &lt;ListItem>
                                &lt;Text>{item}&lt;/Text>
                            &lt;/ListItem>
                        }>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre>

For more advanced implementation of rendering list dynamically, take a look at [nativebase-tutorial](https://github.com/GeekyAnts/nativebase-tutorial).
