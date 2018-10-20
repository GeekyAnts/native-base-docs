## date-picker-def-headref
## Date Picker

![Preview ios date-picker-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/date-picker.gif)
![Preview android date-picker-def-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/android/date-picker.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            {% raw %}textStyle={{ color: "green" }}{% endraw %}
            {% raw %}placeHolderTextStyle={{ color: "#d3d3d3" }}{% endraw %}
            onDateChange={() => {this.setDate}}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-date-picker
        :defaultDate="defaultDate"
        :minimumDate="minimumDate"
        :maximumDate="maximumDate"
        :modalTransparent="false"
        animationType="fade"
        androidMode="default"
        placeHolderText="Select date"
        :textStyle="{ color: 'green' }"
        :placeHolderTextStyle="{ color: '#d3d3d3' }"
        :onDateChange="setDate"
      />
      <nb-text>
        {% raw %}Date: {{chosenDate.toString().substr(4, 12)}}{% endraw %}
      </nb-text>
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
export default {
  data: function() {
    return {
      defaultDate: new Date('2018-06-04'),
      minimumDate: new Date('2018-01-01'),
      maximumDate: new Date('2018-12-31'),
      chosenDate:  new Date()
    };
  },
  methods: {
    setDate: function(newDate) {
      this.chosenDate = newDate;
    }
  }
};
</script>
{%- endcodetabs %}
<br />
