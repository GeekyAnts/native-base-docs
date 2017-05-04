##theaming-nb-headref
# Theming NativeBase Apps

Customizing [NativeBase](https://nativebase.io/) will be a cakewalk for you. That is due to the fact, [NativeBase](https://nativebase.io/) has categorized its screens into different sections. It provides a separate file inclusive of color schemes for different sections. <br />

*Note:* NativeBase is built on top of React Native.
Hence with any component you can pass the style property which will be merged to the default style of that component.

#### Steps to be followed to customize NativeBase:
* Run node *node_modules/native-base/ejectTheme.js* from your terminal after installing native-base.
* All the theme files and variables get added to your project root. Change the variables or theme files.
* Wrap the code or component to which you want to apply the theme with *<StyleProvider>*.
* Pass the variable i.e *platform/material/commonColors.js* as the parameter of theme function, which is passed as a value to style prop of component *<StyleProvider>*.

Now your project is ready for theme customization.
<br />

## What are themes and variables and how to change them?
When you run node node_modules/native-base/ejectTheme.js from your terminal, a folder named native-base-theme gets copied to your project root. Inside the directory are two folders named components and variables. <br />
The components folder contains the theme styling files for all the components. This is where you would change the style properties of your components if you need to<br />
For example, if you need to change the height of Button component, you'll need to change this line in native-base-theme/components/Button.js. <br />
The variables folder contains the three preset theme variables. You can change the variables,(color, fontFamily, iconFamily etc) for a uniform look and feel throughout your app. <br />

#### Three themes to start with
NativeBase is packed with three preset themes. <br />
* <code>Platform:</code> The default theme of NativeBase which maps to the design of the platform where the app runs.
* <code>Material:</code> Sometimes, you need Material design for both the platforms. Not everyone is a fan but Google does use Material design on iOS. This theme is not 100% material yet but it can be used today. <br />
* <code>Common Colors:</code> Most of the brands use a common color scheme for both the platforms but they also follow platform specific icons, font and orientation of the components. Common Colors theme is best suited for such use-cases. <br />

*Syntax to add Material Design*
<pre class="line-numbers"><code class="language-jsx">import {Container, Content, StyleProvider, Text} from 'native-base';
import React, {Component} from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
​export default class ThemeExample extends Component {
    render() {
        return (
        &lt;StyleProvider style={getTheme(material)}>
            &lt;Container>
                    &lt;Content>
                        &lt;Text>
                            I have changed the text color.
                        &lt;/Text>
                    &lt;/Content>
            &lt;/Container>
          &lt;/StyleProvider>
        );
    }
}</code></pre><br />

* The <code>&lt;StyleProvider></code> with theme can be applied to any component of NativeBase.
* The theme holds good with all its descendants.
* The above code for theme change works this way:<br />
Go to native-base-theme/variables/platform.js and modify color code for textColor.
* Similarly you can customize theme for the rest of NativeBase components by modifying color code of their respective attributes, some of which are explained below.
