

  var Estudiante=function(){
      var self=this;
      self.id="";
      self.nombre="";
      self.matricula="";
      self.identificacion="";
      self.telefono="";
      self.email="";
    }
  function recorrer(){
      var id=document.getElementById("id").value;
      var nombre=document.getElementById("nombre").value;
      var matricula=document.getElementById("matricula").value;
      var identificacion=document.getElementById("identificacion").value;
      var telefono=document.getElementById("telefono").value;
      var email=document.getElementById("email").value;
     
     var est= new Estudiante();
     est.id=id;
     est.nombre=nombre;
     est.matricula=matricula;
     est.identificacion=identificacion;
     est.telefono=telefono;
     est.email=email;

     console.log(est);
     addRow(est);
    };

    function addRow(est){

      var  table=document.getElementById("estudiantes");
      var tr=document.createElement("tr");
      var tdId=document.createElement("td");
      var tdNombre=document.createElement("td");
      var tdMatricula=document.createElement("td");
      var tdIdentificacion=document.createElement("td");
      var tdTelefono=document.createElement("td");
      var tdEmail=document.createElement("td");

      var txtId= document.createTextNode(est.id);
      var txtNombre= document.createTextNode(est.nombre);
      var txtMatricula= document.createTextNode(est.matricula);
      var txtIdentificacion= document.createTextNode(est.identificacion);
      var txtTelefono= document.createTextNode(est.telefono);
      var txtEmail= document.createTextNode(est.email);

      tdId.appendChild(txtId);
      tdNombre.appendChild(txtNombre);
      tdMatricula.appendChild(txtMatricula);
      tdIdentificacion.appendChild(txtIdentificacion);
      tdTelefono.appendChild(txtTelefono);
      tdEmail.appendChild(txtEmail);

      tr.appendChild(tdId);
      tr.appendChild(tdNombre);
      tr.appendChild(tdMatricula);
      tr.appendChild(tdIdentificacion);
      tr.appendChild(tdTelefono);
      tr.appendChild(tdEmail);

      table.appendChild(tr);

    };

    

	