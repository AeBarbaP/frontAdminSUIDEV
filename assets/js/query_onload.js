function usuariosQuery(){
    $.ajax({
        url: 'query/query_usuarios.php',
        type: 'POST',
        dataType: 'html',
        success: function(response){
            $('#usuariosTabla').html(response);
        }
    });
}