# Segment
Segments are best used as an alternative for tabs. Mainly used in iOS.

![Preview ios Segment](https://docs.nativebase.io/docs/assets/ios/components/headerSegment.png)
![Preview android Segment](https://docs.nativebase.io/docs/assets/android/components/headerSegment.png)

*Syntax(simple)*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Segment, Left, Right, Segment, Button, Icon } from 'native-base';
​export default class ProgressBarExample extends Component {
    render() {
        return (
        &lt;Container>
            &lt;Header>
                &lt;Left>
                    &lt;Button transparent>
                        &lt;Icon name="arrow-back" />
                    &lt;/Button>
                &lt;/Left>
                &lt;Body>
                    &lt;Segment>
                        &lt;Button first>&lt;Text>Puppies&lt;/Text>&lt;/Button>
                        &lt;Button last active>&lt;Text>Cubs&lt;/Text>&lt;/Button>
                    &lt;/Segment>
                &lt;/Body>
                &lt;Right>
                    &lt;Button transparent>
                        &lt;Icon name="search" />
                    &lt;/Button>
                &lt;/Right>
            &lt;/Header>
            &lt;Content padder>
                &lt;Text>Awesome segment&lt;/Text>
            &lt;/Content>
        &lt;/Container>
        );
    }
}</code></pre><br />

Segment takes Button as children. The active Button shoud be given an active prop (implementation is totally up to you).
Also the **first** and **last** buttons should be given props **first** and **last** respectively.
Pro tip: It is advisable to use hasSegment prop with Header if you're using Segment below the header.

*Syntax(outside header)*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
    import { Container, Content, Segment, Left, Right, Title, Segment, Button, Icon } from 'native-base';
    ​export default class ProgressBarExample extends Component {
        render() {
            return (
            &lt;Container>
                &lt;Header hasTabs>
                    &lt;Left>
                        &lt;Button transparent>
                            &lt;Icon name="arrow-back" />
                        &lt;/Button>
                    &lt;/Left>
                    &lt;Body>
                        &lt;Title>Hello&lt;/Title>
                    &lt;/Body>
                    &lt;Right>
                        &lt;Button transparent>
                            &lt;Icon name="search" />
                        &lt;/Button>
                    &lt;/Right>
                &lt;/Header>
                &lt;Segment>
                    &lt;Button first>&lt;Text>Puppies&lt;/Text>&lt;/Button>
                    &lt;Button>&lt;Text>Kittens&lt;/Text>&lt;/Button>
                    &lt;Button last active>&lt;Text>Cubs&lt;/Text>&lt;/Button>
                &lt;/Segment>
                &lt;Content padder>
                    &lt;Text>Awesome segment&lt;/Text>
                &lt;/Content>
            &lt;/Container>
            );
        }
    }</code></pre><br />
