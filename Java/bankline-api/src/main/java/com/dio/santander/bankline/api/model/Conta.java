package com.dio.santander.bankline.api.model;

public class Conta {

	private Long numero;
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
