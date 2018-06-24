## swipeable-single-def-headref
#### SwipeRow

Single Swipable ListItem (Outside List)

![Preview ios swipeable-single-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/list-swipe-single-row.gif)
![Preview android swipeable-single-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/list-swipe-single-row.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';
​export default class SwipeRowExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content scrollEnabled={false}>
          &lt;SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              &lt;Button success onPress={() => alert('Add')}>
                &lt;Icon active name="add" />
              &lt;/Button>
            }
            body={
              &lt;View>
                &lt;Text>SwipeRow Body Text&lt;/Text>
              &lt;/View>
            }
            right={
              &lt;Button danger onPress={() => alert('Trash')}>
                &lt;Icon active name="trash" />
              &lt;/Button>
            }
          />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

**Configuration**

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
                <td>body</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Native Base or React Native component(Visible Component). 
                </td>
            </tr>
            <tr>
                <td>left</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Native Base or React Native component(Left hidden Component).
                </td>
            </tr>
            <tr>
                <td>right</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Native Base or React Native component(Right hidden Component).
                </td>
            </tr>
            <tr>
                <td>leftOpenValue</td>
                <td> - </td>
                <td> number </td>
                <td>
                    TranslateX value for opening the row to the left (<i>Positive Value</i>)
                </td>
            </tr>
            <tr>
                <td>rightOpenValue</td>
                <td> - </td>
                <td> number </td>
                <td>
                    TranslateX value for opening the row to the right (<i>Negative Value</i>)
                </td>
            </tr>
            <tr>
                <td>stopLeftSwipe</td>
                <td> - </td>
                <td> number </td>
                <td>
                    TranslateX value to stop the row to the swipe left (<i>Positive number</i>)
                </td>
            </tr>
            <tr>
                <td>stopRightSwipe</td>
                <td> - </td>
                <td> number </td>
                <td>
                    TranslateX value to stop the row to the swipe left (<i>Negative number</i>)
                </td>
            </tr>
            <tr>
                <td>swipeToOpenPercent</td>
                <td> 50% </td>
                <td> % </td>
                <td>
                    Swipe percent of left/right component's width to trigger the row opening
                </td>
            </tr>
            <tr>
                <td>disableLeftSwipe</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Disable ability to swipe the row left
                </td>
            </tr>
            <tr>
                <td>disableRightSwipe</td>
                <td> false </td>
                <td> boolean </td>
                <td>
                    Disable ability to swipe the row right
                </td>
            </tr>
            <tr>
                <td>onRowOpen, onRowClose</td>
                <td> - </td>
                <td> Function </td>
                <td>
                    Callback function which triggers when a swipe row is animating open/close
                </td>
            </tr>
            <tr>
                <td>style</td>
                <td> - </td>
                <td> style object </td>
                <td>
                    Style body
                </td>
            </tr>
        </tbody>
    </table><br />
