# Basic StackNavigation Example App and Tutorial
This is a simple 3-page application that demonstrates the basic usage of [React Navigation](https://reactnavigation.org/) as a navigation tool. It is extremely easy to understand. This step-by-step tutorial will take you through the basic concepts. We are using [NativeBase](https://nativebase.io/) as the UI library to design our pages.<br />
<br />
** Find full code [here](https://github.com/GeekyAnts/native-base-react-navigation-stack-navigator).** <br />
<br />
![StackNavigation Gif](https://docs.nativebase.io/docs/assets/StackNavigation.gif) <br />

## Aim
We are creating a 3-page application with buttons on each page that takes us to the other page <code>onPress</code>. <br />

## Installation

1. **Create React Native App**: Use [CRNA](https://github.com/react-community/create-react-native-app) tool to create an App like this <br />
<code>
$ npm install -g create-react-native-app
</code> <br />
<code>
$ create-react-native-app my-app
</code> <br />
<code>
$ cd my-app/
</code> <br />
<code>
$ npm start
</code> <br />
2. **Installing Libraries** <br /> With a React Native project SetUp, We can now install all required Libraries as follows. <br />
a. **React Navigation** <br />
Do this
<code>
npm install --save react-navigation
</code> <br />
b. **NativeBase** <br />
<code>
npm install native-base --save
</code> <br />
**Configure all dependencies by running the following command** <br />
<code>
react-native link
</code> <br />
By the end of Installation, your package.json file should look something like this.<br />

![StackNavigation PackageJson](https://docs.nativebase.io/docs/assets/StackNavigationPackage.png) <br />

## Lets Play

With our basic project setup we can now start building our App. <br />
Make a folder at the project root by the name of <code>src</code>. Inside this folder we make 3 files <code>ChatScreen.js</code> <code>HomeScreen.js</code> <code>Profile.js</code>. <br />

## HomeScreen.js

This is going to be the first landing screen of out App. We are going to implement the navigation logic here.<br />
For our purpose here, we have used **StackNavigator** for navigation.<br />
Go ahead and add the following file in your project. <br />

**Code** <br />
<pre class="line-numbers"><code class="language-jsx"><code class="language-jsx">import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title } from 'native-base';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen.js';
import Profile from './Profile.js';
 class HomeScreen extends React.Component {
  static navigationOptions = {
    header:
            &lt;Header>
                &lt;Body>
                    &lt;Title>Welcome&lt;/Title>
                &lt;/Body>
            &lt;/Header>
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        &lt;Container>
            &lt;Content>
              &lt;Card>
                &lt;CardItem>
                  &lt;Body>
                    &lt;Text>Chat App to talk to lucy!&lt;/Text>
                  &lt;/Body>
                &lt;/CardItem>
              &lt;/Card>
              &lt;Button full dark style= &lcub;&lcub; marginTop: 10 }}
                onPress={() => navigate('Chat')}>
                &lt;Text>Chat With Lucy&lt;/Text>
              &lt;/Button>
              &lt;Button full primary
                style= &lcub;&lcub; marginTop: 10 }}
                onPress={() => navigate('Profile')}>
                &lt;Text>Goto Lucy Profile&lt;/Text>
              &lt;/Button>
            &lt;/Content>
        &lt;/Container>
    );
  }
}
export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Profile: { screen: Profile }
});</code></pre><br />

**Explained**
1. We are importing out **StackNavigator** from 'react-navigation', which we will use later to define our routes.
2. We are being optimistic here while importing the other two **screen** components, we will make these components later.
3. We are making our custom [NativeBase](https://nativebase.io/) header component after the class defination as shown above. Using **static navigationOptions**, we can pass our header component to the header attribute as shown.
4. This screen simply has two buttons as shown above, each navigates to the **Chat** and **Profile** pages using the prop **this.props.navigation**
5. Lastly we create our **StackNavigator** object and pass all **screens** we are going to be needing to the object as shown above in the code.

## ChatScreen.js

This screen is the intermediate chat screen. It simply has two buttons to take us to *HomeScreen* and *Profile* screens.<br />
Go ahead and add the following file in your project. <br />

**Code** <br />
<pre class="line-numbers"><code class="language-jsx"><code class="language-jsx">
import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title } from 'native-base';
      export default class ChatScreen extends React.Component {
        static navigationOptions = ({ navigation }) => ({
          header: &lt;Header>
                     &lt;Left>
                        &lt;Button transparent onPress= {()=> navigation.goBack()}>
                            &lt;Icon name='arrow-back' />
                        &lt;/Button>
                      &lt;/Left>
                      &lt;Body>
                          &lt;Title>ChatScreen&lt;/Title>
                      &lt;/Body>
                      &lt;Right />
                  &lt;/Header>,
        });
        render() {
          const {navigate}= this.props.navigation;
          return (
            &lt;Container>
              &lt;Content>
                &lt;Card>
                  &lt;CardItem>
                    &lt;Body>
                      &lt;Text>Chat with Lucy&lt;/Text>
                    &lt;/Body>
                  &lt;/CardItem>
                &lt;/Card>
                  &lt;Button full primary
                    onPress={() => navigate('Profile')}>&lt;Text>Goto Lucy Profile&lt;/Text>&lt;/Button>
              &lt;/Content>
            &lt;/Container>
          );
        }
}
</code></pre><br />

**Explained** <br />
1. Notice how here we have received the **navigation** attribute in the **static navigationOptions** defination. We are doing this to have navigation functionality within our custom header as shown. In our header we have placed a back button, it calls the <code>navigation.goback()</code> function to pop the navigation Stack.
2. In the body of the App, we simply have a button to take us to **Profile** screen.

## Profile.js
This is our third screen. This screen will only have a back button to take us to the previous page. Like in the previous screen, we make a back button in our custom header. <br />
**Code** <br />
<pre class="line-numbers"><code class="language-jsx"><code class="language-jsx">
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from 'native-base';
export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: &lt;Header>
               &lt;Left>
                  &lt;Button transparent onPress= {()=> navigation.goBack()}>
                      &lt;Icon name='arrow-back' />
                  &lt;/Button>
                &lt;/Left>
                &lt;Body>
                    &lt;Title>Profile&lt;/Title>
                &lt;/Body>
                &lt;Right />
            &lt;/Header>,
          });
          render() {
            return (
              &lt;Container>
                &lt;Content>
                  &lt;Card>
                    &lt;CardItem>
                      &lt;Body>
                        &lt;Text>Oops!! Looks like Lucy is private person&lt;/Text>
                      &lt;/Body>
                    &lt;/CardItem>
                  &lt;/Card>
                &lt;/Content>
              &lt;/Container>
            );
          }
      }
</code></pre><br />

## Finishing up

Lastly we import our **routes** component from **HomeScreen** to our **App.js** file as shown. <br />

<pre class="line-numbers"><code class="language-jsx"><code class="language-jsx">
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Picker, Button, Text } from 'native-base';
import Expo from 'expo';
import HomeScreen from './src/HomeScreen.js';
export default class AwesomeApp extends Component {
  constructor(){
    super();
    this.state={
      isReady: false
    }
  }
 async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      });
    this.setState({isReady: true});
  }
  render() {
    return (
        &lt;HomeScreen />
        )
      }
  }
</code></pre><br />
All has been taken care of now. Build and run.
