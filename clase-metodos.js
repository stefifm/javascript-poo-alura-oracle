class Cliente {
  nombreCliente
  dniCliente
  rutCliente
}

class CuentaCorriente {
  numeroCuenta
  saldoCuenta
  agencia

  depositoCuenta (valor) {
    this.saldoCuenta += valor
  }
}

const cliente1 = new Cliente()

cliente1.nombreCliente = 'Jose'
cliente1.dniCliente = '12345678'
cliente1.rutCliente = '12235'

const cuentaCorriente1 = new CuentaCorriente()
cuentaCorriente1.numeroCuenta = '123456789'
cuentaCorriente1.saldoCuenta = 1000.00
cuentaCorriente1.agencia = 1001

const cliente2 = new Cliente()

cliente2.nombreCliente = 'Marta'
cliente2.dniCliente = '20530980'
cliente2.rutCliente = '12346'

const cuentaCorriente2 = new CuentaCorriente()
cuentaCorriente2.numeroCuenta = '34599902'
cuentaCorriente2.saldoCuenta = 5000.50
cuentaCorriente2.agencia = 1002

console.log(cuentaCorriente2.saldoCuenta)
cuentaCorriente2.depositoCuenta(2000)
console.log(cuentaCorriente2.saldoCuenta)
cuentaCorriente2.depositoCuenta(2000)
console.log(cuentaCorriente2.saldoCuenta)
cuentaCorriente2.depositoCuenta(2000)
console.log(cuentaCorriente2.saldoCuenta)

const cliente3 = new Cliente()

cliente3.nombreCliente = 'Fede'
cliente3.dniCliente = '3445516779'
cliente3.rutCliente = '98375'

const cuentaCorriente3 = new CuentaCorriente()
cuentaCorriente3.numeroCuenta = '908765432'
cuentaCorriente3.saldoCuenta = 300.20
cuentaCorriente3.agencia = 1003
