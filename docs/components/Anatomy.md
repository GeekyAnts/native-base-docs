## anatomy-headref
## Anatomy

Automatically animates view to its new position.<br />
A common way to use [NativeBase](https://nativebase.io/) screen structure is to have all the components within <code>&lt;Container></code><br />

![Preview ios anatomy-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/anatomy.png)
![Preview android anatomy-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/anatomy.png)

*General Syntax*
{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon :name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <nb-text>Content goes here</nb-text>
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button active full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
{%- endcodetabs %}
<br />


* [NativeBase](https://nativebase.io/) provides its own frame component, named after <code>&lt;Container></code>.
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
                    There can be only one <code style="background-color: #FFF">&lt;Content></code> component in a screen.
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

#### Header Anatomy

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent>
          <nb-icon :name="'menu'" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

#### Content Anatomy

* This is a NativeBase component which renders as body element of your screen.
* Each screen can have only one <code>Content</code> component and can be defined anywhere within the Container.
* Content takes in the whole collection of React Native and NativeBase components.
* Content provides you with stylesheet.
* User can add custom styles while defining <code>Content</code> within their app.
* Replacing Component:
  React Native Keyboard Aware Scroll View's [KeyboardAwareScrollView](https://github.com/APSL/react-native-keyboard-aware-scroll-view)

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text } from 'native-base';
export default class ContentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header/>
    <nb-content padder>
      <nb-text>Content goes here</nb-text>
    </nb-content>
    <nb-footer/>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

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
            <td>padder</td>
            <td>true</td>
            <td>boolean</td>
            <td>Applies margin at all sides to Content section. Can be used with NativeBase View as well.</td>
        </tr>
        <tr>
            <td>disableKBDismissScroll</td>
            <td>false</td>
            <td>boolean</td>
            <td>Disables automatic scroll on focus.</td>
        </tr>
        <tr>
            <td>contentContainerStyle</td>
            <td>-</td>
            <td>style</td>
            <td>Lets the user style the <code>Content</code> component.</td>
        </tr>
        <tr>
            <td>enableResetScrollToCoords</td>
            <td>true</td>
            <td>boolean</td>
            <td>Lets the user enable or disable automatic resetScrollToCoords.</td>
        </tr>
    </tbody>
</table>


#### Footer Anatomy

* NativeBase component that renders as footer, include your favourite apps for your screen.
* There can be only a single Footer component into your Container.
* To have Footer for your screen, include <code>Footer</code> component within <code>Container</code>.
* NativeBase gives you flexibility to define your Footer component anywhere in the bounds of Container.
* Footer takes input as: FooterTab.
* The components those are defined within <code>Footer</code> will be rendered in the same order that you define them.
* Footer provides you with stylesheet.
* User can add custom styles while defining <code>Footer</code> within their app.
* Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html).


{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header/>
    <nb-content />
    <nb-footer>
      <nb-footer-tab>
        <nb-button full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/anatomy.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
