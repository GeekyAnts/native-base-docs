# Sticky Header Example
This is a simple example of Sticky Headers in List Component of [NativeBase](https://nativebase.io/) made with [Native ListView](https://facebook.github.io/react-native/docs/listview.html), [NativeBase](https://nativebase.io/) and [Create React Native App](https://github.com/react-community/create-react-native-app) tool. Detailed Setup instructions can be found below. <br />
<br />
**Note:** Sticky Header support is currently unavailable for android in [React Native ListView](https://facebook.github.io/react-native/docs/listview.html). It will soon be available, check out [this issue](https://github.com/facebook/react-native/issues/2700). <br />
<br />
# Find Full Code [here](https://github.com/GeekyAnts/native-base-sticky-header)
<br />
![Sticky Header](https://docs.nativebase.io/docs/assets/StickyHeader.gif) <br />

## Aim
We aim to create a simple App that implements sticky headers as shown in the GIF above. <br />

## Installation

1. **Create React Native App**: Use [CRNA](https://github.com/react-community/create-react-native-app) tool to create an App like this <br />
<pre><code>$ npm install -g create-react-native-app
$ create-react-native-app my-app
$ cd my-app/
$ npm start</code></pre>

2. **NativeBase** <br />
<pre><code>npm install native-base@2 --save</code></pre>

3. **Configure dependencies**<br />
<pre><code>react-native link</code></pre>

**Important:** Additional steps are required to import fonts from native base. Refer to [this](./GetStarted.md#Setup_with_CRNA)

## Setting Things Up

With all required Libraries installed, we can start with some real coding. In the root of your project create a folder <code>src</code>. Inside this folder we create a file by the name of <code>Application.js</code>. <br />
**Note:** You might have some problems setting up the project due to version conflicts, make sure you use same versions as mentioned below in the <code>package.json</code> <br />
By the end of all this your project structure and <code>package.json</code> file should look something like this. <br />
![StickyHeader Package](https://docs.nativebase.io/docs/assets/StickyPackage.png) <br />

## Making our List Component
In your <code>Application.js</code> inside <code>src</code> folder add the following code.

**Code src/Application.js**
<pre class="line-numbers"><code class="language-jsx">import React from 'react';
import Expo from 'expo';
import { ListView, View } from 'react-native';
import { List, ListItem, Container, Content, Header, Title, Body, Text } from 'native-base';
export default class Application extends React.Component {
  constructor(){
    super();
    this.state= {
      isReady: false,
      dataSource : new ListView.DataSource({
        rowHasChanged           : (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged : (s1, s2) => s1 !== s2
      })
    };
  }
  populateList() {
    this.setState({
      dataSource : this.state.dataSource.cloneWithRowsAndSections([
        ["Movies","Prestige","Interstellar","Dark Knight", "Neighbours"],
        ["Music","Nirvana", "Imagine Dragons", "Avicii","Maya"],
        ["Places","Agra","Jamshedpur","Delhi", "Bangalore"],
        ["Things","Car","Table","Fan", "Chair"],
        ["People","Sankho","Aditya","Himanshu", "Kuldeep"],
        ["Roads","NH-11","MG Road","Brigade Road", "Nehru Road"],
        ["Buildings","Empire State","Burj Khalifa","Caspian", "Narnia"]
      ])
    });
  }
  async componentWillMount() {
    this.populateList();
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady: true});
  }
  renderSectionHeader(sectionData, sectionID) {
    return (
      &lt;ListItem >
        &lt;Text>{sectionData[0]}&lt;/Text>
      &lt;/ListItem>
    );
  }
  renderRow(rowData, sectionID, rowID) {
    console.log(rowID,rowData,sectionID, "renderRow");
    if(rowID == 0){
      console.log(rowData, "0 rowId");
      return null;
    }
    return (
      &lt;ListItem>
        &lt;Text>{rowData}&lt;/Text>
      &lt;/ListItem>
    );
  }
  render() {
    if (!this.state.isReady) {
      return &lt;Expo.AppLoading />;
    }
    return (
      &lt;Container>
        &lt;Header>
          &lt;Body>
            &lt;Title>Sticky Headers&lt;/Title>
          &lt;/Body>
        &lt;/Header>
        &lt;List
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
        />
      &lt;/Container>
    );
  }
}</code></pre>

**Explained** <br />
- In our constructor, we initialize our state with a <code>dataSource</code> object. Use similar syntax to initialize the <code>ListView.dataSource</code>.
- <code>async componentWillMount</code> function is used to load fonts for [NativeBase](https://nativebase.io/) as mentioned in previous examples. Check out [this](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/js/setup.js) example.
- <code>populateList</code> function creates our dataSource object to be used by our list. <code>dataSource.cloneWithRowsAndSections</code> function will convert data into a ListView Map. Here we have used dummy data in a simple format, implementation can vary according data structure.
- Next we simply place our <code>List</code>(wrapper around ListView) component from [NativeBase](https://nativebase.io/) and pass data as props as shown. <br />
```
<List
  dataSource={this.state.dataSource}
  renderRow={this.renderRow}
  renderSectionHeader={this.renderSectionHeader} 
/>```
- In the <code>renderRow</code> prop we pass our defined function. <code>rowData, rowID and sectionID</code> are the available arguments with the function. <br /> We simple return a React component with respective data as shown. <br /> For <code>rowID == 0</code> we return null because it is the section header element. We do not want to display it as a list item.
- Similarly we implemented <code>renderSectionHeader</code> function, returning section headers, as shown above. <br />

## Wrapping Up

With our component made, we simply import the component in our <code>App.js</code> file and place it inside the render funtion. <br />
Build and run.
