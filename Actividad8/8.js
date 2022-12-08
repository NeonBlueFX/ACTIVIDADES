let num1 = Number(prompt("Ingrese un primer numero"))
let num2 = Number(prompt("Ingrese un segundo numero"))
let num3 = Number(prompt("Ingrese un tercer numero"))


if(num1 > num2 && num1 > num3)
{
document.write("El primer numero ("+num1+") es el mayor")
}
else{
if(num2 > num1 && num2 > num3)
{
document.write("El Segundo numero ("+num2+") es el mayor")
}
else
{
    if(num3 > num2 && num3 > num1)
{
document.write("El Tercer numero ("+num3+") es el mayor")
}
}
}

