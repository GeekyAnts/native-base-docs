#### List OnClick

To navigate between screens on click of a list item, include <code>button</code> prop with the <code>&lt;ListItem></code> component.

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden">IOS</th>
      <th>Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/list-onclick.gif')}}" alt="" /></th>
      <th><img height="470" width="270" src="{{('../../assets/android/components/list-onclick.gif')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Thumbnail } from 'native-base';
​
export default class ListOnClickExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem button onPress={function_call()}>
                            &lt;Thumbnail source={require('./img/NSP.png')} />
                            &lt;Text>Native Starter Pro&lt;/Text>
                        &lt;/ListItem>
                   &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
