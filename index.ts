let gabarito: string = prompt('Gabarito:');
let respostas: string = prompt('Respostas:')
let quantidade_questoes: number = parseFloat(prompt('Quantidade de Questões: '));
let respostas_corretas: number = 0;

for (let pos = 0; pos < quantidade_questoes; pos++) {
   if (gabarito[pos] ==    respostas[pos])    {
       respostas_corretas++;
   }
}
document.write('Respostas corretas = ${respostas_corretas}');

 

