let num1 = Number(prompt("Ingrese un numero"))
let num2 = Number(prompt("Ingrese otro numero"))

if (num1 == 0 || num2 == 0)
{
    document.write("Error de Syntaxis");
}
else
{
    document.write("El resultado es ="+num1 / num2);
}