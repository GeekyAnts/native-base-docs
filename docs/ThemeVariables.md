# Theme variables Cheat sheet

Cheatsheet use values from `native-base-theme/variables/platform.js`

<h3>Brand colors</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>brandPrimary</td>
            <td>color</td>
            <td>Brand primary color</td>
            <td>#007aff</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>brandInfo</td>
            <td>color</td>
            <td>Brand info color</td>
            <td>#62B1F6</td>
            <td>#62B1F6</td>
        </tr>
        <tr>
            <td>brandSuccess</td>
            <td>color</td>
            <td>Brand success color</td>
            <td>#5cb85c</td>
            <td>#5cb85c</td>
        </tr>
        <tr>
            <td>brandDanger</td>
            <td>color</td>
            <td>Brand danger color</td>
            <td>#d9534f</td>
            <td>#d9534f</td>
        </tr>
        <tr>
            <td>brandWarning</td>
            <td>color</td>
            <td>Brand warning color</td>
            <td>#f0ad4e</td>
            <td>#f0ad4e</td>
        </tr>
        <tr>
            <td>brandDark</td>
            <td>color</td>
            <td>Brand dark color</td>
            <td>#000</td>
            <td>#000</td>
        </tr>
        <tr>
            <td>brandLight</td>
            <td>color</td>
            <td>Brand light color</td>
            <td>#f4f4f4</td>
            <td>#f4f4f4</td>
        </tr>
    </tbody>
</table><br />

<h3>Badge</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>badgeBg</td>
            <td>color</td>
            <td>Badge text color</td>
            <td>#ed1727</td>
            <td>#ed1727</td>
        </tr>
        <tr>
            <td>badgeColor</td>
            <td>color</td>
            <td>Badge background color</td>
            <td>#fff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>badgePadding</td>
            <td>number</td>
            <td>Badge padding</td>
            <td>3</td>
            <td>0</td>
        </tr>
    </tbody>
</table>
<br />
<h3>Button</h3>
<table>
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
            </th>
            </tr>
    </thead>
    <tbody>
        <tr>
            <td>btnFontFamily</td>
            <td>font family</td>
            <td>Font family of button text</td>
            <td>System</td>
            <td>Roboto_medium</td>
        </tr>
        <tr>
            <td>btnDisabledBg</td>
            <td>color</td>
            <td>Disabled button background color</td>
            <td>#b5b5b5</td>
            <td>#b5b5b5</td>
        </tr>
        <tr>
            <td>buttonPadding</td>
            <td>number</td>
            <td>Button padding</td>
            <td>6</td>
            <td>6</td>
        </tr>
    </tbody>
</table>
<br/>


<h3>Card</h3>
<table>
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
            </th>
            </tr>
    </thead>
    <tbody>
        <tr>
            <td>cardDefaultBg</td>
            <td>color</td>
            <td>Background color for card item</td>
            <td>#fff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>cardBorderColor</td>
            <td>color</td>
            <td>Border color for card</td>
            <td>#ccc</td>
            <td>#ccc</td>
        </tr>
    </tbody>
</table>
<br/>

<h3>CheckBox</h3>
<table>
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
            </th>
            </tr>
    </thead>
    <tbody>
        <tr>
            <td>CheckboxRadius</td>
            <td>number</td>
            <td>Checkbox radius</td>
            <td>13</td>
            <td>0</td>
        </tr>
        <tr>
            <td>CheckboxBorderWidth</td>
            <td>number</td>
            <td>Checkbox border width</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>CheckboxPaddingLeft</td>
            <td>number</td>
            <td>Checkbox left padding</td>
            <td>4</td>
            <td>2</td>
        </tr>
        <tr>
            <td>CheckboxPaddingBottom</td>
            <td>number</td>
            <td>Checkbox bottom padding</td>
            <td>0</td>
            <td>5</td>
        </tr>
        <tr>
            <td>CheckboxIconSize</td>
            <td>number</td>
            <td>Icon size of checkbox</td>
            <td>21</td>
            <td>16</td>
        </tr>
        <tr>
            <td>CheckboxIconMarginTop</td>
            <td>number</td>
            <td>Top margin for checkbox icon</td>
            <td>undefined</td>
            <td>1</td>
        </tr>
        <tr>
            <td>CheckboxFontSize</td>
            <td>number</td>
            <td>Size of checkbox font</td>
            <td>23/0.9</td>
            <td>17</td>
        </tr>
        <tr>
            <td>DefaultFontSize</td>
            <td>number</td>
            <td>Deafault Font size</td>
            <td>17</td>
            <td>17</td>
        </tr>
        <tr>
            <td>checkboxBgColor</td>
            <td>color</td>
            <td>Background color for checkbox</td>
            <td>#039BE5</td>
            <td>#039BE5</td>
        </tr>
        <tr>
            <td>checkboxSize</td>
            <td>number</td>
            <td>Size of checkbox</td>
            <td>20</td>
            <td>20</td>
        </tr>
        <tr>
            <td>checkboxTickColor</td>
            <td>color</td>
            <td>Checkbox tick color</td>
            <td>#fff</td>
            <td>#fff</td>
        </tr>
    </tbody>
