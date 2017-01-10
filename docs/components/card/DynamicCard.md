#### Dynamic Card

A center aspect designed for efficient representation of vertically scrolling lists of changing data. This can be achieved on the same lines as that of <b>dataArray</b> concept of <b>List</b>.<br />
Create a <code>Card dataArray</code>, populate it with an easy array of data chunks, and instantiate a <code>CardItem</code> component with that chunk of data and a <code>renderRow</code> callback which takes a chunk from the whole data array and returns a renderable component.

<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/dynamic-card.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/dynamic-card.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base';

let themes = [
    {
        name: 'Native Starter Pro',
        image: require('./img/NSP.png')
    },
    . . .
];
​
export default class DynamicCardExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card dataArray={themes}
                          renderRow={(theme) =>
                            &lt;CardItem>
                                &lt;Thumbnail source={theme.image} />
                                &lt;Text>{theme.name}&lt;/Text>
                            &lt;/CardItem>
                        }>
                    &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre>
