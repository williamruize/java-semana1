'user strict'
//1. convertir litros
/*Litros=prompt("Ingrese el volumen en Litros:");
Centi=Litros*100;
Deci=Litros*10;
Galon=Litros/3.785;
Onzas=Litros*33.814;
console.log ("El valor en Litros ingresado es: "+Litros);
console.log("en centilitros es: "+ Centi);
console.log("en decilitros es: "+ Deci);
console.log("en galones es: "+ Galon);
console.log("en onzas es: "+ Onzas);*/

//2. Operaciones basicas
/*const num1=prompt("Ingrese valor 1:");
const num2=prompt("Ingrese valor 2:");
Val1=parseInt(num1);
Val2=parseInt(num2);
Suma=Val1+Val2;
Resta=num1-num2;
Division=num1/num2;
Multiplica=num1*num2;
console.log ("El Valor uno ingresado es: " + num1);
console.log ("El Valor dos ingresado es: " + num2);
console.log("El resultado de la suma de los dos valores es: "+ Suma);
console.log("El resultado de la resta de los dos valores es: "+ Resta);
console.log("El resultado de la división de los dos valores es: "+ Division);
console.log("El resultado de la multiplicación de los dos valores es: "+ Multiplica);*/

//3. convertir Centigrados a Fahrenheit
/*const Valgrados=prompt("Introduzca el valor en ° : ");
Afahre=(Valgrados*9/5)+32;
Acenti=(Valgrados-32)*(5/9);
Afahre=(Math.round(Afahre*100)/100);
Acenti=(Math.round(Acenti*100)/100);
console.log(Valgrados+" ° Centigrados en Fahrenheit son : "+ Afahre +" °F");
console.log(Valgrados+" ° Fahrenheit en Centigrados son: "+ Acenti +" °C");*/

//4. valor a pagar por gasolina
//const Galon=prompt("Introduzca la cantidad de galones: ");
/*const Galon=12;
const Centi=Galon*378.5;
const Valorcenti=Centi*25;
const Litros=Galon*3.785;
console.log("La cantidad de galones es: " + Galon);
console.log("El valor a pagar es: "+ Valorcenti + " Pesos");
console.log("La cantidad de gasolina despachada es: "+ Litros + " Litros");*/

//5. calculo de salario
const Ingreso=30000;
console.log("Su salario mensual es de $"+Ingreso);
if (Ingreso<=699999) {
    Pension=(Ingreso*0.02);
    Auxtrans=(Ingreso*0.06);
    Valneto=Ingreso+Auxtrans-Pension;
    console.log("El auxilio de transporte es de $"+Auxtrans);    
} else {
    if (Ingreso>=700000 && Ingreso<=999999) {
        Pension=(Ingreso*0.04);
        Subsidio=12000;
        Valneto=Ingreso+Subsidio-Pension;
        console.log("El subsidio familiar es de $"+Subsidio);
    } else {
        Pension=(Ingreso*0.06);
        Valneto=Ingreso-Pension;
    }
}
console.log("El valor descontado por pensión es de $"+Pension);
console.log("El valor neto a pagar despues de retenciones es de $"+Valneto);