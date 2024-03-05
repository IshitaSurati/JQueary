$("#btn").click(()=>{
    $("body").toggleClass("dark");
});

$(document).ready(function() {
    $(".addtask").click(function() {
        var taskName = $(".new-task").val();
        if (taskName !== "") {
            $("#task-list").append(
                '<li><span class="task">' +
                taskName +
                '</span><button class="delete">Delete</button></li>'
            );
            $(".new-task").val("");
        }
    });

    $("#task-list").on("click", ".task", function() {
        $(this).toggleClass("completed");
    });

    // $("#task-list").on("click", ".delete", function() {
    //     $(this).parent().remove();
    // });

});