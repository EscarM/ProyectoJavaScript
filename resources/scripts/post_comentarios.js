function cargarPost(post){

	var localStorage= window.localStorage;
		var postFavoritos={};
		var dbpostFavoritos= localStorage.getItem('postFavoritos');
		var usuariosDb= localStorage.getItem('usuarios');
		var usuariosP={};
		usuariosP= JSON.parse(usuariosDb);
		if(dbpostFavoritos!=null){
			postFavoritos=JSON.parse(dbpostFavoritos);
		}

    var existe= post.id in postFavoritos;
	var usuarioPost=usuariosP[post.userId-1];
	var postCuerpo="<div class='row'>"+
	"<div class='col-md-12'>"+
	"<h3>"+post.title+"</h3>"+
	"</div>"+
	"</div>"+
	"<div class='row'>"+
	"<div class='col-md-10'>"+
	"<span class='glyphicon glyphicon-user' ></span>"+usuarioPost.name+"("+usuarioPost.email+")"+"</a>"+
	"</div>"+
	"<div class='col-md-2'>"+
	"<button class='btn glyphicon "+(existe ? 'glyphicon-star': 'glyphicon-star-empty')+ " post_boton' data-postid='"+post.id+"'></button>"+
	"</div>"+
	"</div>"+
	"<div class='row'>"+
	"<div class='col-md-12'>"+
	"<p>"+post.body+"</p>"+
	"</div>"+
	"</div>";
	$('#post').append(postCuerpo);
};

function cargarComentarios(comentario){
      var rowComentario="<tr>"+"<td>"+"<div class='panel panel-info'>"
      +"<div class='panel-heading'>"+comentario.name+"</div>"
      +"<div class='panel-body'>"+comentario.body+"</div>"
      +"<div class='panel-footer'>"+comentario.email+"</div>"+
      "</div>"+"</td>"+"</tr>";

      $("#comentarios").append(rowComentario);
    };

$(document).ready(function(){

	var urlParametro= new URLSearchParams(window.location.search);
	var idPost=urlParametro.get('idPost');
    var root = 'https://jsonplaceholder.typicode.com';
          $.ajax({
            url: root + '/posts/'+idPost,
            method: 'GET'
          }).then(function(data) {
          	cargarPost(data);
          });

          $.ajax({
            url: root + '/comments?postId='+idPost,
            method: 'GET'
          }).then(function(data) {
          	$.each(data,function(i,comments){
              cargarComentarios(comments);
            });
          });   
});