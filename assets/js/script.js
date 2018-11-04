
function update() {
    var tasks = $('.tasks ul').get(0).childNodes;
    console.log(tasks)
/*
    for (var i = 0; i < tasks.length; i++) {

        var key = 'task' + (tasks.length - i - 1);
        console.log(tasks[i])
        //localStorage[key] = tasks[i].childNodes[1].innerText;
        //tasks[i].id = key;
        
    }
    localStorage.removeItem('task0'); */
}

$(document).ready(function() {

    for (let i = localStorage.length - 1; i >= 0; i--) {
        $('.tasks ul').append(`<li id="${ 'task' + i }" class="a_task"> ${ localStorage['task' + i] } </li>`);
    }

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
                $('.tasks ul').prepend("<li class='a_task'>"+ $(this).val().trim() +"</li>")
                localStorage['task' + localStorage.length] = $(this).val().trim()
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
