var pacienteFactory = {
	montaPaciente : montaPaciente
}

function montaPaciente(pacienteTr) {
	
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var pacienteAtual = { 
		nome : tdNome.textContent, 
		peso : tdPeso.textContent, 
		altura : tdAltura.textContent,
		imc : function()
		{
			if(this.altura != 0) {
				return this.peso / (this.altura * this.altura);
			} else {
				console("Não posso dividir por zero!");
				return 0;
			}
		}
	};
	
	return pacienteAtual;
	
}