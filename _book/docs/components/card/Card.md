##card-def-headref
# Card

Card is a pure [NativeBase](https://nativebase.io/) component.<br />
Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. <br />
[NativeBase](https://nativebase.io/) Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.

![Preview ios card-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/basicCard.png)
![Preview android card-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/basicCard.png)

  **Contents:**
* [Card Header and Footer](Components.md#card-headfoot-headref)
* [Card List](Components.md#card-list-headref)
* [Card Image](Components.md#card-image-headref)
* [Card Showcase](Components.md#card-showcase-headref)

*Genertal Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
export default class CardExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card>
                        &lt;CardItem>
                          &lt;Body>
                            &lt;Text>
                                //Your text here
                            &lt;/Text>
                          &lt;/Body>
                        &lt;/CardItem>
                    &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

* <code>Card</code>: This component adds a box-shadow by default. Also provides default spacing and alignment between cards.
* <code>CardItem</code>: This is the child component of <code>Card</code>. Works very similar to the list items of list. Card takes any number of CardItem.
* CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon.
* *Replacing Component for Card: [React Native](https://facebook.github.io/react-native/)  [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*
* *Replacing Component for CardItem: [React Native](https://facebook.github.io/react-native/)  [<code>&lt;TouchableOpacity></code>](https://facebook.github.io/react-native/docs/touchableopacity.html)*

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
                <td>button</td>
                <td> - </td>
                <td> - </td>
                <td>To navigate on click of a card item.</td>
            </tr>
            <tr>
                <td>cardBody</td>
                <td> - </td>
                <td> - </td>
                <td>Defines section for body of card. The child components are rendered with proper spacing and alignment.</td>
            </tr>
            <tr>
                <td>footer</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Displays text as footer for cards
                </td>
            </tr>
            <tr>
                <td>header</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Displays text as header for cards
                </td>
            </tr>
            <tr>
                <td>transparent</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Removes card shadow from iOS and elevation from android
                </td>
            </tr>
            <tr>
                <td>bordered</td>
                <td> false </td>
                <td> true false </td>
                <td>
                    To add border to the cardItems
                </td>
            </tr>
        </tbody>
    </table><br />
