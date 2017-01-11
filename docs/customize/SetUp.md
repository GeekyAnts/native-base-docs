# Theming NativeBase Apps

Customizing [NativeBase](http://nativebase.io/) will be a cakewalk for you. That is due to the fact, [NativeBase](http://nativebase.io/) has categorized its screens into different sections. It provides separate set of files for customizing each component.<br />

**Note:** *[NativeBase](http://nativebase.io/) is built on top of [React Native](https://facebook.github.io/react-native/).<br />*
*Hence with any component you can pass the style property which will be merged to the default style of that component.<br /><br />*

Steps to be followed to customize NativeBase component via theme:
* Copy the folder <code>theme</code> and paste in your rootProject if you want to customize each component for your project.  *(/node_modules/native-base/theme)*
* Or Create a folder <code>Themes</code> under your rootProject and copy and paste the only those component files here which you want to customize.<br />
Say <code>myTheme.js</code>
* Import the file Themes/myTheme.js into your code.<br />
Make the necessary theme changes into myTheme.js.
* Wrap the code or component to which you want to apply the theme with <code>&lt;StyleProvider></code>.
* Pass the theme i.e myTheme as the value of <code>style</code> prop of component <code>&lt;StyleProvider></code>.

Steps to be followed to customize NativeBase component via variables:
* Copy the file <code>variable.js</code> *(/node_modules/native-base/theme/variable.js)*
* Create a folder <code>Themes</code> under your rootProject and paste the here.<br />
Say <code>variable.js</code>
* Import the file Themes/variable.js into your code.<br />
Make the necessary theme changes into variable.js.
* Wrap the code or component to which you want to apply the theme with <code>&lt;StyleProvider></code>.
* Pass the variable i.e variable.js as the parameter of theme function, which is passed as a value to <code>style</code> prop of component <code>&lt;StyleProvider></code>.

Now your project is ready for theme customization.
<br />

*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import {Container, Content, Text} from 'native-base';
import React, {Component} from 'react-native';
import myTheme from './Themes/myTheme';
import variable from './Themes/variable';
​
export default class ThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;StyleProvider  style={myTheme(variable)}>
                    &lt;Content>
                        &lt;Text>
                            I have changed the text color.
                        &lt;/Text>
                    &lt;/Content>
                &lt;/StyleProvider>
            &lt;/Container>
        );
    }
}</code></pre>

* The <code>&lt;/StyleProvider></code> with theme can be applied to any component of NativeBase.
* The theme holds good with all its descendants.
* The above code for theme change works this way:<br />
Go to Themes/myTheme.js and modify any style prop.
Or Go to Themes/variable.js and modify color code for <code>textColor</code>.
* Similarly you can customize theme for the rest of NativeBase components by modifying color code of their respective attributes, some of which are explained below.
