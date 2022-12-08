let num1 = Number(prompt("Ingrese un numero"))
let num2 = Number(prompt("Ingrese otro numero"))





if(num1 > 1 && num2 > 1)

{
    document.write("Hay 2 numero positivo")
}
else
{
    if(num1 > 1||num2 > 1  )
{
    document.write("Hay 1 numeros positivos")
}
else
{
    if(num1 < 1 && num2 < 1)
    {
        document.write("No hay numeros positivos")
    }
}
}