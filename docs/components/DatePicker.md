## date-picker-def-headref
## Date Picker

Date Picker allows the user to select a date from a time range.<br />

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
    this.setDate = this.setDate.bind(this);
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
            onDateChange={this.setDate}
            disabled={false}
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

**Configuration**<br />
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
              <td>defaultDate</td>
              <td> - </td>
              <td>Date Object</td>
              <td>Sets default date in calendar</td>
          </tr>
          <tr>
              <td>minimumDate</td>
              <td>-</td>
              <td>Date Object</td>
              <td>Sets minimum date that can be set in calendar</td>
          </tr>
          <tr>
              <td>maximumDate</td>
              <td>-</td>
              <td>Date Object</td>
              <td>Sets maximum date that can be set in calendar</td>
          </tr>
          <tr>
              <td>androidMode</td>
              <td>-</td>
              <td>string</td>
              <td>can take either of values 'default','calendar','spinner'</td>
          </tr>
          <tr>
              <td>animationType</td>
              <td>-</td>
              <td>string</td>
              <td>can take either of values 'fade','slide','none'</td>
          </tr>
          <tr>
              <td>disabled</td>
              <td>true</td>
              <td>boolean</td>
              <td>Prevent user from making selection of date</td>
          </tr>
          <tr>
              <td>supportedOrientations</td>
              <td> - </td>
              <td> Portrait, Landscape, Landscape-left, Landscape-right </td>
              <td>Allows the modal to rotate to any of the specified orientations</td>
      </tr>
        </tbody>
    </table>
      <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/date-picker.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
