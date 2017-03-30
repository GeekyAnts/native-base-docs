



{{-- react-native-vector-icons peer installation failed --}}

<div class="panel panel-default panel-faq">
    <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-4" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
            <h4 class="panel-title">
                react-native-vector-icons peer installation failed
                <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
            </h4>
        </a>
    </div>
    <div id="faq-4" class="panel-collapse collapse">
        <div class="panel-body">
            The react-native-vector-icons is always not installed.<br />
            I follow up the installation instruction by using <code>rnpm link</code>.<br />
            But this doesn't seem to link the package correctly.
        </div>
        <div class="panel-footer">
            <b>Probabilities:</b><br />
            <ol>
                <li>This might be the problem if your rootProject name is not correct at all places.</li>
                <li><b>rnpm link</b> might not work all the time.</li>
                <ul>
                    <li>In case of android</li>
                    <li>If React Native version in your app >= 0.29</li>
                </ul>
            </ol><br />

            <div style="padding-bottom: 20px;">
                <b>Solution 1:</b> <br />
                Check your rootProject name in react-native-vector-icons's <b><i>font.gradle</i></b>, in case if its hard coded there. This causes failure in linking because the rootProject name may not be same with the definition in <b><i>settings.gradle</i></b>.
            </div>

            <b>Solution 2:</b> <br />
            Please complete the installation procedure for <b>react-native-vector-icons</b> by taking up the 
            <a href="{{ url( 'getting-started#installing-peer-dependencies' ) }}">
                manual setup
            </a> mentioned in the docs.
        </div>
    </div>
</div>