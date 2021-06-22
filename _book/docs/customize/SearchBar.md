## Customize Search Bar

Steps to customize theme for Search Bar attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(https://docs-v2.nativebase.io/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('https://docs-v2.nativebase.io/docs/assets/ios/guide/theme-search-bar.png')}}" alt="" /></div></th>
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
                <td>toolbarInputColor</td>
                <td>Background color for textbox in Header</td>
            </tr>
            <tr>
                <td>toolbarIconSize</td>
                <td>Icon size in Search bar</td>
            </tr>
        </tbody>
    </table>


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Header, Button, Icon, InputGroup, Input } from 'native-base';
import myTheme from './Themes/myTheme';
export default class ThemeSearchBarExample extends Component {
    render() {
        return (
            &lt;Container theme={myTheme}>
                &lt;Header searchBar rounded>
                    &lt;InputGroup>
                        &lt;Icon name='ios-search' />
                        &lt;Input placeholder='Search' />
                        &lt;Icon name='ios-people' />
                    &lt;/InputGroup>
                    &lt;Button transparent>
                        Search
                    &lt;/Button>
                &lt;/Header>
            &lt;/Container>
        );
    }
}</code></pre>
