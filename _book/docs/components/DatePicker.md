## date-picker-def-headref
## Date Picker

![Preview ios date-picker-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.2/screenshots/ios/date-picker.gif)
![Preview android date-picker-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.2/screenshots/android/date-picker.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
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
            textStyle={&#123; color: "green" }}
            placeHolderTextStyle={&#123; color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            &lt;Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            &lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
