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
/* 
class Vehiculos{
	constructor(marca,modelo,precio,motor,stock){
		this.marca= marca;
		this.modelo= modelo;
		this.precio= precio;
		this.motor= motor;
		this.stock= stock;
	}
	promocion(){
		let promo = `Aprovecha nuestro descuento especial en ${this.marca} ${this.modelo} version de motor ${this.motor} y llevatelo por solo ${this.precio*0.8} dolares.`;
		console.log(promo)
	}
	compra(){
		if(this.stock > 0){
			console.log(`Queda stock disponible para la compra de su proximo ${this.marca}`)
			this.stock = this.stock -1
		}
		else{
			let error = `No hay stock disponible de ${this.marca} en este momento`
			console.log(error)
		}
	}
}

const toyota = new Vehiculos("Toyota","Camry",50000,"3.5 V6",3);
const chevrolet = new Vehiculos("Chevrolet","Camaro",65000,"6.2 V8",8);
const ford = new Vehiculos("Ford","Mustang",60000,"5.0 V8",5);
const dodge = new Vehiculos("Dodge","Charger",55000,"5.7 V8",3)

ford.promocion();
chevrolet.promocion();
toyota.promocion();
dodge.promocion();
ford.compra();
chevrolet.compra();
toyota.compra();
toyota.compra();
toyota.compra();
toyota.compra();
dodge.compra(); */

//Desafio entregable 6 - Arrays
/* 
const consecionaria =  [{id: 1, marca: "Toyota",modelo:"Supra GR",precio:70000},
                        {id: 2, marca: "Ford",modelo:"Mustang GT",precio:65000},
                        {id: 3, marca: "Chevrolet",modelo:"Camaro ZL1",precio:60000},
                        {id: 4, marca: "Dodge",modelo:"Charger R/T",precio:67000},
                        {id: 5, marca: "Dodge",modelo:"Challenger",precio:63000},
                        {id: 6, marca: "Chevrolet", modelo:"Corvette C8",precio:50000},
                        {id: 7, marca: "Chevrolet", modelo:"Silverado SS",precio:71000}];


class Vehiculo{

    constructor(vehiculo){
        this.id = vehiculo.id
        this.marca = vehiculo.marca
        this.modelo = vehiculo.modelo
        this.precio = vehiculo.precio
    }
}

const peugeot = new Vehiculo({id:8,marca:"Ford",modelo:"Focus ST",precio:62000})
consecionaria.push(peugeot)

const carrito = []

const comprar = (modeloVehiculo) =>{

        let vehiculo = consecionaria.find(vehiculo => vehiculo.modelo == modeloVehiculo )
        if(vehiculo){
            carrito.push(vehiculo)
        }else{
            console.log("Vehiculo no disponible en stock")
        }
} 
comprar("Mustang GT")

console.log(carrito)

const buscarMarca = (marcaVehiculo)=>{

    const busqueda = consecionaria.filter(vehiculo => vehiculo.marca === marcaVehiculo)
    console.log(busqueda)
}
buscarMarca("Chevrolet");

//Desafio complementario 6 - orden de Arrays con sort

consecionaria.sort((a,b) =>{
    if(a.precio < b.precio){
        return -1;
    }
    if(a.precio > b.precio){
        return 1;
    }
    return 0;
});
console.log(consecionaria)

consecionaria.sort((a,b) =>{
    if(a.modelo < b.modelo){
        return -1;
    }
    if(a.modelo > b.modelo){
        return 1;
    }
    return 0;
});
console.log(consecionaria)

consecionaria.sort((a,b) =>{
    if(a.marca < b.marca){
        return -1;
    }
    if(a.marca > b.marca){
        return 1;
    }
    return 0;
});
console.log(consecionaria)
 */
