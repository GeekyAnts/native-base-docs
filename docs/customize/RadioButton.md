# Customize Radio Button

Steps to customize theme for Radio Button attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><img height="470" width="270" src="{{('../assets/ios/guide/theme-radio-button.png')}}" alt="" /></th>
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
                <td>radioBtnSize</td>
                <td>Radio Button size</td>
            </tr>
            <tr>
                <td>radioColor</td>
                <td>Unselected radio button background color</td>
            </tr>
            <tr>
                <td>radioSelectedColor</td>
                <td>Selected radio button background color</td>
            </tr>
        </tbody>
    </table>


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Radio, Text } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeRadioButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Radio selected={false} />
                            &lt;Text>Daily Stand Up&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Radio selected={true} />
                            &lt;Text>Discussion with Client&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
