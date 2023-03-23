function precoDoPao(){
    var preco = parseFloat(document.getElementById("preco"));
    var resultado = document.getElementById('resultado');
    var precoDoPao='';
  
    for(var contador=1; contador<=50 ; contador++)
     precoDoPao += preco+" x "+contador+" = "+
                 preco*contador+"<br />";
    
    resultado.innerHTML = precoDoPao;
  }