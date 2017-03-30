

{{-- Unrecognized font family ionicons --}}

<div class="panel panel-default panel-faq">
    <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-3" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
            <h4 class="panel-title">
                Unrecognized font family ionicons
                <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
            </h4>
        </a>
    </div>
    <div id="faq-3" class="panel-collapse collapse">
        <div class="panel-body">
            When I run it in Xcode I'm getting a "Build Failed" error, with message:
            <ul>
                <li>
                    ld: library not found for -lRNVectorIcons
                </li>
                <li>
                    clang: error: linker command failed with exit code 1 (use -v to see invocation)
                </li>
            </ul>
        </div>
        <div class="panel-footer">
            <b>Solution:</b> <br />
            Linking the Vector Icons repo in Xcode will solve the issue.<br />
            More information about how to link libraries to your app. 
            <font size="1">
                <a href="http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content">
                    Click here
                </a>
            </font><br />
            If you still face the same issue, then restart packager and run from xcode. 
        </div>
    </div>
</div>