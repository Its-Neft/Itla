function Add(){
    
    //Variables
    // Validar Apellido

    var inputNombre = document.getElementById("txtNombre");
    var inputApellido = document.getElementById("txtApellido");
    var inputTelefono = document.getElementById("txtTelefono");
    var inputContacto = document.getElementById("txtContacto");

    var txtNombre = inputNombre.value;
    var txtApellido = inputApellido.value;
    var txtTelefono = inputTelefono.value;
    var txtContacto = inputContacto.value;
/*
    console.log(txtNombre);
    console.log(txtApellido);
    console.log(txtTelefono);
    console.log(txtContacto);
*/
    if ((((txtNombre !== "" && txtNombre !== null && txtNombre !== undefined)
        && (txtApellido !== "" && txtApellido !== null && txtApellido !== undefined))
        && (txtTelefono !== "" && txtTelefono !== null && txtTelefono !== undefined))
        && (txtContacto !== "" && txtContacto !== null && txtContacto !== undefined)){

            switch(txtContacto){
                case "1":

                    var idCont = document.getElementById("idLaboral");
                    var divPrincipal = document.createElement("div");
                    var classPrincipal = document.createAttribute("class");
                    classPrincipal.value = "col-md-4";
                    divPrincipal.setAttributeNode(classPrincipal);
                
                    var divSecundario = document.createElement("div");
                    divSecundario.setAttribute("class","card");
                
                    var img = document.createElement("img");
                    img.src = "asses/img/Agenda/imgLaboral.png";
                    img.setAttribute("class", "card-img-top responsive");
                
                    var divSecundarioBody = document.createElement("div");
                    divSecundarioBody.setAttribute("class","card-body");
                
                    var h6CardTittle = document.createElement("h6");
                    h6CardTittle.setAttribute("class","card-title");
                    h6CardTittle.innerText = txtNombre + " " + txtApellido + " " + txtTelefono;
    
                    var divTextCenter = document.createElement("div");
                    divTextCenter.setAttribute("class","text-center");
    
                    var btnEliminar = document.createElement("button");
                    var btnEditar = document.createElement("button");
                    btnEliminar.setAttribute("class","btn btn-danger");
                    btnEliminar.innerText = "Eliminar";
    
                    //Eliminar
                    btnEliminar.addEventListener("click",function(){
                        idCont.removeChild(divPrincipal);
                    });
    
                    btnEditar.setAttribute("class","btn btn-warning");
                    btnEditar.innerText = "Editar";
    
                    //Editar
                    btnEditar.addEventListener("click",function(){
                        h6CardTittle.innerText = inputNombre.value + " " + inputApellido.value + " " + inputTelefono.value;
                        h6CardTittle.appendChild(divTextCenter);
                    });
                
                    divTextCenter.appendChild(btnEliminar);
                    divTextCenter.appendChild(btnEditar);
    
                    divSecundarioBody.appendChild(h6CardTittle);
                    h6CardTittle.appendChild(divTextCenter);
                    divSecundario.appendChild(img);
                    divSecundario.appendChild(divSecundarioBody);
                
                    divPrincipal.appendChild(divSecundario);
                    idCont.appendChild(divPrincipal);
                    break;

                case "2":
                    var idCont = document.getElementById("idPersonal");
                    var divPrincipal = document.createElement("div");
                    var classPrincipal = document.createAttribute("class");
                    classPrincipal.value = "col-md-4";
                    divPrincipal.setAttributeNode(classPrincipal);
                
                    var divSecundario = document.createElement("div");
                    divSecundario.setAttribute("class","card");
                
                    var img = document.createElement("img");
                    img.src = "asses/img/Agenda/imgPersonal.png";
                    img.setAttribute("class", "card-img-top responsive");
                
                    var divSecundarioBody = document.createElement("div");
                    divSecundarioBody.setAttribute("class","card-body");
                
                    var h6CardTittle = document.createElement("h6");
                    h6CardTittle.setAttribute("class","card-title");
                    h6CardTittle.innerText = txtNombre + " " + txtApellido + " " + txtTelefono;
    
                    var divTextCenter = document.createElement("div");
                    divTextCenter.setAttribute("class","text-center");
    
                    var btnEliminar = document.createElement("button");
                    var btnEditar = document.createElement("button");
                    btnEliminar.setAttribute("class","btn btn-danger");
                    btnEliminar.innerText = "Eliminar";
    
                    //Eliminar
                    btnEliminar.addEventListener("click",function(){
                        idCont.removeChild(divPrincipal);
                    });
    
                    btnEditar.setAttribute("class","btn btn-warning");
                    btnEditar.innerText = "Editar";
    
                    //Editar
                    btnEditar.addEventListener("click",function(){
                        h6CardTittle.innerText = inputNombre.value + " " + inputApellido.value + " " + inputTelefono.value;
                        h6CardTittle.appendChild(divTextCenter);
                    });
                
                    divTextCenter.appendChild(btnEliminar);
                    divTextCenter.appendChild(btnEditar);
    
                    divSecundarioBody.appendChild(h6CardTittle);
                    h6CardTittle.appendChild(divTextCenter);
                    divSecundario.appendChild(img);
                    divSecundario.appendChild(divSecundarioBody);
                
                    divPrincipal.appendChild(divSecundario);
                    idCont.appendChild(divPrincipal);
                    break;

                case "3":
                    var idCont = document.getElementById("idAcademico");
                    var divPrincipal = document.createElement("div");
                    var classPrincipal = document.createAttribute("class");
                    classPrincipal.value = "col-md-4";
                    divPrincipal.setAttributeNode(classPrincipal);
                
                    var divSecundario = document.createElement("div");
                    divSecundario.setAttribute("class","card");
                
                    var img = document.createElement("img");
                    img.src = "asses/img/Agenda/imgAcademico.png";
                    img.setAttribute("class", "card-img-top responsive");
                
                    var divSecundarioBody = document.createElement("div");
                    divSecundarioBody.setAttribute("class","card-body");
                
                    var h6CardTittle = document.createElement("h6");
                    h6CardTittle.setAttribute("class","card-title");
                    h6CardTittle.innerText = txtNombre + " " + txtApellido + " " + txtTelefono;
    
                    var divTextCenter = document.createElement("div");
                    divTextCenter.setAttribute("class","text-center");
    
                    var btnEliminar = document.createElement("button");
                    var btnEditar = document.createElement("button");
                    btnEliminar.setAttribute("class","btn btn-danger");
                    btnEliminar.innerText = "Eliminar";
    
                    //Eliminar
                    btnEliminar.addEventListener("click",function(){
                        idCont.removeChild(divPrincipal);
                    });
    
                    btnEditar.setAttribute("class","btn btn-warning");
                    btnEditar.innerText = "Editar";
    
                    //Editar
                    btnEditar.addEventListener("click",function(){
                        h6CardTittle.innerText = inputNombre.value + " " + inputApellido.value + " " + inputTelefono.value;
                        h6CardTittle.appendChild(divTextCenter);
                    });
                
                    divTextCenter.appendChild(btnEliminar);
                    divTextCenter.appendChild(btnEditar);
    
                    divSecundarioBody.appendChild(h6CardTittle);
                    h6CardTittle.appendChild(divTextCenter);
                    divSecundario.appendChild(img);
                    divSecundario.appendChild(divSecundarioBody);
                
                    divPrincipal.appendChild(divSecundario);
                    idCont.appendChild(divPrincipal);
                    break;
                     
            }
    }else{
      alert("Debes llenar los campos en rojo");
    }
}
