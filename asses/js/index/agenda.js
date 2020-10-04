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

                    var mainContainer = document.getElementById("idLaboral");
                    var mainDivColMd4 = document.createElement("div");
                    var classColMd4 = document.createAttribute("class");
                    classColMd4.value = "col-md-4";
                    mainDivColMd4.setAttributeNode(classColMd4);
                
                    var DivCard = document.createElement("div");
                    DivCard.setAttribute("class","card");
                
                    var img = document.createElement("img");
                    img.src = "asses/img/Agenda/imgLaboral.png";
                    img.setAttribute("class", "card-img-top responsive");
                
                    var divCardBody = document.createElement("div");
                    divCardBody.setAttribute("class","card-body");
                
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
                        mainContainer.removeChild(mainDivColMd4);
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

                    divCardBody.appendChild(h6CardTittle);
                    h6CardTittle.appendChild(divTextCenter);
                    DivCard.appendChild(img);
                    DivCard.appendChild(divCardBody);
                
                    mainDivColMd4.appendChild(DivCard);
                    mainContainer.appendChild(mainDivColMd4);
                    break;

                case "2":
                    var mainContainer = document.getElementById("idPersonal");
                    var mainDivColMd4 = document.createElement("div");
                    var classColMd4 = document.createAttribute("class");
                    classColMd4.value = "col-md-4";
                    mainDivColMd4.setAttributeNode(classColMd4);
                
                    var DivCard = document.createElement("div");
                    DivCard.setAttribute("class","card");
                
                    var img = document.createElement("img");
                    img.src = "asses/img/Agenda/imgPersonal.png";
                    img.setAttribute("class", "card-img-top responsive");
                
                    var divCardBody = document.createElement("div");
                    divCardBody.setAttribute("class","card-body");
                
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
                        mainContainer.removeChild(mainDivColMd4);
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
    
                    divCardBody.appendChild(h6CardTittle);
                    h6CardTittle.appendChild(divTextCenter);
                    DivCard.appendChild(img);
                    DivCard.appendChild(divCardBody);
                
                    mainDivColMd4.appendChild(DivCard);
                    mainContainer.appendChild(mainDivColMd4);
                    break;

                case "3":
                    var mainContainer = document.getElementById("idAcademico");
                    var mainDivColMd4 = document.createElement("div");
                    var classColMd4 = document.createAttribute("class");
                    classColMd4.value = "col-md-4";
                    mainDivColMd4.setAttributeNode(classColMd4);
                
                    var DivCard = document.createElement("div");
                    DivCard.setAttribute("class","card");
                
                    var img = document.createElement("img");
                    img.src = "asses/img/Agenda/imgAcademico.png";
                    img.setAttribute("class", "card-img-top responsive");
                
                    var divCardBody = document.createElement("div");
                    divCardBody.setAttribute("class","card-body");
                
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
                        mainContainer.removeChild(mainDivColMd4);
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
    
                    divCardBody.appendChild(h6CardTittle);
                    h6CardTittle.appendChild(divTextCenter);
                    DivCard.appendChild(img);
                    DivCard.appendChild(divCardBody);
                
                    mainDivColMd4.appendChild(DivCard);
                    mainContainer.appendChild(mainDivColMd4);
                    break;
                     
            }
    }else{
      alert("Debe llenar los campos en rojo");
    }
}
