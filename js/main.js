(function(){
    var stages = {
        INIT:0,
        FORM:1,
        MAP:2
    };
    
    var currentStage = stages.INIT;
    var crRule = 0;
    var ruleTpl = '<div class="input-append">'+
            '    <input class="span2" type="text">'+
            '    <div class="btn-group">'+
            '        <button class="btn dropdown-toggle" data-toggle="dropdown">'+
            '           Vreau sa fiu vecin'+
            '            <span class="caret"></span>'+
            '       </button>'+
            '        <ul class="dropdown-menu">'+
            '            <li><a href="#">Vreau sa fiu vecin</a></li>'+
            '            <li><a href="#">Nu vreau sa fiu vecin</a></li>'+
            '        </ul>'+
            '   </div><!-- /btn-group -->'+
            '</div>'
    
    function setupFormListeners()
    {
        $("#addrule").click(addRule);
        $("#rmrule").click(function(){$(".must_remove").remove()})
        $("#showhelp").click(function(){$("#help-rules").toggle()})
        $("#norules").click(function(){$("#rules").hide()})
        $("#wantrules").click(function(){$("#rules").show()})
        //$("")
    }
    
    function moveNext(){
        switch(currentStage){
            case stages.INIT:
                $("#init").hide();
                $("#form").show();
                currentStage = stages.FORM;
                setupFormListeners();
                addRule();
                break;
            case stages.FORM:
                $("#form").hide();
                $("#end").show();
                currentStage = stages.END;
                break;
        }
    }
    
    function addRule()
    {
        var newNode = $(ruleTpl);
        $("#rules").prepend(newNode);
    }
    
    function setupListeners(){
        $("#btnext").click(moveNext);
    }
    $(document).ready(setupListeners);
})()