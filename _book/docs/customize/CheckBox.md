## Customize Check Box

Steps to customize theme for Check Box attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(https://docs.nativebase.io/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('https://docs.nativebase.io/docs/assets/ios/guide/theme-checkbox.png')}}" alt="" /></div></th>
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
                <td>checkboxBgColor</td>
                <td>Checkbox background color</td>
            </tr>
            <tr>
                <td>checkboxTickColor</td>
                <td>Checkbox tick color</td>
            </tr>
            <tr>
                <td>checkboxSize</td>
                <td>Checkbox size</td>
            </tr>
        </tbody>
    </table>

#### With CheckBox theme

With this theme of CheckBox component you can modify any style rules applied to the default CheckBox component.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, CheckBox, Text, StyleProvider } from 'native-base';
import checkboxTheme from './Themes/checkboxTheme';
​// checkboxTheme is the customized theme of Badge Component
​
export default class ThemeCheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={checkboxTheme()}>
                        &lt;ListItem>
                            &lt;CheckBox checked={true} />
                            &lt;Text>Daily Stand Up&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;CheckBox checked={false} />
                            &lt;Text>Discussion with Client&lt;/Text>
                        &lt;/ListItem>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


#### With Variables

With the <code>variable.js</code> file you can modify the variable values passed to the theme of the CheckBox component.<br />
Say value of <code>checkboxBgColor</code> to change the background color of CheckBox.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, CheckBox, Text, StyleProvider, getTheme } from 'native-base';
import customVariables from './Themes/variable';
​// getTheme is default theme of NativeBase Components
// customVariables is customized variables used in the components theme
​
export default class ThemeCheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={getTheme(customVariables)}>
                        &lt;ListItem>
                            &lt;CheckBox checked={true} />
                            &lt;Text>Daily Stand Up&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;CheckBox checked={false} />
                            &lt;Text>Discussion with Client&lt;/Text>
                        &lt;/ListItem>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
