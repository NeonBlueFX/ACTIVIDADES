let num1 = +prompt("Ingrese el primer numero");
let num2 = +prompt("Ingrese rl segundo numero");

let num = Number(prompt("1 = SUMA 2, 2 = RESTA, 3 = MULTIPLICACION, 4 = DIVISION"))

switch(num){
case 1:
    document.write(num1 + num2);
    break;
case 2:
    document.write(num1 - num2);
    break;
case 3:
    document.write(num1 * num2);
    break;
case 4:
    if (num1 == 0 || num2 == 0)
    {
        document.write("Error de Syntaxis");
    }
    else
    {
        document.write(num1 / num2);
    }
    break;
}
