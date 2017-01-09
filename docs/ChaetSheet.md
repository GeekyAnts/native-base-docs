<div class="docs-desc">
        <h1>NativeBase Cheat Sheet</h1>

        <h3>Basic Layout</h3>
        <table width="80%" class="table table-hover">
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Description</th>
                    <th>Replacing Component</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>&lt;Container></td>
                    <td>Complete section of screen</td>
                    <td>React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>&lt;Header></td>
                    <td>Header or Navbar of screen</td>
                    <td>React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>&lt;Content></td>
                    <td>Body element of screen</td>
                    <td>React Native
                        <a href="https://github.com/APSL/react-native-keyboard-aware-scroll-view">
                            &lt;KeyboardAwareScrollView>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table><br />

        <h3>Components</h3>
        <table width="100%" class="table table-hover">
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Description</th>
                    <th>Replacing Component</th>
                </tr>
            </thead>
            <tbody>

                <!-- Badge -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Badge></td>
                    <td>
                        Numerical indicators used to notify an element<br />
                    </td>
                    <td>React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>backgroundColor</li>
                        </ul>
                    </td>
                    <td>background color for badge</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>color</li>
                        </ul>
                    </td>
                    <td>text color for badge</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>fontSize</li>
                        </ul>
                    </td>
                    <td>text font size for badge</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>width</li>
                        </ul>
                    </td>
                    <td>dimension of badge</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>lineHeight</li>
                        </ul>
                    </td>
                    <td>padding on top of badge text</td>
                    <td></td>
                </tr>


                <!-- Button -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Button></td>
                    <td>Submit or reset a form, Navigate etc</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">
                            &lt;TouchableOpacity>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>style</li>
                        </ul>
                    </td>
                    <td>button style</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>textStyle</li>
                        </ul>
                    </td>
                    <td>button text style</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>block</li>
                        </ul>
                    </td>
                    <td>block level button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>rounded</li>
                        </ul>
                    </td>
                    <td>slightly round shaped edges</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>transparent</li>
                        </ul>
                    </td>
                    <td>renders child element of button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>small</li>
                        </ul>
                    </td>
                    <td>small size button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>large</li>
                        </ul>
                    </td>
                    <td>large size button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>iconLeft</li>
                        </ul>
                    </td>
                    <td>aligns icon to the left in button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>iconRight</li>
                        </ul>
                    </td>
                    <td>aligns icon to the right in button</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>disabled</li>
                        </ul>
                    </td>
                    <td>disables click option for button</td>
                    <td></td>
                </tr>




                <!-- Card -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Card></td>
                    <td>Flexible and extensible content container</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>


                <!-- CardItem -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;CardItem></td>
                    <td>Child component of &lt;Card></td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">
                            &lt;TouchableOpacity>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>header</li>
                        </ul>
                    </td>
                    <td>renders as header and footer for cards</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>cardBody</li>
                        </ul>
                    </td>
                    <td>body section for card</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>note</li>
                        </ul>
                    </td>
                    <td>sub caption for card header and footer</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>button</li>
                        </ul>
                    </td>
                    <td>navigate on click of a card item</td>
                    <td></td>
                </tr>





                <!-- Check Box-->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;CheckBox></td>
                    <td>Multiple selections from a set of choices</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">
                            &lt;TouchableOpacity>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>checked</li>
                        </ul>
                    </td>
                    <td>represents the state value of an item</td>
                    <td></td>
                </tr>



                <!-- Deck Swiper -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;DeckSwiper></td>
                    <td>Swipes the card to left and right</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>



                <!-- FABs -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Fab></td>
                    <td>Provides special type of promoted action.</td>
                    <td>
                        React Native
                        <a href="http://facebook.github.io/react-native/docs/animated.html">
                            &lt;Animated>
                        </a>
                    </td>
                </tr>



                <!-- Footer Tabs -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;FooterTab></td>
                    <td>Tabs at Footer which is horizontal region of buttons or links for navigation.</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>



                <!-- Icon -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Icon></td>
                    <td>High definition icons and pixel ideal fonts</td>
                    <td>
                        React Native Vector Icons
                        <a href="https://github.com/oblador/react-native-vector-icons#icon-component">
                            &lt;Icon>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>name</li>
                        </ul>
                    </td>
                    <td>name of icon</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>color</li>
                        </ul>
                    </td>
                    <td>color for icon</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>fontSize</li>
                        </ul>
                    </td>
                    <td>size of icon</td>
                    <td></td>
                </tr>




                <!-- InputGroup -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;InputGroup></td>
                    <td>Combines group of components for a textbox</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>borderType</li>
                        </ul>
                    </td>
                    <td>wraps the textbox with predefined border options.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>iconRight</li>
                        </ul>
                    </td>
                    <td>icon in the input text box appears to the right.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>success</li>
                        </ul>
                    </td>
                    <td>border color of textbox for valid input.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>error</li>
                        </ul>
                    </td>
                    <td>border color of textbox for invalid input.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>disabled</li>
                        </ul>
                    </td>
                    <td>disables inputting data.</td>
                    <td></td>
                </tr>



                <!-- Input -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Input></td>
                    <td>Component for inputting text </td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/textinput.html">
                            &lt;TextInput>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>placeholder</li>
                        </ul>
                    </td>
                    <td>string that will be rendered before text input has been entered.</td>
                    <td></td>
                </tr>



                <!-- Layout -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Grid></td>
                    <td>Cellular structure composed of Rows and Cols</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Col></td>
                    <td>Column component for grid</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Row></td>
                    <td>Row component for grid</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>



                <!-- List -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;List></td>
                    <td>Specifying lists of information</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>dataArray</li>
                        </ul>
                    </td>
                    <td>array of data chunks to render iteratively.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>renderRow</li>
                        </ul>
                    </td>
                    <td>
                        Callback which takes a chunk of data from dataArray and returns as a component.
                    </td>
                    <td></td>
                </tr>


                <!-- ListItem -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;ListItem></td>
                    <td>Child component of &lt;List></td>
                    <td>
                        React Native
                        <a href="http://facebook.github.io/react-native/docs/touchableopacity.html">
                            &lt;TouchableOpacity>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>itemDivider</li>
                        </ul>
                    </td>
                    <td>organize and group the list items</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>note</li>
                        </ul>
                    </td>
                    <td>sub caption for List Item.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>iconLeft</li>
                        </ul>
                    </td>
                    <td>aligns icon to the left of ListeItem.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>iconRight</li>
                        </ul>
                    </td>
                    <td>aligns icon to the right of ListeItem.</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>button</li>
                        </ul>
                    </td>
                    <td>navigate on click of a list item</td>
                    <td></td>
                </tr>




                <!--Picker-->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Picker></td>
                    <td>Native picker component</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/picker.html">
                            &lt;Picker>
                        </a>
                    </td>
                </tr>








                <!--Radio Button-->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Radio></td>
                    <td>Single selection from a set of choices</td>
                    <td>
                        React Native
                        <a href="http://facebook.github.io/react-native/docs/touchableopacity.html">
                            &lt;TouchableOpacity>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>selected</li>
                        </ul>
                    </td>
                    <td>represents the state value of an item</td>
                    <td></td>
                </tr>




                <!--Search bar-->
                <tr style="background-color: #f5f5f5">
                    <td>Searchbar</td>
                    <td>Includes search bar in the &lt;Header> section</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/view.html">
                            &lt;View>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>searchBar</li>
                        </ul>
                    </td>
                    <td>wraps the search bar with predefined border options</td>
                    <td></td>
                </tr>




                <!-- Spinner -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Spinner></td>
                    <td>Page loader</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/activityindicator.html">
                            &lt;ActivityIndicator>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>color</li>
                        </ul>
                    </td>
                    <td>color of Spinner.</td>
                    <td></td>
                </tr>



                <!-- Tabs -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Tabs></td>
                    <td>Horizontal page swiper</td>
                    <td>
                        react-native-scrollable-tab-view
                        <a href="https://github.com/brentvatne/react-native-scrollable-tab-view">
                            &lt;ScrollableTabView>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>tabLabel</li>
                        </ul>
                    </td>
                    <td>name for tabs</td>
                    <td></td>
                </tr>




                <!-- Thumbnail -->
                <tr style="background-color: #f5f5f5">
                    <td>&lt;Thumbnail></td>
                    <td>Showcase an image with variuos dimensions and shapes</td>
                    <td>
                        React Native
                        <a href="https://facebook.github.io/react-native/docs/image.html">
                            &lt;Image>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>source</li>
                        </ul>
                    </td>
                    <td>size of icon</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>square</li>
                        </ul>
                    </td>
                    <td>shape of thumbnail</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>size</li>
                        </ul>
                    </td>
                    <td>dimension of thumbnail</td>
                    <td></td>
                </tr>




                <!-- Typography -->
                <tr style="background-color: #f5f5f5">
                    <td>Typography</td>
                    <td>Heading Tags</td>
                    <td>
                        React Native
                        <a href="http://facebook.github.io/react-native/docs/text.html">
                            &lt;Text>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>H1</li>
                        </ul>
                    </td>
                    <td>font-size: 27</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>H2</li>
                        </ul>
                    </td>
                    <td>font-size: 24</td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>H3</li>
                        </ul>
                    </td>
                    <td>font-size: 21</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
</div>
