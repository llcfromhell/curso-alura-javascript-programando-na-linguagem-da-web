function adicionarPaciente(event) {

event.preventDefault();

var nome = document.querySelector("#campo-nome").value;
var peso = document.querySelector("#campo-peso").value;
var altura = document.querySelector("#campo-altura").value;

var trPacienteNovo = 
	"<tr class='paciente'>"
	+"<td class='info-nome'>"+nome+"</td>"
	+"<td class='info-peso'>"+peso+"</td>"
	+"<td class='info-altura'>"+altura+"</td>"
	+"<td class='info-imc'></td>"
	+"</tr>";
	
var table = document.querySelector("table");
table.innerHTML += trPacienteNovo;

document.querySelector("#campo-nome").value = "";
document.querySelector("#campo-peso").value = "";
document.querySelector("#campo-altura").value = "";

}

var adicionar = document.getElementById("adicionar-paciente");
adicionar.addEventListener("click", adicionarPaciente);
adicionar.addEventListener("click", function(){
	
	var trsPacientes = document.getElementsByClassName("paciente");
	utils.percorreArray(trsPacientes, pacienteFactory.montaPaciente);
	
})