</table>
<br/>

<h3>Font</h3>
<table>
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
            </th>
            </tr>
    </thead>
    <tbody>
        <tr>
            <td>fontFamily</td>
            <td>font family</td>
            <td>text font family</td>
            <td>System</td>
            <td>Roboto</td>
        </tr>
        <tr>
            <td>fontSizeBase</td>
            <td>number</td>
            <td>text font size</td>
            <td>15</td>
            <td>15</td>
        </tr>
    </tbody>
</table>
<br/>


<h3>Footer</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>footerHeight</td>
            <td>number</td>
            <td>Height of footer</td>
            <td>55/89</td>
            <td>55</td>
        </tr>
        <tr>
            <td>footerDefaultBg</td>
            <td>color</td>
            <td>Background color for footer</td>
            <td>#F8F8F8</td>
            <td>#F8F8F8</td>
        </tr>
        <tr>
            <td>footerPaddingBottom</td>
            <td>number</td>
            <td>Bottom padding for footer</td>
            <td>0</td>
            <td>0</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Footer Tab</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tabBarTextColor</td>
            <td>color</td>
            <td>Text color of tab</td>
            <td>#6b6b6b</td>
            <td>#b3c7f9</td>
        </tr>
        <tr>
            <td>tabBarTextSize</td>
            <td>number</td>
            <td>Font size of tab</td>
            <td>14</td>
            <td>11</td>
        </tr>
        <tr>
            <td>activeTab</td>
            <td>color</td>
            <td>-</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>sTabBarActiveTextColor</td>
            <td>color</td>
            <td>-</td>
            <td>#007aff</td>
            <td>#007aff</td>
        </tr>
        <tr>
            <td>tabBarActiveTextColor</td>
            <td>color</td>
            <td>Text color of active tab</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>tabActiveBgColor</td>
            <td>color</td>
            <td>Background color of active tab</td>
            <td>#cde1f9</td>
            <td>#3F51B5</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Header</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>toolbarBtnColor</td>
            <td>color</td>
            <td>Button color in header</td>
            <td>#F8F8F8</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>toolbarDefaultBg</td>
            <td>color</td>
            <td>Background color for header</td>
            <td>#F8F8F8</td>
            <td>#F8F8F8</td>
        </tr>
        <tr>
            <td>toolbarHeight</td>
            <td>number</td>
            <td>Height of header</td>
            <td>64/89</td>
            <td>56</td>
        </tr>
        <tr>
            <td>toolbarSearchIconSize</td>
            <td>number</td>
            <td>Icon size of header search icon</td>
            <td>20</td>
            <td>23</td>
        </tr>
        <tr>
            <td>toolbarInputColor</td>
            <td>number</td>
            <td>Input color of header</td>
            <td>#CECDD2</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>searchBarHeight</td>
            <td>number</td>
            <td>Height of search bar</td>
            <td>30</td>
            <td>40</td>
        </tr>
        <tr>
            <td>searchBarInputHeight</td>
            <td>number</td>
            <td>Height of search bar input</td>
            <td>30</td>
            <td>50</td>
        </tr>
        <tr>
            <td>toolbarBtnTextColor</td>
            <td>color</td>
            <td>Button text color of header</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>toolbarDefaultBorder</td>
            <td>color</td>
            <td>Border color of header</td>
            <td>#a7a6ab</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>iosStatusbar</td>
            <td>string</td>
            <td>Theme of iOS status bar</td>
            <td>dark-content</td>
            <td>light-content</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Icon</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>iconFamily</td>
            <td>string</td>
            <td>Icon Family</td>
            <td>Ionicons</td>
            <td>Ionicons</td>
        </tr>
        <tr>
            <td>iconFontSize</td>
            <td>number</td>
            <td>Size of icon</td>
            <td>30</td>
            <td>28</td>
        </tr>
        <tr>
            <td>iconHeaderSize</td>
            <td>number</td>
            <td>-</td>
            <td>33</td>
            <td>24</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Input</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>inputFontSize</td>
            <td>number</td>
            <td>Font size of input text</td>
            <td>17</td>
            <td>17</td>
        </tr>
        <tr>
            <td>inputBorderColor</td>
            <td>color</td>
            <td>Texbox border color</td>
            <td>#D9D5DC</td>
            <td>#D9D5DC</td>
        </tr>
        <tr>
            <td>inputSuccessBorderColor</td>
            <td>color</td>
            <td>Textbox border color with success prop</td>
            <td>#2b8339</td>
            <td>#2b8339</td>
        </tr>
        <tr>
            <td>inputErrorBorderColor</td>
            <td>color</td>
            <td>Textbox border color with error prop</td>
            <td>#ed2f2f</td>
            <td>#ed2f2f</td>
        </tr>
        <tr>
            <td>inputHeightBase</td>
            <td>number</td>
            <td>Height of input</td>
            <td>50</td>
            <td>50</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Line height</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>btnLineHeight</td>
            <td>number</td>
            <td>Line height of text in button</td>
            <td>19</td>
            <td>19</td>
        </tr>
        <tr>
            <td>lineHeightH1</td>
            <td>number</td>
            <td>Line height of H1</td>
            <td>32</td>
            <td>32</td>
        </tr>
        <tr>
            <td>lineHeightH2</td>
            <td>number</td>
            <td>Line height of H2</td>
            <td>27</td>
            <td>27</td>
        </tr>
        <tr>
            <td>lineHeightH3</td>
            <td>number</td>
            <td>Line height of H3</td>
            <td>22</td>
            <td>22</td>
        </tr>
        <tr>
            <td>lineHeight</td>
            <td>number</td>
            <td>Default line height</td>
            <td>20</td>
            <td>24</td>
        </tr>
    </tbody>
