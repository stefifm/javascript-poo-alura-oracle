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
    if (valor > 0) {
      this.#saldoCuenta += valor
    }
  }

  retirarCuenta (valor) {
    if (valor <= this.#saldoCuenta) {
      this.#saldoCuenta -= valor
    }
  }
}

const cuentaLeondardo = new CuentaCorriente()

cuentaLeondardo.depositoCuenta(5000)
console.log(cuentaLeondardo)
cuentaLeondardo.retirarCuenta(5000)
console.log(cuentaLeondardo)
cuentaLeondardo.depositoCuenta(-100)
console.log(cuentaLeondardo)
