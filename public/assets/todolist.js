$(document).ready(function () {

    $('#bAddToDo').on('click', function () {

        var item = $('#todoInput');
        var todo = { item: item.val() };
        console.log(todo);
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function () {
        var item = $(this).text().trim();
        console.log(item);
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});