function nombre() {
    const guardarName = document.getElementById("name").value;
    if (guardarName.length > 0) {
      alert("Hola " + guardarName + "; mucha suerte");
      window.location.href = "opciones.html";
    } else {
      alert("Por favor, ingresa tu nombre antes de jugar.");
    }
  }
   
  
  // para Disney
  let answer1= undefined
  let answer2= undefined
  let answer3= undefined
   
    
  function verificar() {
    
    answer1 = document.querySelector(
      "input[name='question1']:checked");
    
    answer2 = document.querySelector(
      "input[name='question2']:checked");
    
    answer3 = document.querySelector(
      "input[name='question3']:checked");
    
          if (
            answer1 == undefined ||
            answer2 == undefined ||
            answer3 == undefined 
          ) {
            alert('Debe ingresar todas las respuestas');
            return;
          }
       
     
    if (answer1.value == "true") {
      alert("Correcto, la respuesta correcta es Bob Esponja");
    } else {
      alert("incorrecto, la respuesta correcta es Bob Esponja");
    }
  
    
    if (answer2.value == "true") {
      alert("Correcto, la respuesta correcta es Aladdín");
    } else {
      alert("incorrecto, la respuesta correcta es Aladdín");
    }
  
    
    if (answer3.value == "true") {
      alert("Correcto, la respuesta correcta es Pooh");
    } else {
      alert("incorrecto, la respuesta correcta es Pooh"); 
  
    }
    }
  
  
  
  // para Cartoon 
  let answer4= undefined
  let answer5= undefined
  let answer6= undefined
  
  function validar() {
    
     answer4 = document.querySelector(
      "input[name='question4']:checked");
    
    answer5 = document.querySelector(
      "input[name='question5']:checked");
    
    answer6 = document.querySelector(
      "input[name='question6']:checked");
    
          if (
            answer4 == undefined ||
            answer5 == undefined ||
            answer6 == undefined
          ) {
            alert('Debe ingresar todas las respuestas');
            return;
          }
  
     if (answer4.value == "true") {
      alert("Correcto, la respuesta correcta es Bombón");
    } else {
      alert("incorrecto, la respuesta correcta es Bombón");
    }
  
    
    if (answer5.value == "true") {
      alert("Correcto, la respuesta correcta es Armario");
    } else {
      alert("incorrecto, la respuesta correcta es Armario");
    }
  
    
    if (answer6.value == "true") {
      alert("Correcto, la respuesta correcta es Mapache");
    } else {
      alert("incorrecto, la respuesta correcta es Mapache"); 
     
    }
  }
  