$(document).ready(function(){
  const bici =[
    {
      nome: 'Bmx',
      peso: 5
    },
    {
      nome: 'Tandem',
      peso: 5
    },
    {
      nome: 'Triciclo',
      peso: 3
    },
    {
      nome: 'Bici da cicloturismo',
      peso: 3
    },
    {
      nome: 'Mountain bike',
      peso: 5
    },
    {
      nome: 'Gravel bike',
      peso: 8
    },
  ];
  let min = bici[0].peso;
  bici.forEach((bicicletta, i) => {
    if (bicicletta.peso < min) {
      min = bicicletta.peso;
    }
  });
  let bicipiccola = bici.filter((bicicletta) => bicicletta.peso = min);
  document.write(`La bici che pesa meno é la ${bicipiccola[0].nome} ed il suo peso é ${min} kg`);



  let array = [1, 2, 3, 4, 5, 6, 7, 8]
  var a = prompt("inserisci un numero da 1 a 7");
  var b = prompt("inserisci un numero da 1 a 8 piu grande del precedente");
  newarray = [];
  array.forEach((i) => {
    if (array[i]>=array[a] && array[i] <= array[b]) {
      newarray.push(array[i]);
    }
  });
  console.log(newarray);
});
