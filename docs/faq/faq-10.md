


{{-- FlatList inside Content item invokes onEndReached infinite times --}}



<div class="panel panel-default panel-faq">
    <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion-cat-1" href="#faq-9" style="color:Black" onMouseOver="this.style.color='#00c497'" onMouseOut="this.style.color='#000000'">
            <h4 class="panel-title">
                FlatList inside Content item invokes onEndReached infinite times
                <span class="pull-right glyphicon glyphicon-resize-vertical"></span>
            </h4>
        </a>
    </div>
    <div id="faq-9" class="panel-collapse collapse">
        <div class="panel-body">
            I was facing the issue that ```onEndReached``` was getting called again and again after an interval when setting onEndReachedThreshold greater than 0.
        </div>
        <div class="panel-footer">
            <b> Solution: </b><br />
            Use prop <code>contentContainerStyle</code> as in<br/>
            <code>{% raw %}contentContainerStyle={{flex: 1}}{% endraw %}</code>
        </div>
    </div>
</div>