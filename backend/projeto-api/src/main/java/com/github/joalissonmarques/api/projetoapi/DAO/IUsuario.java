package com.github.joalissonmarques.api.projetoapi.DAO;

import org.springframework.data.repository.CrudRepository;

import com.github.joalissonmarques.api.projetoapi.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer>{

}