</table>
<br />

<h3>List</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>listBg</td>
            <td>color</td>
            <td>Background color of list</td>
            <td>transparent</td>
            <td>transparent</td>
        </tr>
        <tr>
            <td>listBorderColor</td>
            <td>color</td>
            <td>Border color of list</td>
            <td>#c9c9c9</td>
            <td>#c9c9c9</td>
        </tr>
        <tr>
            <td>listDividerBg</td>
            <td>color</td>
            <td>Divider color of list </td>
            <td>#f4f4f4</td>
            <td>#f4f4f4</td>
        </tr>
        <tr>
            <td>listBtnUnderlayColor</td>
            <td>color</td>
            <td>-</td>
            <td>#DDD</td>
            <td>#DDD</td>
        </tr>
        <tr>
            <td>listItemPadding</td>
            <td>color</td>
            <td>Padding for list item</td>
            <td>10</td>
            <td>12</td>
        </tr>
        <tr>
            <td>listNoteColor</td>
            <td>color</td>
            <td>Color of note text</td>
            <td>#808080</td>
            <td>#808080</td>
        </tr>
        <tr>
            <td>listNoteSize</td>
            <td>color</td>
            <td>Size of note text</td>
            <td>13</td>
            <td>13</td>
        </tr>
        <tr>
            <td>listItemSelected</td>
            <td>color</td>
            <td>Color of Text and Icons when ListItem is selected</td>
            <td>13</td>
            <td>13</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Radio Button</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>radioBtnSize</td>
            <td>number</td>
            <td>Size of radio button</td>
            <td>25</td>
            <td>23</td>
        </tr>
        <tr>
            <td>radioSelectedColorAndroid</td>
            <td>color</td>
            <td>Color of selected radio button</td>
            <td>-</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>radioBtnLineHeight</td>
            <td>number</td>
            <td>Line height of radio button</td>
            <td>29</td>
            <td>24</td>
        </tr>
    </tbody>
