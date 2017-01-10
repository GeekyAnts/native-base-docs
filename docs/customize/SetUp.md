# Theming NativeBase Apps

Customizing [NativeBase](http://nativebase.io/) will be a cakewalk for you. That is due to the fact, [NativeBase](http://nativebase.io/) has categorized its screens into different sections. It provides a separate file inclusive of color schemes for different sections.<br />

**Note:** *[NativeBase](http://nativebase.io/) is built on top of [React Native](https://facebook.github.io/react-native/).<br />*
*Hence with any component you can pass the style property which will be merged to the default style of that component.<br /><br />*

Steps to be followed to customize NativeBase theme:
* Copy the file <code>light.js</code> *(/node_modules/native-base/Components/Themes/light.js)*
* Create a folder <code>Themes</code> under your rootProject and paste the file here.<br />
Say <code>myTheme.js</code>
* Import the file Themes/myTheme.js into your code.<br />
Make the necessary theme changes into myTheme.js.
* Include prop <code>theme</code> with the component whose theme you wish to change.

Now your project is ready for theme customization.
<br />

*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import {Container, Content, Text} from 'native-base';
import React, {Component} from 'react-native';
import myTheme from './Themes/myTheme';
​
export default class ThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;Text>
                        I have changed the text color.
                    &lt;/Text>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>

* The <code>theme</code> prop can be applied to any component of NativeBase.
* The theme holds good with all its descendants.
* The above code for theme change works this way:<br />
Go to Themes/myTheme.js and modify color code for <code>textColor</code>.
* Similarly you can customize theme for the rest of NativeBase components by modifying color code of their respective attributes, some of which are explained below.
