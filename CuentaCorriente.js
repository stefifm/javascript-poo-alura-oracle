class CuentaCorriente {
  cliente
  numeroCuenta
  agencia
  #saldoCuenta

  constructor () {
    this.cliente = null
    this.numeroCuenta = ''
    this.agencia = ''
    this.#saldoCuenta = 0
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

  transferirParaCuenta (valor, cuentaDestino) {
    this.retirarCuenta(valor)
    cuentaDestino.depositoCuenta(valor)
  }
}

export default CuentaCorriente
