// Definición de clases

// class Cliente {
//   nombreCliente
//   dniCliente
//   rutCliente
// }

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

const cuentaLeondardo = new CuentaCorriente()

let saldo = cuentaLeondardo.mostrarSaldo()

console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.depositoCuenta(5000)
console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.retirarCuenta(5000)
console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.depositoCuenta(1000)
console.log(`El saldo actual es de $ ${saldo}`)
