/* Desafio entegable 1 

    let pesos = parseInt(prompt("Ingrese cantidad de pesos"));
    let dolarCompra = pesos / 179;
    let dolarVenta = pesos / 182;

    alert("Valor de compra del Dolar: " + dolarCompra);
    console.log("Valor de venta del Dolar: " + dolarVenta)

*/

/* //Desafio entregable 2 

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
    else if(jugadorFavorito == "CRISTIANO"){
        alert(jugadorFavorito + " Ronaldo: Ganador de 5 Champions, 5 balones de oro y maximo anotador de la historia");
    }
    else if(jugadorFavorito == "ZIDANE"){
        alert("Zinedine " + jugadorFavorito + ": Mago francés con la pelota, campeón del mundo en el año 1998");
    }
    else{
        alert("No entendes nada de futbol");
    }*/

//Desafio entregable 3

/* let  sector = prompt("¿De que sector desea adquirir su entrada?")
const  entrada = "Aquí está su entrada, disfrute del partido." 

while(sector != ""){
    switch (sector.toUpperCase()) {
        case "PLATEA":
            const socio = prompt("Usted es socio?").toUpperCase()
            if(socio == "SI"){
                alert(entrada)
                sector = ""
            }else{
                const  asociarse = prompt("Desea asociarse?")
                if(asociarse.toUpperCase() != "SI"){
                    alert("Lo sentimos, la platea es exclusiva para socios")
                    sector = ""
                }else{
                    alert(entrada)
                    sector = ""
                }
            }
            break
        case "POPULAR":
            alert(entrada);
            sector = ""
        break
        default:
            alert("Este sector no existe o no esta disponible")
            sector = prompt("¿De que sector desea adquirir su entrada?")
        break
    }
    

} */

//Desafio entregable 4 (con complementario)

/* 
const calcularPorcentaje = (a,b,c) =>{
    return a * b / c
}
const totalConIntereses = (a,b,c,d) =>{
    return [(a / b) + (a * c / d)] * b
}
const division = (a,b) => a / b;
const interesMensual = (a,b,c,d) =>{
    return (a / b) + (a * c / d);
}

let credito = prompt("¿Desea pedir un prestamo? SI/NO").toUpperCase();
const error = "Lo sentimos, lo que usted ingresó es erroneo"
    if(credito == "SI"){
        const cantidadDinero = parseInt(prompt("¿Cuanto dinero desea pedir?"));
        credito = ""
            if(cantidadDinero <= 100000){
                const cantidadTiempo = parseInt(prompt("¿Durante cuantos meses?"));
                credito = ""
                    if(cantidadTiempo <= 12){
                        alert("Aqui tiene su dinero: $" + cantidadDinero );
                        alert("Usted tendra que devolverlo en " + cantidadTiempo + " cuotas de $" + Math.round(division(cantidadDinero,cantidadTiempo)) + " mas el interes mensual del %5 ($" + Math.round(calcularPorcentaje(cantidadDinero,5,100)) +").")
                        alert("La cuota en total es de $" + Math.round(interesMensual(cantidadDinero,cantidadTiempo,5,100)))
                        alert("En total usted tiene que devolver $" + Math.round(totalConIntereses(cantidadDinero,cantidadTiempo,5,100)) + " en el lapso de " + cantidadTiempo + " meses.")
                        credito = ""
                    }else{
                        alert(error);
                        credito = ""
                    }
            }else{
                alert(error);
                credito = ""
            }
    }else if(credito == "NO"){
        alert("Muchas gracias, vuelva pronto!");
        credito = ""
    }else{
        alert(error);
        credito = ""
    }
*/

//Desafio entregable 5 - objetos










//ejemplo
/* 
const calcularInflacion = (producto, precioInicial, precioFinal)=>{

        const porcentaje = calcularPorcentaje(precioInicial, precioFianl)

        console.log("El producto aumento" + producto + "aumento un" +)
    }

const calcularPorcentaje = (precioInicial, precioFinal)=>{

    return (precioFinal*100)/precioInicial + "%"

}

calcularInflacion("Yerba", 7,192) */