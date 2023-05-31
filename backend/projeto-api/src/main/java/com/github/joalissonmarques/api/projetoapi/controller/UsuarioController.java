package com.github.joalissonmarques.api.projetoapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {
	
	@GetMapping("/usuarios")
	public String texto () {
		return "Acessou, seja bem vindo";
	}
}
