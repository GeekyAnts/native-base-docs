


{{-- Content of Left Component not being rendered at the left of the screen. --}}



<div class="panel panel-default panel-faq">
    <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-9" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
            <h4 class="panel-title">
                Content of Left Component not being rendered at the left of the screen
                <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
            </h4>
        </a>
    </div>
    <div id="faq-9" class="panel-collapse collapse">
        <div class="panel-body">
            I am not sure why the content of <code>Left</code> appears at somewhere middle of the screen. It should appear at left side.
        </div>
        <div class="panel-footer">
            <b> Solution: </b><br />
            If you use <code>Left</code> or <code>Body</code> or <code>Right</code> with any NativeBase component, you must include these 3, to align the components.
        </div>
    </div>
</div>