# Desafío 1

Una empresa Argentina vende productos que cotizan en función del valor del dólar. 
Nuestro cliente necesita una calculadora que pueda convertir el valor en pesos de un producto a su valor en dólares.
Para esto nos solicita una calculadora en la cual al ingresar el valor del producto, arroje como resultado el valor en dólares dependiendo del tipo de cambio (dólar oficial, blue, contado con liqui y mep).
La calculadora debe poder guardar en memoria los últimos 10 cálculos realizados y para poder diferenciarlos se debe ingresar en un campo de texto la referencia, por ejemplo: Fertilizante A1B4.
Una vez alcanzado el limite de memoria se sobre escriben en FIFO (first in, first out).
La calculadora debe contar con un campo para ingresar la cantidad de pesos, el campo antes mencionado y la posibilidad de elegir entre calcular+guardar y solo calcular.
Si se desea volver a ver un calculo, el resultado debe ser el arrojado en el momento de la consulta y no un nuevo calculo. Ya que se espera que en cada consulta se obtengan los valores actualizados de la cotización del dólar. En este punto el usuario podrá solicitar volver a calcular el monto si quisiera.
Desarrollar la solución en formato de aplicación web. El código debe estar en el repositorio Git, con un readme que indique el paso a paso de instalación y puesta en marcha.

> Fecha de puesta en común: Viernes 12 de mayo 