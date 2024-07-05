function agregarUser(){
    $('#agregar').modal('show');
}

function guardarUser(){
    var user = document.getElementById('username').value;
    var nombre = document.getElementById('nombre').value;
    var perfil = document.getElementById('perfil').value;
    var pwd = document.getElementById('pwd').value;

    if (user == "" || nombre == "" || perfil == "" || pwd == ""){
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
                Swal.fire({
                    icon: "success",
                    title: "Registro correcto",
                    footer: "SUIDEV - INCLUSIÓN 2022"
                });
                $('#agregar').modal('hide');
                //agregar función para reload tabla de usuarios
            }
        });
    }
}