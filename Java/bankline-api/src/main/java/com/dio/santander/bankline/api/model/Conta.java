package com.dio.santander.bankline.api.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Conta {

	@Column(name= "conta_numero")
	private Long numero;
	
	@Column(name= "conta_saldo")
	private Double saldo;
	
	public void setNumero(Long numero) {
		this.numero = numero;
	}
	
	public Long getNumero() {
		return numero;
	}
	
	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}
	
	public Double getSaldo() {
		return saldo;
	}
	
	
}
