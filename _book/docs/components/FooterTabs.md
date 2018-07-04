## footer-tabs-def-headref
## Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

**Contents**
* [Footer with only icons](Components.md#footer-tabs-icon-headref)
* [Footer with icons and text](Components.md#footer-tabs-icon-text-headref)
* [Footer Badge](Components.md#footer-tabs-badge-headref)

![Preview ios footer-tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/footer-text.png)
![Preview android footer-tabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/footer-text.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
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
    <nb-header />
    <nb-content />
    <nb-footer>
      <nb-footer-tab>
        <nb-button>
          <nb-text>Apps</nb-text>
        </nb-button>
        <nb-button>
          <nb-text>Camera</nb-text>
        </nb-button>
        <nb-button :active="true">
          <nb-text>Navigate</nb-text>
        </nb-button>
        <nb-button>
          <nb-text>Contact</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
{%- endcodetabs %}
<br />


**Configuration**

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
                <td>active</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                This is <code>button</code> prop <i>(applicable with FooterTab only)</i>. Sets a Footer Button active.
                </td>
            </tr>
            <tr>
                <td>badge</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                This is <code>button</code> prop <i>(applicable with FooterTab only)</i>. Set to <code>true</code> if using Badges.
                </td>
            </tr>
            <tr>
                <td>vertical</td>
                <td>true</td>
                <td>boolean</td>
                <td>
                This is <code>button</code> prop <i>(applicable with FooterTab only)</i>. Use this prop to vertically align footer elements like icons and text. Necessary when using Badge in Footer Tabs.
                </td>
            </tr>
        </tbody>
    </table><br />

## footer-tabs-icon-headref
#### Icon Footer
![Preview ios footer-tabs-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/footer-icon.png)
![Preview android footer-tabs-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/footer-icon.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
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
    <nb-header />
    <nb-content />
    <nb-footer>
      <nb-footer-tab>
        <nb-button>
          <nb-icon name="apps" />
        </nb-button>
        <nb-button>
          <nb-icon name="camera" />
        </nb-button>
        <nb-button :active="true">
          <nb-icon name="apps" :active="true"/>
        </nb-button>
        <nb-button>
          <nb-icon name="person" />
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

## footer-tabs-icon-text-headref
#### Icon Footer with Text
![Preview ios footer-tabs-icon-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/footer-icon-text.png)
![Preview android footer-tabs-icon-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/footer-icon-text.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
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
    <nb-header />
    <nb-content />
    <nb-footer>
      <nb-footer-tab>
        <nb-button>
          <nb-icon name="apps" />
          <nb-text>Apps</nb-text>
        </nb-button>
        <nb-button>
          <nb-icon name="camera" />
          <nb-text>Camera</nb-text>
        </nb-button>
        <nb-button :active="true">
          <nb-icon name="navigate" :active="true" />
          <nb-text>Navigate</nb-text>
        </nb-button>
        <nb-button>
          <nb-icon name="person" />
          <nb-text>Contact</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
{%- endcodetabs %}
<br />

## footer-tabs-badge-headref
#### Footer with badge
![Preview ios footer-tabs-badge-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/footer-badge.png)
![Preview android footer-tabs-badge-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/footer-badge.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
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
    <nb-header />
    <nb-content />
    <nb-footer>
      <nb-footer-tab>
        <nb-button vertical badge>
          <nb-badge>
              <nb-text>2</nb-text>
          </nb-badge>
          <nb-icon name="apps" />
          <nb-text>Apps</nb-text>
        </nb-button>
        <nb-button >
          <nb-icon name="camera" />
          <nb-text>Camera</nb-text>
        </nb-button>
        <nb-button vertical badge :active="true">
          <nb-badge :style="{background-color: 'green'}">
            <nb-text>51</nb-text>
          </nb-badge>
          <nb-icon name="navigate" :active="true" />
          <nb-text>Navigate</nb-text>
        </nb-button>
        <nb-button>
          <nb-icon name="contact" />
          <nb-text>Contact</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
{%- endcodetabs %}
<br />
