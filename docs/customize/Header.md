<div class="section" id="themeHeader">

    <h3>Customize Header</h3>

    <p style="padding-bottom: 10px;">
        Steps to customize theme for Header attributes:
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
                <td>toolbarHeight</td>
                <td>Header height</td>
            </tr>
            <tr>
                <td>toolbarDefaultBg</td>
                <td>Header background color</td>
            </tr>
            <tr>
                <td>toolbarTextColor</td>
                <td>Title color in Header</td>
            </tr>
            <tr>
                <td>iosToolbarBtnColor</td>
                <td>Button color in Header</td>
            </tr>
            <tr>
                <td>toolbarIconSize</td>
                <td>Icon size in Header</td>
            </tr>
        </tbody>
    </table>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Header, Button, Title, Icon } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeHeaderExample extends Component {
    render() {
        return (
            &lt;Container theme={myTheme}>
                &lt;Header>
                    &lt;Button transparent>
                        &lt;Icon name='ios-arrow-back' />
                    &lt;/Button>

                    &lt;Title>Header&lt;/Title>

                    &lt;Button transparent>
                        &lt;Icon name='ios-menu' />
                    &lt;/Button>
                &lt;/Header>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
