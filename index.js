const promptForIndicator = () =>{
const indicator = prompt('Ingrese un indicador');

if(indicator < 0){
    alert('El valor es menor que 0');
    promptForIndicator();
}else if (indicator > 0){
    alert('El valor es mayor que 0');
    promptForIndicator();
}else
{
    alert('El valor es igual a 0');
    promptForIndicator();
}


}

promptForIndicator();