var botao = document.getElementById("calcula-imcs");

botao.addEventListener("click", function() {

	var trsPacientes = document.getElementsByClassName("paciente");

	utils.percorreArray(trsPacientes, pacienteFactory.montaPaciente);

});

