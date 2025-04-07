  function apertado (){
let dol = prompt("Quantos dólares você tem?")
  dol = parseFloat(dol)

  if (!isNaN(dol)) { 
  let reais = dol * 5.71; 
  alert("O valor em reais é de R$" + reais.toFixed(2)); 
} else {
  alert("Por favor, insira um valor válido."); 
}
  }
document.getElementById("conversor").addEventListener("click", apertado); 
