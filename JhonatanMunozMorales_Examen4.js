class Persona {
    nombre;
    apellido;
    edad;

    constructor(nombre="", apellido="", edad=0){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalle(){
        return this.nombre+" "+this.apellido+" de "+this.edad+" años ";
    }
}

class Empleado extends Persona{
    tipoEmpleado;

    constructor(nombre="", apellido="", edad=0, tipo=""){
        super(nombre, apellido, edad);
        this.tipoEmpleado = tipo;
    }

    getDetalle(){
        let mensaje = this.tipoEmpleado == "C"? "pertenece a empleado de confianza" : "pertenece a sindicato";
        return super.getDetalle()+" - "+this.tipoEmpleado+" "+mensaje;
    }
}

class Nomina {
    empleados = [];

    constructor(empleados=[]){
        this.empleados = empleados;
    }

    calcularPagoDiasLaborados(dias, tipo){
        let pago = 0;
        if(tipo == "C"){
            pago = (500 * dias) - (500 * 0.13);
        }
        else{
            pago = (350 * dias) - (350 * 0.1);
        }

        return pago;
    }

    calcularNomina(){
        let pago;
        let empleado;
        let dias;
        for(let idx = 0; idx < empleados.length; idx++){
            pago = 0;
            empleado = empleados[idx];
            dias = (Math.floor(Math.random() * 10) + 5);
            pago = this.calcularPagoDiasLaborados(dias, empleados[idx].tipoEmpleado);
            console.log(empleado.getDetalle()+" con un sueldo de "+pago+" por "+dias+" dias trabajados");
        }
    }
}

//Creación de Objetos Empleados
let empleados = [];
let empleado = new Empleado("Maria", "Carvajar", 33, "C");
empleados.push(empleado);
empleado = new Empleado("Juan", "Almeira", 23, "C");
empleados.push(empleado);
empleado = new Empleado("Dulce", "Salguero", 42, "S");
empleados.push(empleado);

//Creación Objeto nomina
let nomina = new Nomina(empleados);
nomina.calcularNomina();

