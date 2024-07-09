function guardarUser(){
    var username = document.getElementById('username').value;
    var nombre = document.getElementById('nombre').value;
    var perfil = document.getElementById('perfil').value;
    var pwd = document.getElementById('pwd').value;

    if (username == "" || nombre == "" || perfil == "" || pwd == ""){
        alert("Todos los campos son obligatorios");
    
    }
    else{
        $.ajax({
            url: 'prcd/agregarUser.php',
            type: 'POST',
            data: {
                username:username,
                nombre:nombre,
                perfil:perfil,
                pwd:pwd
            },
            success: function(response){
                var jsonData = JSON.parse(JSON.stringify(response));
                var success = jsonData.success;
                if (success==1){
                    Swal.fire({
                        icon: "success",
                        title: "Registro correcto",
                        footer: "SUIDEV - INCLUSIÓN 2022"
                    });
                    $('#agregar').modal('hide');
                    //agregar función para reload tabla de usuarios
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Error al registrar",
                        footer: "SUIDEV - INCLUSIÓN 2022"
                    });
                }
            }
        });
    }
}