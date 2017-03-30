## Anatomy

Automatically animates views to their new positions.<br />
A common way to use [NativeBase](http://nativebase.io/) screen structure is to have all the components within <code>&lt;Container></code><br />

![Preview ios Anatomy](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/screenshots/ios/anatomy.png)
![Preview android Anatomy](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/anatomy.png)

**Contents:**
* [Header](README.md#Header)
* [Content](README.md#Content)
* [Footer](README.md#Footer)


*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
​export default class AnatomyExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Header>
                    &lt;Left>
                        &lt;Button transparent>
                            &lt;Icon name='menu' />
                        &lt;/Button>
                    &lt;/Left>
                    &lt;Body>
                        &lt;Title>Header&lt;/Title>
                    &lt;/Body>
                    &lt;Right />
                &lt;/Header>
                &lt;Content>
                    // Your main content goes here
                &lt;/Content>
                &lt;Footer>
                    &lt;FooterTab>
                        &lt;Button full>
                            &lt;Text>Footer&lt;/Text>
                        &lt;/Button>
                    &lt;/FooterTab>
                &lt;/Footer>
            &lt;/Container>
        );
    }
}</code></pre><br />




* [NativeBase](http://nativebase.io/) provides its own frame component, named after <code>&lt;Container></code>.
* All the components should be included within the Container.
* Container takes mainly three components: <code>&lt;Header></code>, <code>&lt;Content></code> and <code>&lt;Footer></code>.
* Container comes with its predefined stylesheet, with an added advantage of accepting user-defined styles.
* Usage of Container's <code>Header</code> component is very similar to your HTML &lt;head>. So is with <code>Footer</code>.
* The <code>Content</code> component of Container is nothing but the body section of your screen.<br /><br />

**Configuration**<br />
    <table class="table table-bordered">
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
                <td>Header</td>
                <td> - </td>
                <td> - </td>
                <td>Renders as Header (navbar) of your screen.<br />
                    Input values: Button, Title (Text).
                </td>
            </tr>
            <tr>
                <td>Content</td>
                <td> - </td>
                <td> - </td>
                <td>Represents the main content of your screen.<br />
                    There can be only one <code style="background-color: #FFF">Content></code> component in a screen.
                </td>
            </tr>
            <tr>
                <td>Footer</td>
                <td> - </td>
                <td> - </td>
                <td>Renders as Footer of your screen.<br />
                    Input values: FooterTab
                    </a>
                </td>
            </tr>
        </tbody>
    </table><br />
