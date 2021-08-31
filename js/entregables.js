/* Desafio entegable 1 

    let pesos = parseInt(prompt("Ingrese cantidad de pesos"));
    let dolarCompra = pesos / 179;
    let dolarVenta = pesos / 182;

    alert("Valor de compra del Dolar: " + dolarCompra);
    console.log("Valor de venta del Dolar: " + dolarVenta)

*/

/* Desafio entregable 2 */

    let jugadorFavorito = prompt("¿Cual es para vos el mejor futbolista de la historia?").toUpperCase();

    if(jugadorFavorito == "MESSI"){
        alert("Lionel Andres " + jugadorFavorito + ": Ganador de 6 balones de oro, 4 Champions y 1 Copa America");
    }
    else if(jugadorFavorito == "MARADONA"){
        alert("Diego Armando " + jugadorFavorito + ": Ganador del Mundial 86, ídolo de cada camiseta que vistió");
    }
    else if(jugadorFavorito == "PELE"){
        alert(jugadorFavorito + ": apodado como el rey del futból, ganadór de 3 mundiales con Brasil");
    }
    else if(jugadorFavorito == "CRISTIANO" || "RONALDO"){
        alert(jugadorFavorito + " CR7: Ganador de 5 Champions, 5 balones de oro y maximo anotador de la historia");
    }
    else if(jugadorFavorito == "ZIDANE"){
        alert("Zinedine " + jugadorFavorito + ": Mago francés con la pelota, campeón del mundo en el año 1998");
    }
    else{
        alert("No entendes nada de futbol");
    }