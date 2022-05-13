const valHrsOrd = 265; //Valor de la Horas Ordinarias
const valHrsExt = 350; //Valor de la Horas Extras
const hrsMaxOrd = 40;  //Horas Maximas Ordinarias que se puede trabajar
let inHrsTrab = 20;    //Entrada Horas Trabajadas
let thrsMaxOrd = inHrsTrab > hrsMaxOrd? hrsMaxOrd: inHrsTrab; //Horas Laborales Ordinarias Trabajadas
let thrsMaxExt = (inHrsTrab - thrsMaxOrd) > 0? (inHrsTrab - thrsMaxOrd): 0; //Horas Extras trabajadas
let totPagHrsOrd = (valHrsOrd * thrsMaxOrd); //Total a pagar por Horas laborales Ordinarias
let totPagHrsExt = (valHrsExt * thrsMaxExt); //Total a pagar por Horas Extras laborales

console.log("El total a pagar por horas laborales normal (40hrs) es de: "+totPagHrsOrd+"");
console.log("El total a pagar por horas Extras "+thrsMaxExt+" hrs es de: "+totPagHrsExt+"");
