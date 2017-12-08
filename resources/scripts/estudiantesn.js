var Estudiante=function(){
      var self=this;
      self.id="";
      self.nombre="";
      self.matricula="";
      self.identificacion="";
      self.telefono="";
      self.email="";
    }

    function agregarEstudiante(estudiante){
      var rowEstudiante="<tr>"
      +"<td>"+"<input type='checkbox' name='checkbox' id='check' value='"+estudiante.id+"'>"+"</td>"
      +"<td>"+estudiante.id+"</td>"
      +"<td>"+estudiante.nombre+"</td>"
      +"<td>"+estudiante.matricula+"</td>"
      +"<td>"+estudiante.identificacion+"</td>"
      +"<td>"+estudiante.telefono+"</td>"
      +"<td>"+estudiante.email+"</td>"+
      "</tr>";

      $("table tbody").append(rowEstudiante);
    };

    
                                    
  
  function guardarDb(estudiante){
  var estudiantes=[];
  myStorage=window.localStorage;
  var dbEstudiantes= myStorage.getItem("estudiantes");
  if(dbEstudiantes !=null){
      estudiantes= JSON.parse(dbEstudiantes)}
      estudiantes.push(estudiante);
      myStorage.setItem("estudiantes",JSON.stringify(estudiantes));
  };

$(document).ready(function (){
  myStorage=window.localStorage;

  var dbEstudiantes= myStorage.getItem("estudiantes");
  if(dbEstudiantes !=null){
      var estudiantes=JSON.parse(dbEstudiantes);

      $.each(estudiantes,function(i,est){
            agregarEstudiante(est);
            });
          
        };
  
  

      $("#agregarestudiante").click(function(){
          var id=$("#id").val();
          var nombre=$("#nombre").val();
          var matricula=$("#matricula").val();
          var identificacion=$("#identificacion").val();
          var telefono=$("#telefono").val();
          var email=$("#email").val();

          var est= new Estudiante();
          est.id=id;
          est.nombre= nombre;
          est.matricula=matricula;
          est.identificacion=identificacion;
          est.telefono=telefono;
          est.email=email;

          agregarEstudiante(est);
          guardarDb(est);
        });

   $('#eliminarestudiante').click(function () {
        $('input:checked').each(function () {
            if ($(this).is(':checked')) {
                var idEstudiante = ($(this).val());
                var estudiantesArray = JSON.parse(myStorage.getItem("estudiantes"));
                estudiantesArray = jQuery.grep(estudiantesArray, function (estudiante) {
                    return estudiante.id !== idEstudiante;
                });
                myStorage.setItem("estudiantes", JSON.stringify(estudiantesArray));
            }
        });
    });
     $("#eliminarestudiante").click(function(){
          
          $('input:checked').each(function() {
          $(this).closest('tr').remove();
      });
          
        });
   

});