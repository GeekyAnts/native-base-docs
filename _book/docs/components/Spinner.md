# Spinner

If you have certain screens of your app that take some time to load, you may want to consider a page loader. A page loader is any kind of animation that visually communicates to a visitor that the page is loading and to just sit tight for a few seconds. Without a page loader, user might think that the app is being unresponsive and just click away in frustration. A page loader also provides a small distraction which can actually makes the wait seem much shorter.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/docs/getting-started.html) [<code>&lt;ActivityIndicator></code>](https://facebook.github.io/react-native/docs/activityindicator.html)*

![Preview ios Spinner](../docs/assets/ios/components/spinner.gif)
![Preview android Spinner](../docs/assets/android/components/spinner.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Spinner } from 'native-base';
export default class SpinnerExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Spinner />
                    &lt;Spinner color='red' />
                    &lt;Spinner color='green' />
                    &lt;Spinner color='blue' />
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


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
                <td>color</td>
                <td>#45D56E</td>
                <td>user-defined</td>
                <td>Color of Spinner.</td>
            </tr>
        </tbody>
    </table><br />
