const medida = parseFloat(prompt("Insira uma medida em metros:"));

// Aqui o usuário escolhe a unidade para a conversão
const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decíemtros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
);

//Aqui nos utliziamos o switch para mostrar os resultados de acordo com as diferentes opções

/*
switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
}
*/

// Nessa opção logo abaixo usaremos um bloco default e os braks ém cada case para garantir que o default não seja ativado

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
    break;
  default:
    alert("Opção Inválida!!!!");
    break;
}

//:D
//:D
