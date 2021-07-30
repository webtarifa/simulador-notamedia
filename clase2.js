function capturar(){
    console.log("capturado");
    function Persona(nombre,asignatura,nota1,nota2,nota3,notamedia){
        this.nombre=nombre;
        this.asignatura=asignatura;
        this.nota1=nota1;
        this.nota2=nota2;
        this.nota3=nota3;
        this.notamedia=notamedia;
        
    }
    let nombreCapturar = document.getElementById("nombre").value;
    console.log(nombreCapturar);
    let asignaturaCapturar = document.getElementById("asignatura").value;
    console.log(asignaturaCapturar);
    
    let nota1Capturar = document.getElementById("nota1").value;
    console.log(nota1Capturar);

    let nota2Capturar = document.getElementById("nota2").value;
    console.log(nota2Capturar);
    
    let nota3Capturar =  document.getElementById("nota3").value;
    console.log(nota3Capturar);
    
    let = notamedia = nota1Capturar/3 + nota2Capturar/3+ nota3Capturar/3;
    nuevoSujeto = new Persona(nombreCapturar,asignaturaCapturar,nota1Capturar,nota2Capturar,nota3Capturar,notamedia );
    console.log(nuevoSujeto);
    agregar();
}

let baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoSujeto.nombre+"</td><td>"+nuevoSujeto.asignatura+"</td><td>"+nuevoSujeto.nota1+"</td><td>"+nuevoSujeto.nota2+"</td><td>"+nuevoSujeto.nota3+"</td><td>"+nuevoSujeto.notamedia+"</td></tbody>";
}
