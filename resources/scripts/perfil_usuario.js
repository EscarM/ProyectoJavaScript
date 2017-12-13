function cargarUsuario(idUsuario){

	var usuariosDb= localStorage.getItem('usuarios');
	var usuario={};
	usuario= JSON.parse(usuariosDb);
	var usuarioPost=usuario[idUsuario-1];
	console.log(usuarioPost);

	var perfil=
    	'<div class="col-lg-6 col-lg-offset-3">'+
    	
    		'<!-- ===== vCard Navigation ===== -->'+
    		'<div class="row w">'+
    			'<div class="col-md-4">'+
					'<ul class="nav nav-tabs nav-stacked" id="myTab">'+
					  '<li class="active"><a href="#about">About</a></li>'+
					  '<li><a href="#profile">Profile</a></li>'+
					  '<li><a href="#contact">Contact</a></li>'+
					'</ul>'+    			
				'</div><!-- col-md-4 -->'+

    		'<!-- ===== vCard Content ===== -->'+
    			'<div class="col-md-8">'+
	    			'<div class="tab-content">'+
	    			
	    			  '<!-- ===== First Tab ===== -->'+
					  '<div class="tab-pane active" id="about">'+
					  	'<h3>'+usuarioPost.name+'</h3>'+
					  	'<h5>'+usuarioPost.username+'</h5>'+
					  	'<hr>'+
					  	'<p>'+"Catch Phrase: "+usuarioPost.company.catchPhrase+'</p>'+ 
					  	'<h4><i class="icon-file-text-alt"></i> Address</h4>'+
					  	'<p class="sm">'+
					  		'<grey>'+usuarioPost.address.street+'</grey>'+" | Street"+'<br/>'+
					  		'<grey>'+usuarioPost.address.suite+'</grey>'+" | Suite"+'<br/>'+
					  		'<grey>'+usuarioPost.address.city+'</grey>'+"| City"+'<br/>'+
					  		'<grey>'+usuarioPost.address.zipcode+'</grey>'+" | ZipCode"+'<br/>'+
					  	'</p>'+
					  	'<p class="pull-right red"><i class="icon-heart"></i></p>'+
					  '</div><!-- tab about -->'+
					  
	    			  '<!-- ===== Second Tab ===== -->'+
					  '<div class="tab-pane" id="profile">'+
					  	'<h4><i class="icon-briefcase"></i>Job Experience</h4>'+
					  	'<p class="sm">'+
					  		'<grey>'+"Company: "+usuarioPost.company.name+'</grey><br/>'+
					  	'</p>'+
					  '</div><!-- Tab Profile -->'+
					  
	    			  '<!-- ===== Fourth Tab ===== -->'+
					  '<div class="tab-pane" id="contact">'+
						  '<h4>'+"Contact Information"+'</h4>'+
						  '<hr>'+
						  '<div class="row">'+
							  '<div class="col-xs-6">'+
								  '<p class="sm">'+
								  	'<i class="icon-globe"></i>-'+usuarioPost.website+'<br/>'+
									'<i class="icon-envelope"></i>-'+usuarioPost.email+  
								  '</p>'+
							  '</div><!-- col-xs-6 -->'+
						  '</div><!-- row -->'+
					  '</div><!-- Tab Contact -->'+
					'</div><!-- Tab Content -->'+
    			'</div><!-- col-md-8 -->'+
    		'</div><!-- row w -->'+
    	'</div><!-- col-lg-6 -->';

$('#perfil').append(perfil);
};



$(document).ready(function(){

	var urlParametro= new URLSearchParams(window.location.search);
	var idUsuario=urlParametro.get('idUsuario');
	cargarUsuario(idUsuario);
	console.log(idUsuario);

	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
});