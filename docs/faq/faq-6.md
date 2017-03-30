



{{-- Add events with components --}}

<div class="panel panel-default panel-faq">
    <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-6" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
            <h4 class="panel-title">
                How do I add events with the components?
                <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
            </h4>
        </a>
    </div>
    <div id="faq-6" class="panel-collapse collapse">
        <div class="panel-body">
            What events are available for the components?<br />
            Example buttons, list items etc.
        </div>
        <div class="panel-footer">
            <b>Solution:</b> <br />
            The <a href="http://nativebase.io/">NativeBase</a> components are built on top of <a href="https://facebook.github.io/react-native/">React Native</a> components. Hence the callback events of React Native holds good with NativeBase components. <br />

            <i>Example:</i> The <code>Button</code> component is actually a wrapper of the <code>TouchableOpacity</code> component of React Native. So you can just use the <code>onPress</code> callback function for event handling.<br /><br />

            Refer the 
            <a href="{{ url( 'cheatsheet' ) }}">cheatsheet</a> 
            for more details.
        </div>
    </div>
</div>