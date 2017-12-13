//Buscar los posts mediante jquery ajax
function cargarPost(){
	var root = 'https://jsonplaceholder.typicode.com';

	$.ajax({
		url: root + '/posts',
		method: 'GET'
	}).then(function(data) {
        var localStorage= window.localStorage;
		var postFavoritos={};
		var dbpostFavoritos= localStorage.getItem('postFavoritos');
		var usuariosDb= localStorage.getItem('usuarios');
		var usuariosP={};
		usuariosP= JSON.parse(usuariosDb);
		if(dbpostFavoritos!=null){
			postFavoritos=JSON.parse(dbpostFavoritos);
		}

	$.each(data, function(i, p){

			var existe= p.id in postFavoritos;
			var usuarioPost=usuariosP[p.userId-1];
			var post="<div class='fondopost'>"+"<div class='row'>"+
			"<div class='col-md-12'>"+
			"<h3>"+"<a href='post_comentarios.html?idPost="+p.id+"'>"+p.title+"</h3>"+
			"</div>"+
			"</div>"+
			"<div class='row'>"+
			"<div class='col-md-10'>"+
			"<a class='publicador' href='perfil_usuario.html?idUsuario="+p.userId+"'>"+
			"<span class='glyphicon glyphicon-user' ></span>"+usuarioPost.name+"("+usuarioPost.email+")"+"</a>"+
			"</div>"+
			"<div class='col-md-2'>"+
			"<button class='btn glyphicon "+(existe ? 'glyphicon-star': 'glyphicon-star-empty')+ " post_boton' data-postid='"+p.id+"'></button>"+
			"</div>"+
			"</div>"+
			"<div class='row'>"+
			"<div class='col-md-12'>"+
			"<p>"+p.body+"</p>"+
			"</div>"+
			"</div>"+"</div>"+"<br />";
			$('#post').append(post);
		});
		$('.post_boton').click(function(){
			var postId=$(this).data('postid');
			var existe= agregarPostFavorito(postId);

			$(this).removeClass(existe ? 'glyphicon-star-empty': 'glyphicon-star');
            $(this).addClass(existe ? 'glyphicon-star': 'glyphicon-star-empty');
			/*if(existe){
               $(this).removeClass('glyphicon-star-empty');
               $(this).addClass('glyphicon-star');
			}else{
				$(this).addClass('glyphicon-star');
				$(this).removeClass('glyphicon-star-empty');
			}*/
			
		})
	});

};

function agregarPostFavorito(postId){
	var localStorage= window.localStorage;
	var postFavoritos={};
	var dbpostFavoritos= localStorage.getItem('postFavoritos');
	if(dbpostFavoritos!=null){
		postFavoritos=JSON.parse(dbpostFavoritos);
	}
	var existe=false;
	if(postId in postFavoritos){
		delete postFavoritos[postId];
	}else {
		existe=true;
		postFavoritos[postId]=true;
	}

	localStorage.setItem('postFavoritos', JSON.stringify(postFavoritos));
	return existe;
}

function guardarUsuarios(usuario){
      var usuarios=[];
      myStorage=window.localStorage;
      var dbUsuarios= myStorage.getItem("usuarios");
      if(dbUsuarios !=null){
        usuarios= JSON.parse(dbUsuarios)}
        usuarios.push(usuario);
        myStorage.setItem("usuarios",JSON.stringify(usuarios));
      };

function buscarUsuarios(){
	var root = 'https://jsonplaceholder.typicode.com';

	$.ajax({
            url: root + '/users',
            method: 'GET'
          }).then(function(data) {

            $.each(data,function(i,usuario){
              guardarUsuarios(usuario);
            });
            
          }); 
};

$(document).ready(function(){

	cargarPost();
    buscarUsuarios();
});