## date-picker-def-headref
## Date Picker

![Preview ios date-picker-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/ios/date-picker.gif)
![Preview android date-picker-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/android/date-picker.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, DatePicker } from 'native-base';
export default class DatePickerExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />