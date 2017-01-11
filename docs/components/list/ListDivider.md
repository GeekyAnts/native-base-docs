#### List Divider

The List Divider component creates a list separator, which can be used for grouping list items. To create a divider for any child element of the list, include <code>itemDivider</code> prop with <code>ListItem</code> component.<br />
The List Divider of NativeBase comes with default style which is easily customisable.

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-divider.png" alt="" /></div></th>
      <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/list-divider.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
​
export default class ListDividerExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem itemDivider>
                            &lt;Text>A&lt;/Text>
                        &lt;/ListItem>                    
                        &lt;ListItem >
                            &lt;Text>Aaron Bennet&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Text>Ali Connors&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem itemDivider>
                            &lt;Text>B&lt;/Text>
                        &lt;/ListItem>  
                        &lt;ListItem>
                            &lt;Text>Bradley Horowitz&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre>
