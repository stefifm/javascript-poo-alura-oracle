import CuentaCorriente from './CuentaCorriente.js'

/* CREANDO OBJETO CUENTA CORRIENTE */

const cuentaLeondardo = new CuentaCorriente()

/* OPERACIÓN DE MOSTRAR SALDO, DEPOSITO Y RETIRO DE DINERO DE CUENTA */

let saldo = cuentaLeondardo.mostrarSaldo()

console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.depositoCuenta(5000)
console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.retirarCuenta(5000)
console.log(`El saldo actual es de $ ${saldo}`)

saldo = cuentaLeondardo.depositoCuenta(1000)
console.log(`El saldo actual es de $ ${saldo}`)
