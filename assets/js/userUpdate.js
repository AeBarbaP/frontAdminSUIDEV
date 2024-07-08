function myFunction() {
    var x = document.getElementById("passW");
    
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function estatusCambio(x,y){
    var id = x;
    var estatus = y;
    
    $.ajax({
        url: 'prcd/cambiarEstatus.php',
        type: 'POST',
        data: {
            id: id,
            estatus: estatus
        },
        success: function(response){
            usuariosQuery();
        }
    });
}