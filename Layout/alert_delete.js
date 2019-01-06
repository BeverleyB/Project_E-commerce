// $(".btn btn-danger").click(function(e)
// {
//     if(confirm("Are you sure ? Otherwise click cancel."))
//     {
//         alert('Deleted!');
//     }
//     else
//     {
//         e.preventDefault();
//     }
// });

$(function() {
    $('.btn.btn-danger').click(function(e) {
        e.preventDefault();
        if (window.confirm("Are you sure ? Otherwise click cancel.")) {
            location.href = this.href;
        }
    });
});
