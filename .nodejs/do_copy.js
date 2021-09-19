const path = require('path')
const fs = require('fs')

const rootPath = '../'
const readdirSync = fs.readdirSync(path.resolve(rootPath)).filter(name => name.lastIndexOf(".html") >= 0);
// console.log(readdirSync)
readdirSync.forEach(fileName => {
    // console.log(fileName)
    const originPath = path.resolve(rootPath, fileName);
    let fileContent = fs.readFileSync(originPath).toString()
    // step1 copy
    const copyPath = path.resolve(rootPath, '.copy');
    console.log(copyPath)
    !fs.existsSync(copyPath) && fs.mkdirSync(copyPath)
    fs.copyFileSync(originPath, path.resolve(copyPath, fileName));


})

