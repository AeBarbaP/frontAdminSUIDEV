function usuariosQuery(){
    $.ajax({
        url: 'query_usuarios.php',
        type: 'POST',
        dataType: 'HTML',
        success: function(response){
            $('#usuariosTabla').html(response);
        }
    });
}