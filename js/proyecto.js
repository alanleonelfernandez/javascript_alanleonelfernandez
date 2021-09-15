const consecionaria =  [{id: 1, marca: "Toyota",modelo:"Supra GR",precio:70000},
                        {id: 2, marca: "Ford",modelo:"Mustang GT",precio:65000},
                        {id: 3, marca: "Chevrolet",modelo:"Camaro ZL1",precio:60000},
                        {id: 4, marca: "Dodge",modelo:"Charger R/T",precio:67000},
                        {id: 5, marca: "Dodge",modelo:"Challenger",precio:63000},
                        {id: 6, marca: "Chevrolet", modelo:"Corvette C8",precio:50000},
                        {id: 7, marca: "Toyota", modelo:"Yaris GR",precio:45000},
                        {id: 8, marca: "Toyota", modelo:"Camry",precio:39000},
                        {id: 9, marca: "Ford", modelo:"F-150 Raptor",precio:62000},
                        {id: 10, marca: "Volkswagen", modelo:"Golf GTI",precio:48000},
                        {id: 11, marca: "Volskwagen", modelo:"Scirocco",precio:45000},
                        {id: 12, marca: "Mercedes", modelo:"C200 AMG",precio:81000},
                    ];


class Vehiculo{

    constructor(vehiculo){
        this.id = vehiculo.id
        this.marca = vehiculo.marca
        this.modelo = vehiculo.modelo
        this.precio = vehiculo.precio
    }
}

const ford = new Vehiculo({id:13,marca:"Ford",modelo:"Focus ST",precio:62000})
consecionaria.push(ford)

const mostrarMarca = (marcaVehiculo)=>{
    const busqueda = consecionaria.filter(vehiculo => vehiculo.marca === marcaVehiculo)
    console.log(busqueda)
}

let comprarAuto = prompt("¿Desea comprar un automovil? SI/NO").toUpperCase();
const error = "Lo sentimos, lo que usted ingresó es erroneo"
    if(comprarAuto == "SI"){
        const buscarMarca = prompt("Que marca de vehiculo desea comprar?").toUpperCase();
        comprarAuto = ""
            if(buscarMarca == "TOYOTA"){
                mostrarMarca("Toyota");
            }
            else if(buscarMarca == "FORD"){
                mostrarMarca("Ford")
            }
            else if(buscarMarca == "DODGE"){
                mostrarMarca("Dodge")
            }
            else if(buscarMarca == "CHEVROLET"){
                mostrarMarca("Chevrolet")
            }
            else if(buscarMarca == "VOLKSWAGEN"){
                mostrarMarca("Volkswagen")
            }
            else if(buscarMarca == "MERCEDES"){
                mostrarMarca("Mercedes")
            }
            else{
                alert("En este momento la marca que ingreso no esta disponible en stock");
            }
    }
    else if(comprarAuto == "NO"){
        alert("Muchas gracias, vuelva pronto!");
        comprarAuto = ""
    }else{
        alert(error);
        comprarAuto = ""
    }