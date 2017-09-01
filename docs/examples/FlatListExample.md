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
<pre><code>$ npm install -g create-react-native-app
$ create-react-native-app my-app
$ cd my-app/
$ npm start</code></pre>

2. **NativeBase** <br />
<pre><code>npm install native-base --save</code></pre>

3. **Configure dependencies**<br />
<pre><code>react-native link</code></pre>

**Note:** additional steps are required to import fonts from native base. Refer to [this](./GetStarted.md#Setup_with_CRNA)

## Setting Things Up

With all required Libraries installed, we can start with some real coding. In the root of your project create a folder <code>src</code>. Inside this folder we create a file by the name of <code>StickyHeader.js</code>. <br />
**Note:** You might have some problems setting up the project due to version conflicts, make sure you use same versions as mentioned below in the <code>package.json</code> <br />
By the end of all this your project structure and <code>package.json</code> file should look something like this. <br />
![StickyHeader Package](https://docs.nativebase.io/docs/assets/FlatListStickyPackage.png) <br />

## Making our List Component
In your <code>StickyHeader.js</code> inside <code>src</code> folder add the following code. <br />
**Code src/StickyHeader.js**
<pre class="line-numbers"><code class="language-jsx">import React from "react";
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
    const stickyHeaderIndices = this.state.data
      .map(({ header }, i) => (header ? i : false))
      .filter((i) => i !== false);
    this.setState({ stickyHeaderIndices });
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
}</code></pre>

**Explained** <br />
- We import our [FlatList](https://facebook.github.io/react-native/docs/flatlist.html) component from [ReactNative](https://facebook.github.io/react-native/). Also we take care of a few other imports from [NativeBase](https://nativebase.io/) as we will require them further.
- Next we are **hard-coding** our app data in our App **state**. Our data here just has a name and a boolean variable for header.
- Next we fetch the **indices** of all the headers we would like to **stick** in our List. Notice how we have done that in the **componentWillMount** method.
- In our **render** method, we have simply passed our **FlatList** Component with data provided. **renderItem** is called each time a new item appears in our List data.
- **keyExtractor** prop is required to properly differentiate between data items using a unique **key**. We have used the names here.
- **stickyHeaderIndices** will take an array of all the indices we want to stick. We pass the array we previously populated in **3**.
- Lastly, in the **renderItem** method we include a check for header items and children items. Accordingly we show different styles for each.

## Finishing Up

We have successfully made our List component. Go ahead and include it in our **App.js** file. Build and run.
