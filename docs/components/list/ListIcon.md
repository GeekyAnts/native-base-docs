#### List Icon

Lists can have icons assigned either to the left and/or right side of each list item.
Along with icons, list item can also have badges assigned.
To have note kind of text for list item, include <code>note</code> prop with <code>Text</code> component of <code>ListItem</code>.

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden">IOS</th>
      <th>Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><img height="470" width="270" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/list-icon.png" alt="" /></th>
      <th><img height="470" width="270" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/list-icon.png" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';
​
export default class ListIconExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem iconLeft>
                            &lt;Icon name="ios-plane" style=&#123;{ color: '#0A69FE' }} />
                            &lt;Text>Airplane Mode&lt;/Text>
                            &lt;Text note>Off&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem iconLeft>
                            &lt;Icon name="ios-settings-outline" style=&#123;{ color: '#0A69FE' }} />
                            &lt;Text>Software Update&lt;/Text>
                            &lt;Badge style=&#123;{ backgroundColor: '#8C97B5' }}>2&lt;/Badge>
                        &lt;/ListItem>
                        &lt;ListItem iconLeft>
                            &lt;Icon name="ios-mail-outline" style=&#123;{ color: '#0A69FE' }} />
                            &lt;Text>Mail&lt;/Text>
                            &lt;Badge>12&lt;/Badge>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}
</code></pre>
