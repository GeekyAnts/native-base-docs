# Redux Form Example
Redux Form is a sample app made with [React Native](https://github.com/facebook/react-native), [Redux](https://github.com/reactjs/react-redux), and [Redux-Form](https://github.com/erikras/redux-form) and [NativeBase](https://nativebase.io/) as the main Libraries at work here.<br />
This is a simple step-by-step tutorial to get familiar with basic concepts of [Redux](https://github.com/reactjs/react-redux)(used for state management), and [[Redux-Form](https://github.com/erikras/redux-form). This simple App should get you familiar with these Libraries and their use case. <br />
**Find Full code [here](https://github.com/GeekyAnts/native-base-example-redux-form)** <br />
![ReduxForm Gif](../docs/assets/ReduxForm.gif)
<br />

## Aim

We aim to create a single page application that uses [Redux-Form](https://github.com/erikras/redux-form) and has validation functionality.

## Installation


1. **SetUp React Native Project** <br /> SetUp a React Native project. Refer [this](https://facebook.github.io/react-native/docs/getting-started.html) for more information about setting up a React Native project. <br />
2. **Installing Libraries** <br /> With a React Native project SetUp, We can now install all required Libraries as follows. <br />
a. **Redux** and **react-redux** <br />
In your terminal enter the following <br />
<code>
npm install redux react-redux --save
</code> <br />
b. **redux-form** <br />
Do this
<code>
npm install --save redux-form
</code> <br />
c. **NativeBase** <br />
<code>
npm install native-base --save
</code> <br />
**Configure all dependencies by running the following command** <br />
<code>
react-native link
</code> <br />
**Note: You might have some problems setting up the project due to version conflicts, make sure you use same versions as mentioned below in the <code>package.json</code>**
By the end of Installation, your package.json file should look something like this.<br />
![Redux-Form package](../docs/assets/ReduxFormPackage.png) <br />

## SetUp
Create a **src** folder at root of your project. Create folders **compnoents** **reducers** and one file **Application.js** for our App. <br />

### Reducers
Create a file **index.js** inside reducers folder. Paste the following code. <br />
**Code src/reducers/index.js**
<pre class="line-numbers"><code class="language-jsx">
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducers = {
  form: formReducer
}
const allReducers= combineReducers(reducers);
export default allReducers;
</code></pre><br />

### Component
Create a file **SimpleForm.js** inside <code>components</code> folder. <br />
**Code src/components/SimpleForm.js**
<pre class="line-numbers"><code class="language-jsx">
import React , { Component } from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
return error;
};
class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }
  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady: true});
    }
  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( &lt;Item error= {hasError}>
                        &lt;Input {...input}/>
                        {hasError ? &lt;Text>{error}&lt;/Text> : &lt;Text />}
                    &lt;/Item> )
  }
  render(){
     const { handleSubmit, reset } = this.props;
     if (!this.state.isReady) {
      return &lt;Expo.AppLoading />;
    }
  return (
    &lt;Container>
    &lt;Header>
        &lt;Body>
          &lt;Title>Redux Form&lt;/Title>
        &lt;/Body>
    &lt;/Header>
    &lt;Content padder>
      &lt;Field name="email" component={this.renderInput} />
      &lt;Field name="name" component={this.renderInput} />
      &lt;Button block primary onPress= {reset}>
      &lt;Text>Submit&lt;/Text>
      &lt;/Button>
      &lt;/Content>
    &lt;/Container>
  )
}
}
export default reduxForm({
  form: 'test',
  validate
})(SimpleForm)
</code></pre><br />

**Explained** <br />
1. We load fonts using <code>loadAsync</code> as defined in previous examples.
2. Note how we have added validate functionality in the end using <code>reduxForm</code> decorator.
3. Conditions added to validate are user defined.

### Application
**Code src/Application.js** <br />
<pre class="line-numbers"><code class="language-jsx">import React , { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SimpleForm from './components/SimpleForm.js';
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
    &lt;Provider store= {store}>
    &lt;SimpleForm />
    &lt;/Provider>
  )
  }
}
</code></pre><br />

**Explained** <br />
Here we import <code>allReducers</code> containing our <code>formReducer</code> and add it to our <code>store</code>. Next we simply pass our <code>store</code> to <code>Provider</code> component. <br />

### Finishing Up
Finally add the <code>Application</code> component in our <code>App.js</code> as follows <br />
**Code App.js**
<pre class="line-numbers"><code class="language-jsx">import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Application from './src/Application.js';
import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { TextInput, TouchableOpacity } from 'react-native';
const store = createStore(allReducers);
export default class App extends React.Component {
  render() {
    return (
    &lt;Application />
    );
  }
}</code></pre><br />
All done. Our App must work now. It looks awesome(unicorn alert). Build and run for magic.
