function combustivel(){
    var maisBarato;
    var gasolina =  document.getElementById('gasolina').value;
    var etanol   =  document.getElementById('etanol').value;
    var result   =  document.getElementById('result');
	
	 gasolina = gasolina.replace(',','.');
     etanol   = etanol.replace(',','.');
   
if(gasolina != '' && etanol!=''){

    maisBarato = etanol/gasolina;

    if(maisBarato >= 0.7){
    result.innerHTML = 'Melhor abstecer em gasolina';
    }else if(maisBarato <= 0.7){
    result.innerHTML = 'Melhor abstcer com alcool';
    }else{
    result.innerHTML = 'Tanto faz abastecer em gasolina ou alcool';
    }
}
else{
    alert('Preencha todos os campos!');
}

document.getElementById('gasolina').value = '';
document.getElementById('etanol').value = '';
}

function verificarInput(event){
    //var express = 'vamos verificar';
    //alert(express.replace()
   // alert('vc clicou em caracter invalido!');
   
    if(letra != 0 && letra !=1 && letra !=2 && letra !=3 && letra !=4 && letra !=5 && letra !=6 && letra !=7 && letra != 8 && letra !=9 && letra != ',' && letra !='.' && letra != 'Backspace' && letra!= 'Delete' && letra != 'Tab' && letra != 'Enter' && letra != 'ArrowLeft' && letra!= 'ArrowRight'){
        alert('Caracter invalido!');
    } 
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value = ''; 
}
