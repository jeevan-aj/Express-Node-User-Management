// const { unlink } = require("../../server/routes/router");

$("#add_user").submit((e)=> {
    alert("data added");
})

$('#update_user').submit((e)=> {
    e.preventDefault();
    var  unindexed_array = $('#update_user').serializeArray();
    var data = {}
    $.map(unindexed_array,(cur,idx)=> {
        data[cur['name']] =cur['value']
    })
    console.log(data);

    var request = {
        "url":`http://localhost:2000/api/update/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done((response)=> {
        alert("data updated successfully");
    })
    
})

if(window.location.pathname == '/'){
    $ondelete = $(".delete_button");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")
        console.log(id);
        var request = {
            "url":`http://localhost:2000/api/delete/${id}`,
            "method":'DELETE'
        }

        // if(confirm("Do you want to delete")){
            $.ajax(request).done(function(response){
                alert("data deleted")
                location.reload();
            })
        // }
       
    })
}