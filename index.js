class Cliente {
  nombreCliente
  dniCliente
  numeroCuenta
  saldoCuenta
}

const cliente1 = new Cliente()

cliente1.nombreCliente = 'Jose'
cliente1.dniCliente = '12345678'
cliente1.numeroCuenta = '123456789'
cliente1.saldoCuenta = 1000.00

const cliente2 = new Cliente()

cliente2.nombreCliente = 'Marta'
cliente2.dniCliente = '20530980'
cliente2.numeroCuenta = '34599902'
cliente2.saldoCuenta = 5000.50

const cliente3 = new Cliente()

cliente3.nombreCliente = 'Fede'
cliente3.dniCliente = '3445516779'
cliente3.numeroCuenta = '908765432'
cliente3.saldoCuenta = 300.20

console.log(cliente1)
console.log(cliente2)
console.log(cliente3)
