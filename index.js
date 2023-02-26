import CuentaCorriente from './CuentaCorriente.js'
import Cliente from './Cliente.js'

const cuentaLeondardo = new CuentaCorriente()
const cliente = new Cliente()

cliente.nombreCliente = 'Leonardo'
cliente.dniCliente = '123456789'
cliente.rutCliente = '1001'

cuentaLeondardo.numeroCuenta = '1'
cuentaLeondardo.agencia = '001'
cuentaLeondardo.cliente = cliente

let saldo = cuentaLeondardo.mostrarSaldo()

saldo = cuentaLeondardo.depositoCuenta(5000)
console.log(`El saldo actual de (cuentaLeonardo) $ ${saldo}`)

const cuentaMaria = new CuentaCorriente()
const clienteMaria = new Cliente()

clienteMaria.nombreCliente = 'Maria'
clienteMaria.dniCliente = '30539530'
clienteMaria.rutCliente = '1002'

cuentaMaria.numeroCuenta = '2'
cuentaMaria.agencia = '002'
cuentaMaria.setCliente = clienteMaria

console.log(cuentaMaria.getCliente)

cuentaMaria.cliente = 0

console.log(cuentaMaria.getCliente)
/**

cuentaLeondardo.transferirParaCuenta(100, cuentaMaria)

const saldoMaria = cuentaMaria.mostrarSaldo()
console.log(`El saldo actual es de (cuentaMaria) $ ${saldoMaria}`)
const saldoLeonardo = cuentaLeondardo.mostrarSaldo()
console.log(`El saldo actual es de (cuentaLeonardo) $ ${saldoLeonardo}`)
*/
