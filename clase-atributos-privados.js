import CuentaCorriente from './CuentaCorriente.js'

const cuentaLeondardo = new CuentaCorriente()

let saldo = cuentaLeondardo.mostrarSaldo()

console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.depositoCuenta(5000)
console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.retirarCuenta(5000)
console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.depositoCuenta(1000)
console.log(`El saldo actual es de $ ${saldo}`)
