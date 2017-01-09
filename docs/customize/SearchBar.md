<div class="section" id="themeSearchBar">

    <h3>Customize Search Bar</h3>

    <p style="padding-bottom: 10px;">
        Steps to customize theme for Search Bar attributes:
    </p>

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

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Header, Button, Icon, InputGroup, Input } from 'native-base';
import myTheme from './Themes/myTheme';
​
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
}</code></pre><br />
</div>