</table>
<br />
<h3>Segment</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>segmentBackgroundColor</td>
            <td>color</td>
            <td>Background color of segment</td>
            <td>#F8F8F8</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>segmentActiveBackgroundColor</td>
            <td>color</td>
            <td>Background color of active segment</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>segmentTextColor</td>
            <td>color</td>
            <td>Color of segment text</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>segmentActiveTextColor</td>
            <td>color</td>
            <td>Color of active segment text</td>
            <td>#fff</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>segmentBorderColor</td>
            <td>color</td>
            <td>Color of segment border</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>segmentBorderColorMain</td>
            <td>color</td>
            <td>-</td>
            <td>#a7a6ab</td>
            <td>#3F51B5</td>
        </tr>
    </tbody>
</table>
<br />
<h3>Spinner</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>defaultSpinnerColor</td>
            <td>color</td>
            <td>Default color for spinner</td>
            <td>#45D56E</td>
            <td>#45D56E</td>
        </tr>
        <tr>
            <td>inverseSpinnerColor</td>
            <td>color</td>
            <td>Inverse color for spinner</td>
            <td>#1A191B</td>
            <td>#1A191B</td>
        </tr>
    </tbody>
</table>
<br />
<h3>Tab</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tabDefaultBg</td>
            <td>color</td>
            <td>Default background color for tab</td>
            <td>#F8F8F8</td>
            <td>#3F51B5</td>
        </tr>
        <tr>
            <td>topTabBarTextColor</td>
            <td>color</td>
            <td>Tab text color</td>
            <td>#6b6b6b</td>
            <td>#b3c7f9</td>
        </tr>
        <tr>
            <td>topTabBarActiveTextColor</td>
            <td>color</td>
            <td>Active tab text color</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>topTabBarBorderColor</td>
            <td>color</td>
            <td>Border color for tab</td>
            <td>#a7a6ab</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>topTabBarActiveBorderColor</td>
            <td>color</td>
            <td>Border color for active tab</td>
            <td>#007aff</td>
            <td>#fff</td>
        </tr>
    </tbody>
</table>
<br />
<h3>Tabs</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tabBgColor</td>
            <td>color</td>
            <td>Background color for tab container</td>
            <td>#F8F8F8</td>
            <td>#F8F8F8</td>
        </tr>
        <tr>
            <td>tabFontSize</td>
            <td>number</td>
            <td>Font size of tab</td>
            <td>15</td>
            <td>15</td>
        </tr>
    </tbody>
</table>
<br />
<h3>Text</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>textColor</td>
            <td>color</td>
            <td>Text color</td>
            <td>Ionicons</td>
            <td>Ionicons</td>
        </tr>
        <tr>
            <td>inverseTextColor</td>
            <td>color</td>
            <td>Inverse text color</td>
            <td>#fff</td>
            <td>#fff</td>
        </tr>
        <tr>
            <td>noteFontSize</td>
            <td>number</td>
            <td>Font size of note text</td>
            <td>14</td>
            <td>14</td>
        </tr>
    </tbody>
</table>
<br />

<h3>Title</h3>
<table width="80%" class="table table-hover">
    <thead>
        <tr>
            <th rowspan=2>Variable</th>
            <th rowspan=2>Type</th>
            <th rowspan=2>Description</th>
            <th colspan=2>
                Platform values
                <tr>
                    <td>iOS</td>
                    <td>Android</td>
                </tr>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>titleFontfamily</td>
            <td>string</td>
            <td>Font family of title</td>
            <td>System</td>
            <td>Roboto_medium</td>
        </tr>
        <tr>
            <td>titleFontSize</td>
            <td>number</td>
            <td>Font size of title</td>
            <td>17</td>
            <td>19</td>
        </tr>
        <tr>
            <td>subTitleFontSize</td>
            <td>number</td>
            <td>Font size of subtitle</td>
            <td>12</td>
            <td>14</td>
        </tr>
        <tr>
            <td>subtitleColor</td>
            <td>color</td>
            <td>Font color of subtitle</td>
            <td>#8e8e93</td>
            <td>#FFF</td>
        </tr>
        <tr>
            <td>titleFontColor</td>
            <td>color</td>
            <td>Font color of title</td>
            <td>#000</td>
            <td>#FFF</td>
        </tr>
    </tbody>
</table>
<br />
