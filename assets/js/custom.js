$('#add_user').submit(function(e) {
    alert('Data Inserted Successfully !');
})

$('#update_user').submit(function(e) {
    e.preventDefault();

    var unindexedArray = $(this).serializeArray();
    var data = {};
    $.map(unindexedArray, function(n, i) {
        data[n['name']] = n['value']
    });

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": 'PUT',
        "data": data
    }


    $.ajax(request).done(function(response) {
        alert('Data Updated Successfully !');
    });
});

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var a = $(this);
        var id = a.attr("data-id");
        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method": 'DELETE'
        }

        if (confirm("Do you reallyt want to delete this user ?")) {
            $.ajax(request).done(function(response) {
                alert('Data Deleted Successfully !');
                a.closest('tr').remove();
            });
        }
    });
}