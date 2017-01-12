## Customize Button

Steps to customize theme for Button attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/guide/theme-button.png')}}" alt="" /></div></th>
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
                <td>btnTextSizeSmall</td>
                <td>Text font size for button of type <i>small</i></td>
            </tr>
            <tr>
                <td>btnTextSize</td>
                <td>Text font size for button of type <i>default</i></td>
            </tr>
            <tr>
                <td>btnTextSizeLarge</td>
                <td>Text font size for button of type <i>large</i></td>
            </tr>
            <tr>
                <td>btnDisabledBg</td>
                <td>Background color of disabled button</td>
            </tr>
            <tr>
                <td>btnFontFamily</td>
                <td>Font style for button text</td>
            </tr>
        </tbody>
    </table>


#### With Button theme

With this theme of Button component you can modify any style rules applied to the default Button component.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Button, Icon, Text, StyleProvider } from 'native-base';
import buttonTheme from './Themes/buttonTheme';
​// buttonTheme is the customized theme of Button Component​

export default class ThemeButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={buttonTheme()}>
                      &lt;Button primary>
                        &lt;Text> Primary &lt;/Text>
                      &lt;/Button>
                      &lt;Button success>
                        &lt;Text> Success &lt;/Text>
                      &lt;/Button>
                      &lt;Button info>
                        &lt;Text> Info &lt;/Text>
                      &lt;/Button>
                      &lt;Button warning>
                        &lt;Text> Warning &lt;/Text>
                      &lt;/Button>
                      &lt;Button danger>
                        &lt;Text> Danger &lt;/Text>
                      &lt;/Button>

                      &lt;Button small>
                        &lt;Text> Small &lt;/Text>
                      &lt;/Button>
                      &lt;Button>
                        &lt;Text> Default &lt;/Text>
                      &lt;/Button>
                      &lt;Button large>
                        &lt;Text> Large &lt;/Text>
                      &lt;/Button>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


#### With Variables

With the <code>variable.js</code> file you can modify the variable values passed to the theme of the Button component.<br />
Say value of <code>btnTextSize</code> to change the fontSize of the Text in Button.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Button, Icon, Text, getTheme, StyleProvider } from 'native-base';
import customVariables from './Themes/variable';
​// getTheme is default theme of NativeBase Components
// customVariables is customized variables used in the components theme

export default class ThemeButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={buttonTheme(customVariables)}>
                      &lt;Button primary>
                        &lt;Text> Primary &lt;/Text>
                      &lt;/Button>
                      &lt;Button success>
                        &lt;Text> Success &lt;/Text>
                      &lt;/Button>
                      &lt;Button info>
                        &lt;Text> Info &lt;/Text>
                      &lt;/Button>
                      &lt;Button warning>
                        &lt;Text> Warning &lt;/Text>
                      &lt;/Button>
                      &lt;Button danger>
                        &lt;Text> Danger &lt;/Text>
                      &lt;/Button>

                      &lt;Button small>
                        &lt;Text> Small &lt;/Text>
                      &lt;/Button>
                      &lt;Button>
                        &lt;Text> Default &lt;/Text>
                      &lt;/Button>
                      &lt;Button large>
                        &lt;Text> Large &lt;/Text>
                      &lt;/Button>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>

***Note:** To customise button theme, refer [Theme Color](/docs/customize/ThemeColor.md)*
