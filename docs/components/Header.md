# Header Default
* [NativeBase](https://nativebase.io/) component that renders as Header (navbar) for your screen.
* There can be a single Header component into your Container.
* To have Header for your screen, include <code>&lt;Header></code> component within <code>&lt;Container></code>.
* Header takes input as: Button and Title (Text)
* The components those are defined within <code>&lt;Header></code> will be rendered in the same order that you define them.
* Header provides you with stylesheet.
* User can add custom styles while defining <code>&lt;Header></code> within their app.
* *Replacing Component:
  [React Native](https://facebook.github.io/react-native/)
  [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

  **Contents:**
  * [Header with only title](COMPONENTS.md#Header_with_only_title)
  * [Header with icons and text buttons](COMPONENTS.md#Header_with_Icon_and_Text_Buttons)
  * [Header with title and Subtitle](COMPONENTS.md#Header_with_title_and_Subtitle)

![Preview ios Header_Default](../docs/assets/ios/components/header.png)
![Preview android Header_Default](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/iconTextBtnsHeader.png)

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Header>
                    &lt;Left>
                        &lt;Button transparent>
                            &lt;Icon name='arrow-back' />
                        &lt;/Button>
                    &lt;/Left>
                    &lt;Body>
                        &lt;Title>Header&lt;/Title>
                    &lt;/Body>
                    &lt;Right>
                        &lt;Button transparent>
                            &lt;Icon name='menu' />
                        &lt;/Button>
                    &lt;/Right>
                &lt;/Header>
            &lt;/Container>
        );
    }
}</code></pre><br />
<br />

**Configuration**<br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Left</td>
                <td>-</td>
                <td>-</td>
                <td>Components render to the left in Header</td>
            </tr>
            <tr>
                <td>Body</td>
                <td> - </td>
                <td>-</td>
                <td>Components render at the center of Header</td>
            </tr>
            <tr>
                <td>Right</td>
                <td> - </td>
                <td>-</td>
                <td>Components render to the right in Header</td>
            </tr>
            <tr>
                <td>noShadow</td>
                <td> false </td>
                <td>true false</td>
                <td>Text font size of badge.</td>
            </tr>
            <tr>
                <td>iosBarStyle</td>
                <td> - </td>
                <td>light-content', 'dark-content' or 'default'</td>
                <td>Set iOS barStyle</td>
            </tr>
            <tr>
                <td>backgroundColor</td>
                <td> - </td>
                <td>string</td>
                <td>Set android statusBar color</td>
            </tr>
        </tbody>
    </table><br />


#### Header with only title
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Header>
                    &lt;Left/>
                    &lt;Body>
                        &lt;Title>Header&lt;/Title>
                    &lt;/Body>
                    &lt;Right />
                &lt;/Header>
            &lt;/Container>
        );
    }
}</code></pre><br />

#### Header with Icon and Text Buttons
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
            &lt;Header>
                &lt;Left>
                    &lt;Button transparent>
                        &lt;Icon name='arrow-back' />
                    &lt;/Button>
                &lt;/Left>
                &lt;Body>
                    &lt;Title>Header&lt;/Title>
                &lt;/Body>
                &lt;Right>
                    &lt;Text>Cancel&lt;/Text>
                &lt;/Right>
            &lt;/Header>
        &lt;/Container>
        );
    }
}</code></pre><br />

#### Header with title and Subtitle
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
            &lt;Header>
                &lt;Left>
                    &lt;Button transparent>
                        &lt;Icon name='arrow-back' />
                    &lt;/Button>
                &lt;/Left>
                &lt;Body>
                    &lt;Title>Title&lt;/Title>
                    &lt;Subtitle>Subtitle&lt;/Subtitle>
                &lt;/Body>
                &lt;Right />
            &lt;/Header>
        &lt;/Container>
        );
    }
}</code></pre><br />
