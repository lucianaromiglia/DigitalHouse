
/*
const firstName = "juan";
const lastName = "rueda";

let val = 42;

let arr = ["hola", 42 , function(){console.log("hola")}]

arr[2]();

for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);

}

*/



//------------------------------------------------------------------------------------------------------------------------------------------------------------------

///  ejercicio integrador ( uso de Objetos y arreglo)

/*

let cliente1 = new Object();
cliente1.nombre = "Nicolas";
cliente1.apellido = "Lopez";
cliente1.edad = 27;
cliente1.peso = 83.5;
cliente1.altura = 170
cliente1.prepagada = "Swiss Medical";
cliente1.imc = cliente1.peso/((cliente1.altura/100)*(cliente1.altura/100));


let cliente2 = new Object();
cliente2.nombre = "Esteban";
cliente2.apellido = "Piazza";
cliente2.edad = 28;
cliente2.peso = 80.1;
cliente2.altura = 176;
cliente2.prepagada = "Osde";
cliente2.imc = cliente2.peso/((cliente2.altura/100)*(cliente2.altura/100));


let cliente3 = new Object();
cliente3.nombre = "Jose";
cliente3.apellido = "Fermoso";
cliente3.edad = 33;
cliente3.peso = 63.7;
cliente3.altura = 153;
cliente3.prepagada = "NO TIENE";
cliente3.imc = cliente3.peso/((cliente3.altura/100)*(cliente3.altura/100));

let cliente4 = new Object();
cliente4.nombre = "Juana";
cliente4.apellido = "Fernandez";
cliente4.edad = 26;
cliente4.peso = 55.0;
cliente4.altura = 132;
cliente4.prepagada = "Omint";
cliente4.imc = cliente4.peso/((cliente4.altura/100)*(cliente4.altura/100));

let arregloClientes = [cliente1, cliente2, cliente3, cliente4,];

for(let i = 0; i<arregloClientes.length; i++)
{

    console.log(arregloClientes[i].nombre + " " + arregloClientes[i].apellido + "  tiene " +  arregloClientes[i].edad + " años y su indice de masa corporal es de: " + arregloClientes[i].imc + "\n"); 

}

*/


//------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*

let nombreJugador = "David";
let golesJugador = 0;
let PrecioEnDolares = 0;

let variable = function ()
{
   golesJugador++;
   console.log("GOL!!!!!!!!!!!");
   PrecioEnDolares += 10000;
   console.log(PrecioEnDolares + " este es el valor en dolares");
}

function hattrick()
{
    hacerGol();
    hacerGol();
    hacerGol();
    PrecioEnDolares += (PrecioEnDolares/100)*10 ;
    console.log("el precio mas el 10% es: " + PrecioEnDolares);
}

hattrick();
*/





//------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
function puedeSubir(altura, acompanado, estaPenalizado){

	if(estaPenalizado === true){
		return false;

	}
	else{
		if(altura > 1.40 && altura < 2){
			return true;
		}else if(altura <= 1.40 && acompanado === true && altura >= 1.20){
			return true;
		}
		else{
			return false;
		}
	}
}

console.log(puedeSubir(1.2, true, false));
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* codigo principal

let arrayFrase = [
	"No",
	"he",
	"fracasado,",
	"simplemente",
	"me",
	"he",
	"topado",
	"con",
	"diez",
	"mil",
	"soluciones",
	"equivocadas"
  ];
  
  let fraseNueva = "";
  */

  /* forma uno de hacerlo
  for(let i = 0; i<arrayFrase.length;i++)
  {
	 fraseNueva += arrayFrase[i] + " ";
  }*/

  /* forma dos de hacerlo
  fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva);
  */
 //------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
 let estudiantes = [
	{
	  nombre: 'Alvaro',
	  promedio : 9,
	  curso : 'Android',
	},
	{
	  nombre: 'Daniel',
	  promedio : 6,
	  curso : 'Full Stack',
	},
	{
	  nombre: 'Alexis',
	  promedio : 3,
	  curso : 'iOS',
	},
  ]
*/

  /* forma uno de hacerlo
  let estudiante1 = {
	nombre: "Juan",
	promedio: 5,
	cuso: "iOS"
  }
  
  let estudiante2 = {
	nombre: "Miguel",
	promedio: 2,
	cuso: "Android"
  }
  estudiantes.push(estudiante1, estudiante2);
  */
  

  
  /* 
  forma tres de hacerlo 
	estudiantes.push({nombre: "Juan", promedio: 5, cuso: "iOS"}, {nombre: "Miguel", promedio: 2, cuso: "Android"});
	
  */ 

  /*
	estudiantes.push({nombre: 'Juan', promedio : 5, curso : 'iOS'})
  
	estudiantes.push({nombre: 'Miguel', promedio : 2, curso:'Android'})
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
