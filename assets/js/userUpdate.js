function myFunction() {
    var x = document.getElementById("passW");
    
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("eyePwd").innerHTML = <i class="bi bi-eye-slash"></i>;
    } else {
        x.type = "password";
        document.getElementById("eyePwd").innerHTML = <i class="bi bi-eye"></i>;
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