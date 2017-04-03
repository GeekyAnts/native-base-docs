# Header Default
* [NativeBase](http://nativebase.io/) component that renders as Header (navbar) for your screen.
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
import { Container, Content, ListItem, Text, CheckBox } from 'native-base/ui';
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

#### Header with only title
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base/ui';
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
import { Container, Content, ListItem, Text, CheckBox } from 'native-base/ui';
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
import { Container, Content, ListItem, Text, CheckBox } from 'native-base/ui';
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
