// module download dengan npm
// Node package Manager
// Back End Modules

// npm i || npm install

// ======================CHALK==============================
// chalk => untuk mewarnai huruf di terminal
// let chalk = require('chalk')

// console.log(chalk.red('Merah'))
// console.log(chalk.blue('Biru'))
// console.log(chalk.yellow('Kuning'))
// console.log(chalk.bgRed('Belakangnya Merah'))

// kalau pakai keyword masukkan warna dengan string
// keyword variasi warnanya banyak

// console.log(chalk.keyword('red')('Merah'))
// console.log(chalk.keyword('yellow')('Kuning'))
// console.log(chalk.keyword('salmon')('warna salmon'))
// console.log(chalk.keyword('magenta')('warna magenta'))

// warna kode RGB
// console.log(chalk.rgb(169, 44, 44)('memakai RGB'))

// memakai heksa
// console.log(chalk.hex('#6b6787')('wah ada error'))

// ======================COLORS=============================
// npm install colors
// sama dengan chalk untuk mewarnai huruf di terminal
// namun bedanya colors bisa perhuruf dan semuanya melalui Method

// const colors = require('colors')

// console.log(colors.red('Hello'))
// console.log(colors.magenta('Hello'))
// console.log(colors.america('Hello'))
// console.log(colors.rainbow('Hello'))
// console.log(colors.trap('Hello'))

// =======================SLUG==============================
// npm install slug
// mengubah symbol menjadi string

// let slug = require('slug')

// let satu = slug('NodeJS ♥ is ☢'); 
// let dua = slug('<3');
// console.log(satu)
// console.log(dua)

//========================MOMENT=============================
// npm install moment
// untuk format tanggal
// dokumentasi: momentjs.com

// let moment = require('moment')

// let now1 = moment().format('ddd, hA')
// let now1 = moment().format('ddd, MMMM do YYYY, h:mm:ss a')
// console.log(now1)

// let now = moment([1992, 01, 25]).fromNow(true)
// let now = moment([1992, 00, 25]).format()
// let now = moment([1992, 00, 25]).toNow()
// console.log(now)

//========================LODASH=============================
// npm i loadash

// let lodash = require('lodash')
// console.log(lodash.isString(123))
// console.log(lodash.isBoolean(true))

// console.log(lodash.capitalize('BACKEND'))
// console.log(lodash.upperFirst('backEND'))
// console.log(lodash.upperCase('backend'))
// console.log(lodash.lowerFirst('BACKEND'))

// console.log(lodash.add(1,2))
// console.log(lodash.subtract(2,1))
// console.log(lodash.multiply(1,2))
// console.log(lodash.divide(1,2))

// console.log(lodash.ceil(90.3)) // => Math.ceil
// console.log(lodash.floor(90.3)) // => Math.floor

// array manipulation lodash
// let x = [1,2,3,4,5,6,7,8,9]
// let y = [1,1,2,2,3,3]

// console.log(lodash.isArray(x))
// console.log(lodash.uniq(y))
// console.log(lodash.max(x))
// console.log(lodash.min(x))
// console.log(lodash.sum(x))
// console.log(lodash.reverse(x))

//========================UNDERSCORE=============================
// npm i underscore

// let _ = require('underscore')
// let _ = require('./satu')

// let arr = [1,2,3]
// let output = _.map(arr, (val) => val*2)
// let mapping = arr.map(val => val*2)

// console.log(output)
// console.log(mapping)

// let x = [1,2,3]
// let y = [4,5,6]
// let z = [7,8,9]
// let arr = [x,y,z]
// // console.log(arr)
// let output = _.map(arr, _.first) // bikin duplikat dari function ini

// console.log(output)

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// let x = _.map(obj, val => val*2)
// // [1,2,3] * 2
// // output [2,4,6]
// console.log(x)

// let x = [1,2,3]
// let y = [4,5,6]
// let z = [7,8,9]

// let max = _.max(z)
// let min = _.min(z)

// console.log(max)
// console.log(min)

// let obj = [
//     {
//         nama: 'Ario',
//         usia: 28
//     },
//     {
//         nama: 'Andi',
//         usia: 33
//     },
//     {
//         nama: 'Susilo',
//         usia: 25
//     }
// ]

// let maxAge = _.max(obj, val => val.usia)
// let minAge = _.min(obj, val => val.usia)

// console.log(maxAge)
// console.log(minAge)

// let findName = _.find(obj, val => val.nama === 'Andi')
// let findOld = _.filter(obj, val => val.usia > 30)

// console.log(findName)
// console.log(findOld)

//========================YARGS=============================
// npm i yargs
// untuk ambil value dari terminal

// let argv = require('yargs').argv

// tulis di terminal npde --x=4 --y=4
// console.log(yargs.x, yargs.y)

// console.log(yargs.num)
// if (yargs.num > 10) {
//     console.log('diatas 10')
// } else {
//     console.log('dibawah 10')
// }
// tulis di terminal node index --num=9

// let command = process.argv
// console.log(command)


// =========================MEMBUAT API======================
let http = require('http')
let fs = require('fs')
let port = 2000
let server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.writeHead(200, {
            'Content.Type' : 'Text/html'
        })
        res.end('<h1>Hello</h1>')
    } else if (req.url === '/users') {
        let data = {
            nama : 'Ario'
        }
        res.writeHead(200, {
            'Content.type' : 'application/json'
        })
        res.end(JSON.stringify(data))
    } else if (req.url === '/json') {
        let json = fs.readFileSync('package.json')
        res.writeHead(200, {
            'Content.type' : 'application/json'
        })
        res.end(json)
    } else {
        res.end('<h1>not found</h1>')
    }
})
// 2000 adalah port
server.listen(port)
console.log(`server active at port ${port}`)