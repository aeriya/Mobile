// EXERCÍCIO 1

let idade = 25; 
if (idade >= 16) { 
    console.log("Pode votar!");
} else { 
    console.log("Não pode votar!"); 
}

// EXERCÍCIO 2

let diaDaSemana = 'terça'; 
switch (diaDaSemana) { 
    case 'domingo': console.log('Hoje é domingo!'); break; 
    case 'segunda': console.log('Hoje é segunda-feira!'); break; 
    case 'terça': console.log('Hoje é terça-feira!'); break; 
    case 'quarta': console.log('Hoje  quarta-feira!'); break; 
    case 'quinta': console.log('Hoje é quinta-feira!'); break; 
    case 'sexta': console.log('Hoje é sexta-feira!'); break; 
    case 'sábado': console.log('Hoje é domingo!'); break; 
    default: console.log('Dia desconhecido...'); }