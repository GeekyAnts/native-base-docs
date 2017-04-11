


{{-- override style in NativeBase --}}



<div class="panel panel-default panel-faq">
    <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-5" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
            <h4 class="panel-title">
                How to override style in NativeBase?
                <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
            </h4>
        </a>
    </div>
    <div id="faq-5" class="panel-collapse collapse">
        <div class="panel-body">
            I didn't find a way to override style. <br />
            How can I include React StyleSheet into my app?
        </div>
        <div class="panel-footer">
            <b> Solution: </b><br />
            <a href="https://nativebase.io/">NativeBase</a> is built on top of <a href="https://facebook.github.io/react-native/">React Native</a>.<br />
            Hence with any component you can pass the style property which will be merged to the default style of that component.<br />

            Example: <pre><code class="language-jsx">&lt;Button style=&#123;{backgroundColor: '#FF0000'}}>
    Click me! 
&lt;/Button></code></pre>
        </div>
    </div>
</div>