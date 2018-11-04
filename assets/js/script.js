
function update() {

}


$(document).ready(function() {

    $('input').focus(function(){
        $('label').removeClass("desactive").addClass("active")
        $('.inside').removeClass("desactive").addClass("active")
    })

    $('input').blur(function(){
        if($(this).val().trim() == ""){
            $('label').removeClass("active").addClass("desactive")
            $('.inside').removeClass("active").addClass("desactive")
            $(this).val("")
        }
    })

    $('input').keyup(function(e){
        if(e.keyCode == 13 ){
            if($(this).val().trim() != ""){
                $('.tasks ul').append("<li class='a_task'>"+ $(this).val().trim() +"</li>")
            }
            $(this).val("")
        }
    })

    $('.tasks').sortable({
        forcePlaceholderSize: true,
        opacity: .8,
        distance: 5,
        scroll: false,
        containment: 'document',
        axis: 'y',
        items: 'li',
        tolerance: 'pointer',
        update: update
    })

})
