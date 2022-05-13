const numeroInicio = 660; // Valor desde donde inicia
const numeroFinal = 360;  // Valor maximo hasta donde llega
const contador = 20;      // Valor al que va decementando el ciclo

for(let idx = numeroInicio; idx >= numeroFinal; idx=idx-contador){
    console.log(idx);
}
