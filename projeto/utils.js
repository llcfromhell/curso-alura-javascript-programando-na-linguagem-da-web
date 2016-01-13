var utils = {
	percorreArray : percorreArray
}

function percorreArray(trsPacientes, factoryBehaviour) {
	
	for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){

		var trPaciente = trsPacientes[posicaoAtual];
	
		var pacienteAtual = factoryBehaviour(trPaciente);

		var tdImc = trPaciente.getElementsByClassName("info-imc")[0]; 
		tdImc.textContent = pacienteAtual.imc();

		console.log(pacienteAtual.imc()); 
	}
	
}