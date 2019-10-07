//check off specific Todos By Clicking
$("ul").on("click", "Li", function(){
   $(this).toggleClass("completed");
});

//click on X to delete toDos
$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(event){
        $(this).remove();
    });
});

$("input[type= 'text']").keypress(function(){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");
    }
});

$(".toggleInput").click(function(){
    $("input[type= 'text']").fadeToggle(200);
});