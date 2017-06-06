# FlatList Sticky Header Example
This is a simple example of Sticky Headers in [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) Component of [ReactNative](https://facebook.github.io/react-native/) made with [NativeBase](https://nativebase.io/) and [Create React Native App](https://github.com/react-community/create-react-native-app) tool. Detailed Setup instructions can be found below. <br />
<br />

# Find Full Code [here](https://github.com/GeekyAnts/native-base-example-flatlist-stickyHeaders)
<br />
![Sticky Header](https://docs.nativebase.io/docs/assets/FlatListSticky.gif) <br />

## Aim
We aim to create a simple App that implements sticky headers as shown in the GIF above. <br />

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

2. **NativeBase** <br />
<code>
npm install native-base --save
</code> <br />
**Important: additional steps are required to import fonts from native base. Refer to [this](./GetStarted.md#Setup_with_CRNA)**
**Configure all dependencies by running the following command** <br />
<code>
react-native link
</code> <br />

## Setting Things Up

With all required Libraries installed, we can start with some real coding. In the root of your project create a folder <code>src</code>. Inside this folder we create a file by the name of <code>StickyHeader.js</code>. <br />
**Note: You might have some problems setting up the project due to version conflicts, make sure you use same versions as mentioned below in the <code>package.json</code>** <br />
By the end of all this your project structure and <code>package.json</code> file should look something like this. <br />
![StickyHeader Package](https://docs.nativebase.io/docs/assets/FlatListStickyPackage.png) <br />

## Making our List Component
In your <code>StickyHeader.js</code> inside <code>src</code> folder add the following code. <br />
**Code src/StickyHeader.js**
<pre class="line-numbers"><code class="language-jsx">
import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
      { name: "Movies", header: true },
      { name: "Interstellar", header: false },
      { name: "Dark Knight", header: false },
      { name: "Pop", header: false },
      { name: "Pulp Fiction", header: false },
      { name: "Burning Train", header: false },
      { name: "Music", header: true },
      { name: "Adams", header: false },
      { name: "Nirvana", header: false },
      { name: "Amrit Maan", header: false },
      { name: "Oye Hoye", header: false },
      { name: "Eminem", header: false },
      { name: "Places", header: true },
      { name: "Jordan", header: false },
      { name: "Punjab", header: false },
      { name: "Ludhiana", header: false },
      { name: "Jamshedpur", header: false },
      { name: "India", header: false },
      { name: "People", header: true },
      { name: "Jazzy", header: false },
      { name: "Appie", header: false },
      { name: "Baby", header: false },
      { name: "Sunil", header: false },
      { name: "Arrow", header: false },
      { name: "Things", header: true },
      { name: "table", header: false },
      { name: "chair", header: false },
      { name: "fan", header: false },
      { name: "cup", header: false },
      { name: "cube", header: false }
      ],
      stickyHeaderIndices: []
    };
  }
  componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr
    });
  }
  renderItem = ({ item }) => {
    if (item.header) {
      return (
        &lt;ListItem itemDivider>
          &lt;Left />
          &lt;Body style=&lcub;&lcub; marginRight: 40 }}>
            &lt;Text style=&lcub;&lcub; fontWeight: "bold" }}>
              {item.name}
            &lt;/Text>
          &lt;/Body>
          &lt;Right />
        &lt;/ListItem>
      );
    } else if (!item.header) {
      return (
        &lt;ListItem style=&lcub;&lcub; marginLeft: 0 }}>
          &lt;Body>
            &lt;Text>{item.name}&lt;/Text>
          &lt;/Body>
        &lt;/ListItem>
      );
    }
  };
  render() {
    return (
      &lt;FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      />
    );
  }
}
</code></pre><br />

**Explained** <br />
1. We import our [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) component from [ReactNative](https://facebook.github.io/react-native/). Also we take care of a few other imports from [NativeBase](https://nativebase.io/) as we will require them further.
2. Next we are **hard-coding** our app data in our App **state**. Our data here just has a name and a boolean variable for header.
3. Next we fetch the **indices** of all the headers we would like to **stick** in our List. Notice how we have done that in the **componentWillMount** method.
4. In our **render** method, we have simply passed our **FlatList** Component with data provided. **renderItem** is called each time a new item appears in our List data.
5. **keyExtractor** prop is required to properly differentiate between data items using a unique **key**. We have used the names here.
6. **stickyHeaderIndices** will take an array of all the indices we want to stick. We pass the array we previously populated in **3**.
7. Lastly, in the **renderItem** method we include a check for header items and children items. Accordingly we show different styles for each.

## Finishing Up
We have successfully made our List component. Go ahead and include it in our **App.js** file. Build and run.
