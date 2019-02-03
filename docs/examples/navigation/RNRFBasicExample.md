# Basic RNRF Example App and Tutorial
This is a simple 2-page application that demonstrates the basic usage of [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) as a navigation tool. It is extremely easy to understand. This step-by-step tutorial will take you through the basic concepts. We are using [NativeBase](https://nativebase.io/) as the UI library to design our pages.<br />
# Find full code [here](https://github.com/GeekyAnts/native-base-example-rnrf)
<br />
![RNRF Gif](https://docs.nativebase.io/docs/assets/RNRFGif.gif) <br />

## Aim
We are creating a 2-page application with a button on each page that takes us to the other page <code>onPress</code>. <br />

## Installation

**Note:** If you encounter an issue with [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) during building your project, it might be due to issue with latest versions of [React Native](https://github.com/facebook/react-native). Check out [this issue](https://github.com/aksonov/react-native-router-flux/issues/1761). You might have to bump down the versions of [React Native](https://github.com/facebook/react-native) and React <br />

1. **SetUp React Native Project** <br /> SetUp a React Native project. Refer [this](https://facebook.github.io/react-native/docs/getting-started.html) for more information about setting up a React Native project.
2. **Installing Libraries**
With a React Native project SetUp, We can now install all required Libraries as follows.<br />
a. **React Native Router Flux**<br />
<pre><code>npm install react-native-router-flux --save</code></pre><br />
b. **NativeBase**<br />
<pre><code>npm install native-base --save</code></pre><br />
c. **Configure dependencies**<br />
<pre><code>react-native link</code></pre><br />

By the end of Installation, your package.json file should look something like this.<br />

![RNRFExample PackageJson](https://docs.nativebase.io/docs/assets/RNRFPackage.png) <br />

## Lets Play

With our basic project setup we can now start building our App. <br />
Make a folder at the project root by the name of <code>src</code>. Inside this folder we make 3 files. <br />
### App.js

This file is where our app lives. This is where we setup our navigation library [React Native Router Flux](https://github.com/aksonov/react-native-router-flux). <br />
Some components from [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) are worth understanding.
1. <code>Router Component</code> : This component is the parent component inside which we pass all other Page components that are part of our Navigation objective. <br />
2. <code>Scene Component</code> : We pass our Page components to <code>Scene</code> through <code>component</code> prop as shown below. <br />
The <code>key</code> prop is used to reference our component when we wish to switch a <code>Scene</code>. <br />
3. We are going to be optimistic and assume that our Page components are made. Hence we import out page components and pass them to <code>Scene</code>. <br/>

**Code** <br />
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
export default class App extends Component {
  render() {
    return (
      &lt;Router hideNavBar= "true">
        &lt;Scene key="root">
          &lt;Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          &lt;Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        &lt;/Scene>
      &lt;/Router>
    )
  }
}</code></pre>

### PageOne.js

This page will simply have one <code>Button</code> to take us to next page. <br />
We will fire an <code>Action</code> <code>onPress</code> of this <code>Button</code>. <br />

**Note:** We will use [RNRF](https://github.com/aksonov/react-native-router-flux) to navigate between screens, hence in the code below, we import <code>Actions</code> from [RNRF](https://github.com/aksonov/react-native-router-flux) and we have added <code>Actions.pageTwo()</code> as an <code>onPress</code> event on the button which will take us to the PageTwo Screen.

The general syntax to navigate between screens in [RNRF](https://github.com/aksonov/react-native-router-flux) goes like :- <br />
<pre><code>Actions.ACTION_NAME(PARAMS)</code></pre>
We have already declared <code>ACTION_NAME</code> in the <code>key<code> prop of <code>Scene</code> component back in out <code>App.js</code> file<br />

**Code**
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class pageOne extends Component {
  render(){
    return(
      &lt;Container>
        &lt;Header>
          &lt;Body>
            &lt;Title>PageOne&lt;/Title>
          &lt;/Body>
        &lt;/Header>
        &lt;Content padder>
          &lt;Card>
            &lt;CardItem>
              &lt;Body>
                &lt;Text>
                  This is Page One, Press button to goto page two
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
          &lt;/Card>
          &lt;Button dark bordered style={{alignSelf: 'center', margin: 30}}
            onPress= {() => {Actions.pageTwo(); }}>
            &lt;Text>Goto Page 2&lt;/Text>
          &lt;/Button>
         &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

### PageTwo.js
This page will simply have one <code>Button</code> to take us to the previous page. <br />
We will fire an <code>Action</code> <code>onPress</code> of this <code>Button</code>. <br />
We will use <code>Actions.pop()</code> to return to previous page.

**Code** <br />
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class pageTwo extends Component {
  render(){
    return(
      &lt;Container>
        &lt;Header>
          &lt;Body>
            &lt;Title>PageTwo&lt;/Title>
          &lt;/Body>
        &lt;/Header>
        &lt;Content padder>
          &lt;Card>
            &lt;CardItem>
              &lt;Body>
                &lt;Text>
                  This is Page One, Press button to goto page two
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
          &lt;/Card>
          &lt;Button dark bordered
            onPress= {() => {Actions.pop(); }}>
            &lt;Text>Goto Page 1&lt;/Text>
         &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

### What Next?
Well, we are pretty much done. Next we simply import our App component in our <code>index.js</code> file. The file and folder structure will look something like this. <br />
**Code** <br />
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App.js';
export default class RnrfExample extends Component {
  render() {
    return (
      &lt;App />
    );
  }
}
AppRegistry.registerComponent('RnrfExample', () => RnrfExample);
</code></pre><br />

![RNRFExample Overall](https://docs.nativebase.io/docs/assets/RNRFOverall.png) <br />
