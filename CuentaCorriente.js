class CuentaCorriente {
  numeroCuenta
  #saldoCuenta
  agencia

  constructor () {
    this.#saldoCuenta = 0
    this.numeroCuenta = ''
    this.agencia = ''
  }

  depositoCuenta (valor) {
    if (valor > 0) { this.#saldoCuenta += valor }
    return this.#saldoCuenta
  }

  retirarCuenta (valor) {
    if (valor <= this.#saldoCuenta) { this.#saldoCuenta -= valor }
    return this.#saldoCuenta
  }

  mostrarSaldo () {
    return this.#saldoCuenta
  }
}

export default CuentaCorriente
